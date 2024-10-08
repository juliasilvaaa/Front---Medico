import NavBarLayout from "@/components/layout/NavBarLayout";
import Image from "next/image"; // Ajuste o caminho conforme necessário

export default function Inicio() {
    return (
        <div className="flex flex-col">
            <NavBarLayout>
            
                <div className="flex-1 p-4">
                    {/* <h1>Estou na Home</h1> */}



                    {/* Div para o inupt e img  */}
                    <div className=" ">
                

                    <div className="">
                    <input type="text" placeholder="Pesquisar..."className="bg-[--navempresa] pl-3 pr-10 py-2 ml-[60vh]  mt-[50px] rounded-full w-96 h-14 border focus:border-blue-900 focus:bg-blue-5 transition-all" 
                    />
                   
                    </div>

            </div>

            <div>
                <h1 className="text-2xl font-bold text-[--font] p-10" >CONSULTAS</h1>
            </div>

            {/* Div para exibir a galeria de vídeo */}
            <div>
                <h1  className="text-2xl font-bold text-[--font] p-10" >GALERIA</h1>
            </div>


                    {/* Aqui você pode adicionar mais conteúdo */}
                </div>
            </NavBarLayout>
        </div>
    );
}