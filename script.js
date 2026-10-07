document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll('.carrossel input[type="radio"]');
  const carrossel = document.querySelector('.carrossel');
  let index = 0;
  let interval;

  function proximoSlide() {
    index = (index + 1) % inputs.length;
    inputs[index].checked = true;
  }

  function iniciarAutoplay() {
    interval = setInterval(proximoSlide, 5000); // Troca de slide a cada 5 segundos (5000ms)
  }

  function pararAutoplay() {
    clearInterval(interval);
  }

  // Inicia o carrossel automático
  iniciarAutoplay();

  // Pausa o carrossel quando o usuário passa o mouse por cima
  if (carrossel) {
    carrossel.addEventListener("mouseenter", pararAutoplay);
    carrossel.addEventListener("mouseleave", iniciarAutoplay);
  }

  // Atualiza o índice caso o usuário clique nas setas ou nos pontos manualmente
  inputs.forEach((input, i) => {
    input.addEventListener("change", function () {
      index = i;
    });
  });
});