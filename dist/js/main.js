const menuBtn=document.querySelector(".mbtn");
const menuNav=document.querySelector(".menu-nav");
const menu=document.querySelector(".menu");
const menuBranding=document.querySelector(".mjpg")
const menuItems=document.querySelectorAll(".item");
let menuState=false;
menuBtn.addEventListener('click',toggleMenu);
function toggleMenu() {
    if(!menuState) {
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menuBranding.classList.add("show");
        menuItems.forEach(item => item.classList.add("show"));
        menuState=true;
    }
    else {
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menuBranding.classList.remove("show");
        menuItems.forEach(item => item.classList.remove("show"));
        menuState=false;
    }
}

