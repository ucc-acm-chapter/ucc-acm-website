
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navBar = document.getElementById("nav-bar");

    hamburger.addEventListener("click", function () {
        this.classList.toggle("active");
        navBar.classList.toggle("active");
    });

    // Close menu when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!navBar.contains(event.target) && !hamburger.contains(event.target)) {
            navBar.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });

    const navLinks = navBar.querySelectorAll("a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navBar.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });
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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

document.querySelector('.register-button').addEventListener('click', (event) => {
    window.open(event.target.href, '_blank');
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


document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector(".contact-form");
    
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents form from actually submitting
        
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();
        
        if (validateForm(name, email, message)) {
            // Mock form submission
            showFeedback("Thank you! Your message has been sent.", "success");
            contactForm.reset(); 
        } else {
            showFeedback("Please fill out all required fields.", "error");
        }
    });

    function validateForm(name, email, message) {
        if (!name || !email || !message) {
            return false;
        }
        return true;
    }

    function showFeedback(message, type) {
        // Create feedback element if it doesn't exist
        let feedback = document.querySelector(".feedback-message");
        if (!feedback) {
            feedback = document.createElement("div");
            feedback.classList.add("feedback-message");
            document.querySelector(".contact-container").appendChild(feedback);
        }

        feedback.textContent = message;
        feedback.classList.remove("success", "error"); // Remove existing classes
        feedback.classList.add(type);

        setTimeout(() => {
            feedback.textContent = "";
            feedback.classList.remove("success", "error");
        }, 3000);
    }
});

