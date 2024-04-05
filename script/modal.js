export default function mostrarModal() {
  const botaoLogin = document.querySelector('[data-modal="abrir"]');
  const modalContainer = document.querySelector('[data-modal="container"]');
  const botaoFechar = document.querySelector('[data-modal="fechar"]');

  function toggleAtivo(event) {
    event.preventDefault();
    modalContainer.classList.toggle("ativo");
  }

  function fecharForaModal(event) {
    if (event.target === this) {
      toggleAtivo(event);
    }
  }

  botaoLogin.addEventListener("click", toggleAtivo);
  botaoFechar.addEventListener("click", toggleAtivo);
  modalContainer.addEventListener("click", fecharForaModal);
}
