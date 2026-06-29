// Menu responsivo: mostra ou esconde os links no celular.
const menuToggle = document.getElementById('menuToggle');
const menuLinks = document.getElementById('menuLinks');

menuToggle.addEventListener('click', () => {
  menuLinks.classList.toggle('ativo');
});

// Alternância de tema claro/escuro usando classe no body.
const temaBtn = document.getElementById('temaBtn');
temaBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Validação do formulário de contato com simulação de envio.
const form = document.getElementById('formContato');
const retorno = document.getElementById('retornoForm');

form.addEventListener('submit', function(evento) {
  evento.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!nome || !email || !mensagem) {
    retorno.textContent = 'Por favor, preencha todos os campos antes de enviar.';
    retorno.style.color = '#b45309';
    return;
  }

  if (!emailValido) {
    retorno.textContent = 'Digite um e-mail válido. Exemplo: usuario@dominio.com';
    retorno.style.color = '#b45309';
    return;
  }

  retorno.textContent = 'Mensagem enviada com sucesso! Obrigada pelo contato.';
  retorno.style.color = '#15803d';
  form.reset();
});
