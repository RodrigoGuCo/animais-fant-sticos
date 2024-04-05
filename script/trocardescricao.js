export default function trocarDescricao() {
  const listaImagens = document.querySelectorAll(".animais-lista img");
  const listaDescricao = document.querySelectorAll(
    ".animais-descricao section"
  );

  if (listaImagens && listaDescricao) {
    listaImagens.forEach((elemento, indice) => {
      elemento.addEventListener("click", () => ativarClasse(indice));
      function ativarClasse(indice) {
        listaDescricao.forEach(desativarClasse);
        const direcao = listaDescricao[indice].dataset.anime;
        listaDescricao[indice].classList.add("ativar", direcao);
      }
    });
  }
  function desativarClasse(elemento) {
    elemento.classList.remove("ativar");
  }
}

