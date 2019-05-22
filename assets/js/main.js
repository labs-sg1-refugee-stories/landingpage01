const toggleInput = document.querySelector(".toggle-input");
toggleInput.addEventListener("click", () => {
    document.getElementById("search").classList.toggle("active")
    document.querySelector(".social-media").classList.toggle("is-hidden")
})


const bottom = document.querySelector(".bottom");

function ShowMenu() {
    const toggle = document.querySelector('.mobile-btn')
toggle.addEventListener("click", (e) => {
    e.preventDefault();
    bottom.classList.toggle("active");
})
}

ShowMenu()