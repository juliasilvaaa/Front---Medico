import NavBarLayout from "@/components/layout/NavBarLayout";
import Image from "next/image";
import "../../styles/globals.css";
import "../../fonts/fonts.js";

export default function Inicio() {
    return (
        <div>
            <NavBarLayout>
                <div className="p-20 flex flex-col items-center justify-center">
                    {/* Card Principal */}
                    <div className="bg-gradient-custom shadow-lg rounded-lg mb-10 relative w-[35vw] h-[30vh] flex flex-col justify-center text-center">
                        <div className="flex flex-col items-center justify-center gap-10 h-full w-2/3 p-10">
                            <h1 className="text-xl text-white font-outfit text-left font-medium">
                                Como você pode garantir que cada paciente receba a atenção e o cuidado que merece hoje?
                            </h1>
                            <button className="bg-white text-[--azulclaro] px-6 py-3 rounded w-[150px]">
                                Começar
                            </button>
                        </div>
                        <Image
                            src="/img/medica.png"
                            alt="Imagem Principal"
                            width={1000}
                            height={1000}
                            className="h-[130%] w-auto absolute bottom-0 right-0"
                        />
                    </div>

                    {/* Cards Secundários */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-6xl mb-10">
                        {/* Card 1 */}
                        <div className="bg-white shadow-md rounded-lg flex p-4">
                            <Image
                                src="/img/coracao.png"
                                alt="Imagem 1"
                                width={50}
                                height={50}
                                className="mr-4 my-auto"
                            />
                            <div className="flex flex-col">
                                <h1 className="font-semibold">Consultas Realizadas</h1>
                                <p className="text-[--texto] text-2xl font-bold">50.980</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white shadow-md rounded-lg flex p-4">
                            <Image
                                src="/img/coracao-vital.png"
                                alt="Imagem 2"
                                width={50}
                                height={50}
                                className="mr-4 my-auto"
                            />
                            <div className="flex flex-col">
                                <h1 className="font-semibold">Consultas Canceladas</h1>
                                <p className="text-[--texto] text-2xl font-bold">100</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white shadow-md rounded-lg flex p-4">
                            <Image
                                src="/img/vital-coracao.png"
                                alt="Imagem 3"
                                width={50}
                                height={50}
                                className="mr-4 my-auto"
                            />
                            <div className="flex flex-col">
                                <h1 className="font-semibold">Pacientes</h1>
                                <p className="text-[--texto] text-2xl font-bold">10.523</p>
                            </div>
                        </div>
                    </div>

                    {/* Mais Dois Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl">
                        {/* Card 4 */}
                        <div className="bg-white shadow-md rounded-lg p-4 text-center">
                            <Image
                                src="https://via.placeholder.com/100"
                                alt="Imagem 4"
                                width={100}
                                height={100}
                                className="mx-auto mb-2"
                            />
                            <h1 className="font-semibold">Título 4</h1>
                            <p className="text-gray-600">Descrição do card 4.</p>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-white shadow-md rounded-lg p-4 text-center">
                            <Image
                                src="https://via.placeholder.com/100"
                                alt="Imagem 5"
                                width={100}
                                height={100}
                                className="mx-auto mb-2"
                            />
                            <h1 className="font-semibold">Título 5</h1>
                            <p className="text-gray-600">Descrição do card 5.</p>
                        </div>
                    </div>
                </div>
            </NavBarLayout>
        </div>
    );
}