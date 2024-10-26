// Toggle Hamburger Menu

// document.getElementById("hamburger").addEventListener("click", function () {
//     const navBar = document.getElementById("nav-bar");
//     navBar.classList.toggle("active");
// });

document.getElementById("hamburger").addEventListener("click", function () {
    this.classList.toggle("active");
    document.getElementById("nav-bar").classList.toggle("active");
});

const backToTopButton = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

const navContainer = document.querySelector(".nav-container");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navContainer.classList.add("scrolled");
    } else {
        navContainer.classList.remove("scrolled");
    }
});

