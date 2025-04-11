let openSidebar = document.querySelector(".open");
let closeSidebar = document.querySelector(".close");
let nav = document.querySelector(".nav")

openSidebar.onclick = function(){
    nav.classList.add("show");
    console.log("open sidebar")
}

closeSidebar.onclick = function(){
    nav.classList.remove("show");
}