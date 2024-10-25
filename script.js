let hamburger = document.querySelector(".hamburger");
let phoneNav = document.querySelector(".phone-nav");
let btn = document.querySelector("#submit-btn");
let fill = document.querySelector(".fill-list");
let input = document.querySelector("input");

btn.addEventListener("click", () => {
    if(input.innerText === ""){
        fill.classList.remove("fill-list-hide");
    }
});