"use client";

import React, { useState, useEffect } from 'react';
import NavBarCategory from './NavBarCategory';
import inicioImg from '../../public/img/inicio.png';
import agendaImg from '../../public/img/calendario.png';
import notificacoesImg from '../../public/img/notificacoes.png';
import ajustesImg from '../../public/img/ajustes.png';


const NavBar = () => {
  const [medico, setMedico] = useState(null);
  const [nome, setNome] = useState('Carregando...');

  useEffect(() => {
    const fetchMedico = async () => {
      const medicoId = localStorage.getItem('idC'); // Obtém o ID do médico
      console.log('ID do médico:', medicoId); // Verificando o ID do médico

      // Verifica se o ID é válido
      if (!medicoId || isNaN(medicoId)) {
        console.error('ID do médico é inválido:', medicoId);
        setNome('Erro: ID do médico inválido.');
        return; // Não faz a requisição se o ID for inválido
      }

      try {
        const response = await fetch(`https://vital-umqy.onrender.com/v1/vital/medico/${medicoId}`);
        const data = await response.json();
        console.log('Dados do médico:', data); // Log dos dados do médico

        // Verifica se a resposta da API é um sucesso
        if (!response.ok) {
          throw new Error(data.message || 'Erro ao buscar os dados do médico');
        }

        // Ajustando para a estrutura da resposta da API
        if (data.medico && data.medico.length > 0) {
          setMedico(data.medico[0]);
          setNome(`Dr. ${data.medico[0].nome_medico}`); // Usando nome_medico conforme a resposta da API
        } else {
          console.error('Nenhum médico encontrado para este ID.');
        }
      } catch (error) {
        console.error('Erro ao buscar os dados do médico', error);
        setNome('Erro ao buscar os dados do médico.');
      }
    };

    fetchMedico();
  }, []);

  return (
    <div className="bg-[--azulescuro] text-white w-64 min-h-screen flex flex-col py-6 px-4">
      <div className="top-0">
        <img className="h-[60px]" src="/img/logo.png" alt="Logo" />
      </div>

      <div className="flex items-center justify-center mt-20">
        <div className="">
        <img src="#/public/img/medico.png" alt="" />
        </div>
      </div>

      <h1 className="flex items-center justify-center font-poppins mt-4">
        Olá, {nome}
      </h1>

      <ul className="mt-[8vh]" id="categoria">
        <li className="mb-6">
          <NavBarCategory category={"/inicio"} images={inicioImg} title={"Ínicio"} />
        </li>
        <li className="mb-6">
          <NavBarCategory category={"/consultas"} images={agendaImg} title={"Agenda"} />
        </li>
        <li className="mb-6">
          <NavBarCategory category={"/notificacoes"} images={notificacoesImg} title={"Notificações"} />
        </li>
        <li className="mb-6">
          <NavBarCategory category={"/"} images={ajustesImg} title={"Ajustes"} />
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
