document.addEventListener("readystatechange",(e)=>{
    if(e.target.readyState ==="complete"){
        initApp()
    }
})

function initApp(){
    const openMenuButton =document.getElementById("open-mobile-menu");
    const closeMenuButton =document.getElementById("close-mobile-menu");
    const menu =document.getElementById("menu");

    openMenuButton.addEventListener("click",toggleNav);

    closeMenuButton.addEventListener("click",toggleNav);

    function toggleNav(e){

        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");

    }
    
}

