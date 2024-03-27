const body = document.querySelector( "body" );
    sidebar = body.querySelector( ".sidebar" );
    toggle = body.querySelector( ".toggle" );
    searchBtn = body.querySelector( ".search-box" );

    toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close")
    })

const optionMenu = document.querySelector(".Prescrip-menu"),
        prescripBtn = optionMenu.querySelector(".Prescrip-btn"),
        formOption = optionMenu.querySelectorAll(".option"),
        pBtnText = optionMenu.querySelector(".pBtn-text");

prescripBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));


formOption.forEach(option => {
    option.addEventListener("click", () =>{
        let selectedOption = option.querySelector("option").innerText;
    } )
    
} )