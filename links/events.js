// 2024
const button2024 = document.getElementById("2024");
const modal2024 = document.getElementById("modal2024");

button2024.addEventListener("click", () => {
    modal2024.style.display = "flex";
});

modal2024.addEventListener("click", (e) => {
    console.log(e.target.className);
    if (e.target.className === "modal") {
        modal2024.style.display = "none";
    }
});

// 2019
const button2019 = document.getElementById("2019");
const modal2019 = document.getElementById("modal2019");

button2019.addEventListener("click", () => {
    modal2019.style.display = "flex";
});

modal2019.addEventListener("click", (e) => {
    console.log(e.target.className);
    if (e.target.className === "modal") {
        modal2019.style.display = "none";
    }
});

// 2021
const button2021 = document.getElementById("2021");
const modal2021 = document.getElementById("modal2021");

button2021.addEventListener("click", () => {
    modal2021.style.display = "flex";
});

modal2021.addEventListener("click", (e) => {
    console.log(e.target.className);
    if (e.target.className === "modal") {
        modal2021.style.display = "none";
    }
});
