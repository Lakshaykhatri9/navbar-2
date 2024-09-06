function toggleNav() {
    // Toggle the change class on the hamburger menu (for transforming to cross)
    document.getElementById("hamburger").classList.toggle("change");

    // Toggle the active class on the navbar to open/close it
    document.getElementById("navbar").classList.toggle("active");
}


function toggleAnswer(element) {
    // Find the parent element (faq-item) and toggle the 'active' class
    const faqItem = element.parentElement;
    faqItem.classList.toggle("active");

    // Get the answer div
    const answer = faqItem.querySelector(".faq-answer");

    // Toggle the max-height for smooth transition
    if (faqItem.classList.contains("active")) {
        answer.style.maxHeight = answer.scrollHeight + "px"; // Expand
    } else {
        answer.style.maxHeight = 0; // Collapse
    }
}


let table = document.querySelector(".table-1");
let ongoing = document.querySelector(".ongoing");
let resi = document.querySelector(".resi");
let del = document.querySelector(".del");
let table_2 = document.querySelector(".table-2")

ongoing.addEventListener("click", () => {
    table.classList.toggle("table-1-hide");
    table_2.classList.add("table-2-hide");
});

del.addEventListener("click",() => {
   table_2.classList.toggle("table-2-hide");
   table.classList.add("table-1-hide");
});