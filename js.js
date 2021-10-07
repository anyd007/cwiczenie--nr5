const btnShow = document.querySelector('.fa-bars');
const btnHide = document.querySelector('.hide');
const menuBurger = document.querySelector('.burger');
const ulShow = document.querySelector('ul');

showMenu = () =>{
    menuBurger.classList.add('active')
    ulShow.classList.add('active')
}
hideMenu = ()=>{
    menuBurger.classList.remove('active');
    ulShow.classList.remove('active');
}
// const menu = () =>{
//     if(ulShow.hasAttribute('.active')){
//         hideMenu()
//     }else{
//         showMenu()
//     }
// }



btnShow.addEventListener('click', showMenu);
btnHide.addEventListener('click', hideMenu);