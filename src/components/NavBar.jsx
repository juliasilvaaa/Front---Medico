// NavBar.js
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import "../styles/globals.css";

// Import das Imagens
import agendaImg from "../../public/img/agenda.png"
import inicioImg from "../../public/img/inicio.png"
import notificacoesImg from "../../public/img/notificacoes.png"
import mensagensImg from "../../public/img/mensagens.png"




import NavBarCategory from './NavBarCategory';

const NavBar = () => {
    return (
        <div className="bg-[--azulescuro] text-white w-64 min-h-screen flex flex-col py-6 px-4">
            {/* Logo Vital+ */}
            <div className="top-0 flex">
                <img className="h-[10vh]" src="/img/logo.png" alt="Logo" />

            </div>


            <ul className="mt-[1px]" id="categoria">
                {/* Links da NavBar */}
                <NavBarCategory category={"/inicio"} images={inicioImg} title={"Ínicio"} />
                <NavBarCategory category={"/info-clinica"} images={agendaImg} title={"Cronograma"} />
                <NavBarCategory category={"/notificacoes"} images={notificacoesImg} title={"Notificações"} />
                <NavBarCategory category={"/"} images={mensagensImg} title={"Mensagens"} />
                <NavBarCategory category={"/"} images={mensagensImg} title={"Perfil"} />







            </ul>
        </div>
    );
};

export default NavBar;