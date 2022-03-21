$(document).ready(function () {
    let menu = document.querySelector('#menu-bars');
    let header = document.querySelector('header');

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        header.classList.toggle('active');
    }

    window.onscroll = () => {
        menu.classList.remove('fa-times');
        header.classList.remove('active');
    }
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["I'm Prakash Rawat."],
        typeSpeed: 120,
        backSpeed: 100,
        loop: true
    });
    var typed = new Typed(".typing-1", {
        strings: ["I'm Prakash Rawat...."],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });
});