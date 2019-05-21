console.log("I can be seen")

const toggleInput = document.querySelector(".toggle-input");
toggleInput.addEventListener("click", () => {
    document.getElementById("search").classList.toggle("active")
    document.querySelector(".social-media").classList.toggle("is-hidden")
})