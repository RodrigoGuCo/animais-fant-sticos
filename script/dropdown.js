import outsideClick from "./outsideclick.js";

export default function initDropDown() {
  const menusDropDown = document.querySelectorAll("[data-dropdown]");

  menusDropDown.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add("active");
    outsideClick(this, ["click", "touchstart"], () => {
      this.classList.remove("active");
    });
  }
}
