var typed = new Typed(".input", {
    strings: ["Portfólio" , "Ana Júlia"],
    typeSpeed: 70,
    backSpeed: 65,
    loop: true 
})

/* ANIMAÇÕES */

const sr = ScrollReveal({
    distance: '35px',
    duration: 2400,
    reset: true
});

sr.reveal('.input',{delay: 210, origin: 'left'});
sr.reveal('.caixa-fundo',{delay: 310, origin: 'top'});
sr.reveal('.btn-social',{delay: 410, origin: 'right'});