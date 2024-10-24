let hamburger = document.querySelector(".hamburger");
let phoneNav = document.querySelector(".phone-nav");
let btn = document.querySelector("#submit-btn");

hamburger.addEventListener("click",() => {
    phoneNav.classList.toggle("phone-nav-show");
});