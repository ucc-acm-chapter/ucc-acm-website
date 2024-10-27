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

function scrollTeamContainer(distance) {
    const teamContainer = document.querySelector(".team-container");
    teamContainer.scrollBy({
        left: distance,
        behavior: "smooth"
    });
}

function expandTeamMember(selectedMember) {
    const allMembers = document.querySelectorAll(".team-member");

    if (selectedMember.classList.contains("expanded")) {
        // If already expanded, collapse all to initial view
        allMembers.forEach(member => member.classList.remove("expanded", "dimmed"));
    } else {
        // Collapse others and expand the clicked member
        allMembers.forEach(member => {
            if (member === selectedMember) {
                member.classList.add("expanded");
                member.classList.remove("dimmed");
            } else {
                member.classList.add("dimmed");
                member.classList.remove("expanded");
            }
        });
    }
}
