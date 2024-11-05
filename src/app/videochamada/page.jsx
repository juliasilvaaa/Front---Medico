"use client";

import NavBarLayout from "@/components/layout/NavBarLayout";
import { useRouter } from "next/navigation"; // Verifique se essa importação está correta
import { useEffect, useState } from "react";

const Videochamada = () => {
    const router = useRouter();
    const [meetingUrl, setMeetingUrl] = useState(null);

    useEffect(() => {
        if (!router.isReady) return; // Espera o router estar pronto

        const { id } = router.query;
        console.log(router.query);


        if (typeof id === 'string') { // Verifica se id é uma string
            const iniciarReuniao = async () => {
                try {
                    const response = await fetch(`http://localhost:3001/generate-meeting?id=${id}`);
                    const data = await response.json();
                    setMeetingUrl(data.url);
                } catch (error) {
                    console.error("Erro ao gerar reunião:", error);
                }
            };

            iniciarReuniao();
        }
    }, [router.isReady, router.query]);

    return (
        <NavBarLayout>
            <div className="flex flex-col items-center p-4">
                <h1 className="text-xl font-semibold mb-4">
                    {/* Verifique se router.query está definido antes de acessar id */}
                    Consulta ID: {router.query && router.query.id ? router.query.id : 'Carregando...'}
                </h1>
                <div id="meeting-container" className="w-full">
                    {meetingUrl ? (
                        <iframe
                            src={meetingUrl}
                            style={{ width: '100%', height: '500px', border: 'none' }}
                            allow="camera; microphone; fullscreen"
                        ></iframe>
                    ) : (
                        <p className="text-gray-600">Aguardando a criação da chamada de vídeo...</p>
                    )}
                </div>
            </div>
        </NavBarLayout>
    );
};

export default Videochamada;
