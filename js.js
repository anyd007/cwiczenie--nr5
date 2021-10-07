const btnShow = document.querySelector('.fa-bars');
const btnHide = document.querySelector('.fa-times');
const menuBurger = document.querySelector('.burger');
const ulShow = document.querySelector('ul');

const showHideMenu = () =>{
    ulShow.classList.toggle('active');
    menuBurger.classList.toggle('active');
    btnShow.classList.toggle('hide');
    btnHide.classList.toggle('hide');
}







menuBurger.addEventListener('click', showHideMenu);