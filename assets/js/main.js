
const bottom = document.querySelector(".bottom");

function ShowMenu() {
    const toggle = document.querySelector('.mobile-btn')
toggle.addEventListener("click", (e) => {
    e.preventDefault();
    bottom.classList.toggle("active");
})
}

ShowMenu()