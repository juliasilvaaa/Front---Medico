"use client";

import React, { useState } from 'react';
import Modal from "@/components/Modal";

export default function Login() {
  const [openModal, setOpenModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    // Imagem do Médico
    <div className="flex h-screen">
      <div className="w-1/2 bg-cover bg-center bg-medico-padrao"></div>

      {/* Div para textos, inputs e botões */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold mb-4 text-[--azulprincipal] font-poppins">Login</h1>

        {/* Email */}
        <form className="w-[60vh]">
          <div className="mb-4 relative">
            <label htmlFor="email" className="">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border border-gray-300 rounded p-2 pl-10 pr-10 w-full"
              placeholder="Seu email"
            />
            <img
              src="/img/iconemail.png"
              alt="Ícone de email"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
            />
          </div>

          {/* Senha */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="">Senha</label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              required
              className="border border-gray-300 rounded p-2 pl-10 pr-10 w-full"
              placeholder="Sua senha"
            />
            <img
              src="/img/ocultarsenha.png"
              alt="Ícone de cadeado"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          <button type="submit" className="bg-[--azulprincipal] text-white rounded-lg p-2 w-full">Entrar</button>
        </form>

        {/* Linha para "Esqueceu sua senha?" e "Clique aqui" */}
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
}