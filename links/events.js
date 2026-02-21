const PAST_EVENTS = [
    {
        year: "2025",
        label: "Last Year",
        image: "../images/event4.JPG",
        alt: "A picture of an ACM event!",
        description:
            "The 2025 hackathon brought together talented participants for an incredible day of innovation and collaboration. Teams showcased exceptional problem-solving skills and creativity, tackling challenging problems with enthusiasm. The event fostered a vibrant atmosphere of learning and teamwork, creating lasting memories and inspiring connections among all participants.",
        paperHref: "files/IrlCPC_Problems_2025.pdf",
    },
    {
        year: "2024",
        label: "2024",
        image: "../images/event2.jpg",
        alt: "A picture of an ACM event from 2024!",
        description:
            "Last year's hackathon was a thrilling experience, with 62 teams coming together to solve challenges and push the boundaries of innovation. Teams enjoyed the collaborative spirit, diving into problem-solving and creating unique solutions. It was a day filled with learning, creativity, and unforgettable memories, making it a truly great experience for everyone involved.",
        paperHref: "files/IrlCPC_Problems_2024.pdf",
    },
    {
        year: "2023",
        label: "2023",
        image: "../images/event.jpg",
        alt: "A picture of an ACM event from 2023!",
        description:
            "In 2023, we hosted another exciting hackathon that brought together passionate minds to solve real-world problems. Teams worked tirelessly, blending creativity and technical skills to develop innovative solutions. The event was a celebration of collaboration and determination, leaving everyone inspired and eager for more. It was a fantastic way to kick off the year!",
        paperHref: "files/IrlCPC_Problems 2023.pdf",
    },
    {
        year: "2021",
        label: "2021",
        image: "../images/event3.jpg",
        alt: "A picture of an ACM event from 2021!",
        description:
            "The 2021 hackathon was a remarkable event, showcasing the resilience and creativity of participants despite the challenges of the year. Teams came together tackling complex problems with enthusiasm and ingenuity. The energy and dedication displayed by everyone made it a truly memorable experience, highlighting the power of innovation and collaboration.",
        paperHref: "files/IrlCPC_Problems_2021.pdf",
    },
];

function renderPastEvents() {
    const container = document.getElementById("past-events-list");
    if (!container) {
        return;
    }

    container.innerHTML = PAST_EVENTS.map((event) => {
        const modalId = `modal-${event.year}`;
        const modalContentId = `${modalId}-content`;

        return `
            <div>
                <figure>
                    <img src="${event.image}" alt="${event.alt}" />
                    <figcaption>
                        <h2>${event.label}</h2>
                        <p>${event.description}</p>
                        <button type="button" data-modal-open="${modalId}">View More</button>
                        <div id="${modalId}" class="modal">
                            <section id="${modalContentId}" class="modal-content">
                                <h3>${event.year} Past Paper</h3>
                                <p>The ${event.year} past papers are available to use and download here!</p>
                                <a href="${event.paperHref}" target="_blank" rel="noopener noreferrer">Download Past Paper</a>
                            </section>
                        </div>
                    </figcaption>
                </figure>
            </div>
        `;
    }).join("");
}

function closeAllPastEventModals() {
    const modals = document.querySelectorAll("#past-events-list .modal");
    modals.forEach((modal) => {
        modal.style.display = "none";
    });
}

function setupPastEventModalHandlers() {
    const container = document.getElementById("past-events-list");
    if (!container) {
        return;
    }

    container.addEventListener("click", (event) => {
        const openButton = event.target.closest("[data-modal-open]");
        if (openButton) {
            const modalId = openButton.getAttribute("data-modal-open");
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "flex";
            }
            return;
        }

        if (event.target.classList.contains("modal")) {
            event.target.style.display = "none";
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeAllPastEventModals();
        }
    });
}

function openFullscreen(img) {
    let fullscreenModal = document.querySelector(".fullscreen-modal");

    if (!fullscreenModal) {
        fullscreenModal = document.createElement("div");
        fullscreenModal.className = "fullscreen-modal";

        const closeBtn = document.createElement("div");
        closeBtn.className = "fullscreen-close";
        closeBtn.innerHTML = "&times;";
        closeBtn.onclick = closeFullscreen;

        const fullscreenImg = document.createElement("img");
        fullscreenModal.appendChild(closeBtn);
        fullscreenModal.appendChild(fullscreenImg);
        document.body.appendChild(fullscreenModal);

        fullscreenModal.addEventListener("click", (event) => {
            if (event.target === fullscreenModal) {
                closeFullscreen();
            }
        });
    }

    const fullscreenImg = fullscreenModal.querySelector("img");
    fullscreenImg.src = img.src;
    fullscreenImg.alt = img.alt;

    fullscreenModal.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeFullscreen() {
    const fullscreenModal = document.querySelector(".fullscreen-modal");
    if (fullscreenModal) {
        fullscreenModal.classList.remove("active");
        document.body.style.overflow = "auto";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderPastEvents();
    setupPastEventModalHandlers();
});
