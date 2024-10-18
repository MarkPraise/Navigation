document.addEventListener("readystatechange",(e)=>{
    if(e.target.readyState ==="complete"){
        initApp()
    }
})

function initApp(){
    const openMenuButton =document.getElementById("open-mobile-menu");

    const closeMenuButton =document.getElementById("close-mobile-menu");

    const menu =document.getElementById("menu");

    const features =document.querySelector("[data-dropdown=feature]");
    const company =document.querySelector("[data-dropdown=company]");

    const featureList =document.getElementById("Features-dropDown");

    const companyList =document.getElementById("company-dropDown");

    openMenuButton.addEventListener("click",toggleNav);

    closeMenuButton.addEventListener("click",toggleNav);

    [features,company].forEach((element)=>{
        element.addEventListener("click",(e)=>{
            displayDropDown(e);
            changeDropDownImage(e)
        })
    });

    


    function toggleNav(e){
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");
    }

    function displayDropDown(e){

        if(e.target.dataset.dropdown =="feature"){
            featureList.classList.toggle("hidden");
        }
        else{
            companyList.classList.toggle("hidden");
        }
    }

    function changeDropDownImage(e){
        let img = e.target.querySelector("img");
        let ulList =  e.target.closest("li").querySelector("ul");


        if(ulList.classList.contains("hidden")){
            img.src="./images/icon-arrow-down.svg";
        }
        else{
            img.src="./images/icon-arrow-up.svg"
        }
    }
}

