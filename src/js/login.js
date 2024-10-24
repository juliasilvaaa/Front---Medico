
// Arquivo para validação de Login do Médico
'use strict'

const button = document.getElementById('entrar')
const senhaInput = document.getElementById('senha')


const validarLogin = async (id) => {
  const email = document.getElementById('email').value.trim()
  const senha = document.getElementById('senha').value.trim()

  if (email === '' || senha === '') {
    alert('Por Favor Preencha todos os Campos !!')
  } else {
    try {
      const response = await fetch(`https://vital-umqy.onrender.com/v1/vital/loginMedico`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha: password }),
    })

      const result = await response.json()

      if (response.ok) {
        if (result.status_code === 200) {
          localStorage.setItem('idC', result.id_empresa)
          window.location.href = '../app/inicio/page.jsx'
        } else {
          alert(result.message || 'Ocorreu um erro inesperado.')
        }
      } else {
        alert(result.message || 'Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.')
      }
    } catch (error) {
      console.log(error)
      alert('Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.')
    }
  }
  button.addEventListener('click', validarLogin)
}


export default validarLogin;