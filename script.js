const button = document.querySelector(".menu-button")
const sideBar = document.querySelector(".side-bar")
const background = document.querySelector(".background")
const content = document.querySelector(".content")


button.addEventListener("click", ()=>{
    button.classList.add("active")
    sideBar.classList.add("active")
    background.classList.add("active")
    content.classList.add("active")
    
    document.body.style.backgroundColor = sideBar.classList.contains("active")? "#34495e": '#ecf0f1'
})

background.addEventListener("click", ()=>{
    button.classList.remove("active")
    sideBar.classList.remove("active")
    background.classList.remove("active")
    content.classList.remove("active")
    document.body.style.backgroundColor =  '#ecf0f1'
})



