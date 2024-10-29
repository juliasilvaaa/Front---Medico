"use client";

import React, { useState } from 'react';
import Modal from "@/components/Modal";
import validarLogin from '@/js/login.js'; 

const Login = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [crm, setCrm] = useState(''); // Mudança para CRM

  const handleEntrar = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão do form
    await validarLogin(email, crm); // Chama a função de validação
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-cover bg-center bg-medico-padrao"></div>

      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold mb-4 text-[--azulprincipal] font-poppins">Login</h1>

        <form className="w-[60vh]" onSubmit={handleEntrar}>
          <div className="mb-4 relative">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded p-2 pl-10 pr-10 w-full"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <img
              src="/img/iconemail.png"
              alt="Ícone de email"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>

          <div className="mb-4 relative">
            <label htmlFor="crm">CRM</label>
            <input
              type="text"
              id="crm"
              className="border border-gray-300 rounded p-2 pl-10 pr-10 w-full"
              placeholder="Seu CRM"
              value={crm}
              onChange={(e) => setCrm(e.target.value)}
              required
            />
          </div>

          <button
            id='entrar'
            type="submit"
            className="bg-[--azulprincipal] text-white rounded-lg p-2 w-full">
            Entrar
          </button>
        </form>

        <div className="flex items-center mt-4">
          <p className="text-gray-700">Esqueceu sua senha?</p>
          <button onClick={() => setOpenModal(true)} className="ml-2 text-blue-500 font-bold">
            Clique aqui
          </button>
        </div>

        <Modal isOpen={openModal} setModalOpen={() => setOpenModal(!openModal)} />
      </div>
    </div>
  );
};

export default Login;
