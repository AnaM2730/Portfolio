/* === DARK THEME === */
function mudarBackground() {
var body = document.body;

/* defini novo background */
body.style.background = "black";



}


/* 'use strict' 

const switcher = document.querySelector('.switch-container')

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className
    if(className== "light_theme")

    console.log('current class name: ' + className)
}) */





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









