const menu = document.querySelector('.menu-icons');
const exit = document.querySelector('.menu-container');

menu.addEventListener('click', () =>{
    menu.classList.toggle('menu-mobile');
    exit.classList.toggle('menu-mobile');
})

const scroll = document.querySelector('.top');
scroll.addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
    })
})