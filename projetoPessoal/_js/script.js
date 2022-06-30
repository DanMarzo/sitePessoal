const menu_nav = document.getElementById("id-menu-nav");

function menu_visivel()
{
    
    menu_nav.classList.toggle("active");
}

menu_nav.addEventListener("click", menu_visivel);