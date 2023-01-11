
let header = document.getElementById("header-principal") 
let menuNavigation = document.getElementById("menu-navigation")
let btnOpen = document.getElementById("btn-open")
let btnClose = document.getElementById("btn-close")


function openMenu() {
   header.classList.add("header-expanded")
   menuNavigation.classList.remove("none")
    btnOpen.style.visibility = "hidden"
    btnClose.style.visibility = "visible"
    checaMenuExpanded()
}

function closeMenu() {
    menuNavigation.classList.add("none")
    header.classList.remove("header-expanded")
    btnOpen.style.visibility = "visible"
    btnClose.style.visibility = "hidden"
    checaMenuExpanded()
       
}



btnOpen.addEventListener("click", openMenu)
btnClose.addEventListener("click", closeMenu)



function checaMenuExpanded() {

    if( header.classList == "header-expanded") {
        document.body.classList.add("body-no-overflow")
    }else {
        document.body.classList.remove("body-no-overflow")
    }
    
}











window.sr = ScrollReveal({reset: true})

sr.reveal('#icons-burgers-menu', {
    delay: 575,
    duration: 700,
    origin: 'bottom',
    distance: '100px',
});

sr.reveal('.scrolling', {
    delay: 575,
    duration: 1000,
    origin: 'bottom',
    distance: '100px',
});




