document.addEventListener("readystatechange",(e)=>{
    if(e.target.readyState ==="complete"){
        initApp()
    }
})

function initApp(){
    const features =document.getElementById("features");
    const company =document.getElementById("company");

    const mobileFeatures =document.getElementById("mobile-features");
    const mobileCompany =document.getElementById("mobile-company");


    [mobileFeatures,mobileCompany].forEach((item)=>{
        item.addEventListener("click",(e)=>{
            const li = e.target.closest("li");

            const content = li.querySelector("ul");
            const img =li.querySelector("img");
            
            changeDropDownIcon(img,content);

            content.classList.toggle("hidden");

        })
    })

    const mobileMenu =document.getElementById("mobile-menu");
    const openMobileMenu=document.getElementById("open-mobile-menu");
    const closeMobileMenu = document.getElementById("close-mobile-menu");

    openMobileMenu.addEventListener("click",()=>{
        mobileMenu.classList.remove("hidden")
    })
    closeMobileMenu.addEventListener("click",()=>{
        mobileMenu.classList.add("hidden")
    })

    let openDropDown;
    let icon;

    features.addEventListener("click",(e)=>{
        openDropDown = e.target.closest("a");
        icon = e.target.closest("a").querySelector("img");

        toggleDropDown(openDropDown.id,icon);

    })
    
    company.addEventListener("click",(e)=>{
        openDropDown = e.target.closest("a");
        icon =e.target.closest("a").querySelector("img");

        toggleDropDown(openDropDown.id,icon);
    })

}

function toggleDropDown(flag,icon){
    const featuresDropDown =document.querySelector("[data-features]");
    const companyDropDown =document.querySelector("[data-company]");
    
    if(flag ==="features"){

        changeDropDownIcon(icon,featuresDropDown);

        featuresDropDown.classList.toggle("hidden");
        featuresDropDown.classList.toggle("block");

    }
    else{
        changeDropDownIcon(icon,companyDropDown);

        companyDropDown.classList.toggle("hidden");
        companyDropDown.classList.toggle("block");

    }
    

}

function changeDropDownIcon(img,content){
    if(content.classList.contains("hidden")){
        img.src="./images/icon-arrow-up.svg";
        img.alt ="open dropDown";
    }
    else{
        img.src="./images/icon-arrow-down.svg"
        img.alt ="close dropDown";
    }
}

