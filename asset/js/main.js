const menuBurger = document.querySelector("#burger")
const menu = document.querySelector('#menu')

menuBurger.addEventListener('click', function (){
    menu.classList.toggle('active')

    console.log(menu)
})