const btnMobile = document.getElementById('menu-hamburguer');
const menu = document.getElementById('menu');
const img = document.querySelector("img-menu-hamburguer");

function toggleMenu(event){
    if (window.matchMedia("(min-width: 1199px)").matches) return;

    if (event.type === 'touchstart') event.preventDefault();
    
    const ulMenu = document.getElementById('menu');
    ulMenu.classList.toggle('active');

    const active = ulMenu.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    const img = document.getElementById("img-menu-hamburguer");

    if (active) {
        img.setAttribute('src', 'image/menu/menu-mobile-close.png');
    } else {
        img.setAttribute('src', 'image/menu/menu-mobile.png');
    }
    
    if (active) {
        event.currentTarget.setAttribute('area-label', 'fechar menu');
    } else {
        event.currentTarget.setAttribute('area-label', 'abrir menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
menu.addEventListener('click', toggleMenu);
