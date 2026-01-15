const btn = document.getElementById("menuBtn");
const menu = document.querySelector(".routes");

btn.addEventListener("click", () => {
    menu.classList.toggle("active");
});