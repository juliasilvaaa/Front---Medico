"use client"; // This line marks the component as a Client Component

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import "../styles/globals.css";

// Import das Imagens
import agendaImg from "../../public/img/calendario.png"
import inicioImg from "../../public/img/inicio-casa.png"
import notificacoesImg from "../../public/img/notificacoes.png"
import ajustesImg from "../../public/img/ajustes.png"

// Import do NavBar
import NavBarCategory from './NavBarCategory';

const NavBar = ({ medicoId }) => {
    const [medico, setMedico] = useState(null);

    useEffect(() => {
        const fetchMedico = async () => {
            if (!medicoId) return;
            try {
                const response = await fetch(`http://localhost:8080/v1/vital/medico/${medicoId}`);
                const data = await response.json();
                if (data.medico && data.medico.length > 0) {
                    setMedico(data.medico[0]) // Pega o médico
                }

            } catch (error) {
                console.error('Erro ao buscar os dados do médico', error);
            }
        };
        fetchMedico();
    }, [medicoId]);


    return (
        <div className="bg-[--azulescuro] text-white w-64 min-h-screen flex flex-col py-6 px-4">
            {/* Logo Vital+ */}
            <div className="top-0 ">
                <img className="h-[60px]" src="/img/logo.png" alt="Logo" />
            </div>

            <div className="flex items-center justify-center mt-20">


                {/* Foto de Perfil */}
                <div className="relative h-perfilH w-perfilW">

                    <img src={medico ? "/path/to/perfil.png" : "/path/to/default-profile.png"}
                        alt="Perfil"
                        className="relative z-10 mx-auto w-perfilW h-perfilH" />
                </div>
            </div>

            
            <h1 className="flex items-center justify-center font-poppins mt-4"> 
                Olá, {medico ? `Dr. ${medico.nome_medico}` : 'Carregando...'}
            </h1>


            <ul className="mt-[8vh]" id="categoria">
    {/* Links da NavBar */}
    <li className="mb-6"> {/* Adicionando margem inferior */}
        <NavBarCategory category={"/inicio"} images={inicioImg} title={"Ínicio"} />
    </li>
    <li className="mb-6"> {/* Adicionando margem inferior */}
        <NavBarCategory category={"/"} images={agendaImg} title={"Agenda"} />
    </li>
    <li className="mb-6"> {/* Adicionando margem inferior */}
        <NavBarCategory category={"/notificacoes"} images={notificacoesImg} title={"Notificações"} />
    </li>
    <li className="mb-6"> {/* Adicionando margem inferior */}
        <NavBarCategory category={"/"} images={ajustesImg} title={"Ajustes"} />
    </li>
</ul>
        </div>
    );
};

export default NavBar;