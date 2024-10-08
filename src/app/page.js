import React from 'react';



export default function Login() {
  return (
    // Imagem do Médico
    <div className="flex h-screen">
      <div className="w-1/2 bg-cover bg-center bg-medico-padrao">
      </div>

      {/* Div para textos, inputs e botões */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <h1 className="text-3xl font-bold mb-4 text-[--azulprincipal] font-poppins">Login</h1>



       {/* Email */}
        <form className="w-[40vh]">
          <div className="mb-4 relative">
            <label htmlFor="email" className="block mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border border-gray-300 rounded p-2 pl-10 w-full"
              placeholder="Seu email"
            />
            <img src="/img/iconemail.png" alt="Ícone de email" className=" transform -translate-y-1/2 w-5 h-5" />
          </div>


        {/* Senha  */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block mb-2">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="border border-gray-300 rounded p-2 pl-10 w-full"
              placeholder="Sua senha"
            />
            <img src="/img/ocultarsenha.png" alt="Ícone de cadeado" className="transform -translate-y-1/2 w-5 h-5" />
          </div>

          <button type="submit" className="bg-[--azulprincipal] text-white rounded-lg p-2 w-full">Entrar</button>
        </form>

        <p className="mt-4 text-center">Esqueceu sua senha? <a href="/reset-password" className="text-blue-500">Clique aqui</a></p>
        <p className="text-center">Não tem uma conta? <a href="/register" className="text-blue-500">Registre-se agora</a>.</p>
      </div>
    </div>
  );
}