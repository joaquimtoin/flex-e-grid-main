const botaoManu = document.querySelector('.cabecalho__menu');
const menu = document.querySelector('.menu-lateral');

botaoManu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})