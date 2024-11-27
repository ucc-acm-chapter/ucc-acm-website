
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

// Smooth scrolling for the team container
function scrollTeamContainer(distance) {
    const teamContainer = document.querySelector('.team-container');
    if (teamContainer) {
        teamContainer.scrollBy({
            left: distance,
            behavior: 'smooth',
        });
    }
}

// Expand and collapse team member
function expandTeamMember(selectedMember) {
    const allMembers = document.querySelectorAll('.team-member');
    const isExpanded = selectedMember.classList.contains('expanded');

    // Reset all members
    allMembers.forEach(member => {
        member.classList.remove('expanded', 'dimmed');
    });

    // Expand clicked member if it wasn't already expanded
    if (!isExpanded) {
        selectedMember.classList.add('expanded');
        allMembers.forEach(member => {
            if (member !== selectedMember) {
                member.classList.add('dimmed');
            }
        });
    }
}

// Event listeners for scroll and click handling
document.addEventListener('DOMContentLoaded', () => {
    const leftButton = document.querySelector('.scroll-button.left');
    const rightButton = document.querySelector('.scroll-button.right');
    const teamMembers = document.querySelectorAll('.team-member');

    // Scroll buttons
    if (leftButton && rightButton) {
        leftButton.addEventListener('click', () => scrollTeamContainer(-300));
        rightButton.addEventListener('click', () => scrollTeamContainer(300));
    }

    // Click handling for team members
    teamMembers.forEach(member => {
        member.addEventListener('click', () => expandTeamMember(member));
    });
});





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

