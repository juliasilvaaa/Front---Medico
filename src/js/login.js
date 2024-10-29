const validarLogin = async (email, crm) => {
  if (!email || !crm) {
    alert('Por favor, preencha todos os campos!');
    return;
  }

  try {
    const response = await fetch(`https://vital-umqy.onrender.com/v1/vital/loginMedico`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, crm }),
    });

    const result = await response.json();

    if (response.ok) {
      if (result.status_code === 200) {
        localStorage.setItem('idC', result)
        window.location.href = '/inicio'; // Ajuste para o redirecionamento correto
      } else {
        alert(result.message || 'Ocorreu um erro inesperado.');
      }
    } else {
      alert(result.message || 'Ocorreu um erro ao tentar fazer login. Tente novamente.');
    }
  } catch (error) {
    console.error('Erro:', error);
    alert('Ocorreu um erro ao tentar fazer login. Tente novamente.');
  }
};


export default validarLogin;