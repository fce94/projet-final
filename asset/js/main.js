const menuBurger = document.querySelector("#burger")
console.log(menuBurger)

menuBurger.addEventListener('click', function (){
    menuBurger.classList.toggle('active')
    console.log(menuBurger)
})

