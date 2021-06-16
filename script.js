// Pega o ID do login, senha e botão
const submitButton = document.getElementById('submit-button');

// AddEventListeners
submitButton.addEventListener('click', () => {
  const login = document.getElementById('login-input').value;
  const password = document.getElementById('password-input').value;

  console.log(login);
  console.log(password);

  // Checagem dos dados
  if (login === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Login ou senha inválidos.');
  }
});
