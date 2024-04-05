export default function ativarFaq() {
  const faqDt = document.querySelectorAll(".faq dt");
  function ativarDd(event) {
    const eventTarget = event.currentTarget;
    eventTarget.classList.toggle("ativardt");
    eventTarget.nextElementSibling.classList.toggle("ativar");
  }
  faqDt.forEach((elemento) => {
    elemento.addEventListener("click", ativarDd);
  });
}

