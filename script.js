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
            contactForm.reset(); // Clears the form
        } else {
            showFeedback("Please fill out all required fields.", "error");
        }
    });

    function validateForm(name, email, message) {
        // Basic check to ensure only name, email, and message fields are filled
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
        feedback.classList.add(type); // Add success or error class

        // Auto-hide the message after 3 seconds
        setTimeout(() => {
            feedback.textContent = "";
            feedback.classList.remove("success", "error");
        }, 3000);
    }
});
