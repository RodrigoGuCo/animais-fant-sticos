import outsideClick from "./outsideclick.js";

export default function activeBurgButton() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuLista = document.querySelector('[data-menu="lista"]');

  function activeBurg() {
    menuLista.classList.add("active");
    menuButton.classList.add("active");
    console.log("ativou");
    outsideClick(menuLista, ["click"], () => {
      menuLista.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }

  ["click"].forEach((evento) => {
    menuButton.addEventListener(evento, activeBurg);
  });
}
