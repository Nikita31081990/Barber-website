const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menuIcon");

menuIcon.addEventListener("click", () => {
    if(menu.style.display === "none"){
        menu.style.display = "block";
    }
    else{
        menu.style.display = "none";
    }

});