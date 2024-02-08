/* === DARK THEME === */
  const body = document.querySelector("body"),
  slider = document.querySelector(".slider");

  let getMode = localStorage.getItem("mode");
  if(getMode && getMode === "dark"){
    body.classList.add("dark");
    slider.classList.add("active");
  }
  
  slider.addEventListener("click", () => {
    body.classList.toggle("dark");
  
  
  if (!body.classList.contains( "dark" )) {
    return localStorage.setItem("mode", "light");
  }
  localStorage.setItem("mode", "dark");
});
  slider.addEventListener("click", () => slider.classList.toggle("active"));

  const $html = document.querySelector('html')
  const $checkbox = document.querySelector('#switch')
  $checkbox.addEventListener('change', function() {
    $html.classList.toggle('dark-mode')
  })

/* == Janela MODAL == */
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModal());
});