const members = [
    {
        firstName: "Nicola",
        lastName: "Rossberg",
        role: "Chairperson",
        description:
            "Nicola is a PhD student and the UCC ACM Chapter Chair!",
        linkedIn: "https://www.linkedin.com/in/nicola-rossberg/",
    },
    {
        firstName: "David",
        lastName: "Shanahan",
        role: "Vice-Chairperson",
        description:
            "David is Master's student and the UCC ACM Chapter Vice-Chair ",
        linkedIn: "https://www.linkedin.com/in/david-shanahan-89731a184/",
    },
    {
        firstName: "Marlon",
        lastName: "Ares",
        role: "Secretary",
        description:
            "Marlon manages minutes of committee meetings and oversees Chapter administration",
        linkedIn: "https://www.linkedin.com/in/marlon-jesus-ares-milian-4b2a16203/",
    },
    {
        firstName: "Michael",
        lastName: "Xuereb",
        role: "Finance Officer",
        description:
        "Michael ensures all finances are well-managed for events.",
        linkedIn: "https://www.linkedin.com/in/michael-xuereb1337/",
    },
    {
        firstName: "Andrea",
        lastName: "Visentin",
        role: "Academic Sponsor",
        description: 
            "Andrea is an Assistant Professor.",
        linkedIn: "https://www.linkedin.com/in/andrea-visentin-a4b9a585/",
    },
    {
        firstName: "Jordan",
        lastName: "Buckley",
        role: "Webmaster",
        description:
            "Jordan created/manages the website and online infrastructure.",
        linkedIn: "https://www.linkedin.com/in/jordan05/",
    },
    {
        firstName: "George",
        lastName: "Osemwengie",
        role: "OCM",
        description:
            "George is an OCM on the UCC ACM Student Chapter committee",
        linkedIn: "",
    },
    {
        firstName: "Ivan",
        lastName: "Fonagy",
        role: "Deputy Technical Manager",
        description:
            "Ivan helps with deployment and documentation of competition software.",
        linkedIn: "https://www.linkedin.com/in/ivan-fonagy/",
    },
    {
        firstName: "Abigail Elizabeth",
        lastName: "Joseph",
        role: "OCM",
        description:
            "Abigail is an OCM on the technical team in the UCC ACM Student Chapter committee",
        linkedIn: "https://www.linkedin.com/in/abigail-elizabeth-joseph-a94215334/",
    },
    {
        firstName: "Dan",
        lastName: "Bokete",
        role: "OCM",
        description:
            "Dan assisted with the development/managing of the website and online infrastructure.",
        linkedIn: "https://www.linkedin.com/in/dan-bokete-672a72316/",
    },
    {
        firstName: "Mikolaj",
        lastName: "Wujek",
        role: "Social Media Manager",
        description: "Mikolaj created the ACM poster, and manages our social media platforms.",
        linkedIn: "https://www.linkedin.com/in/mikolaj-wujek-132354333/",
    },
    {
        firstName: "Pawel",
        lastName: "Popkiewicz",
        role: "OCM",
        description:
            "Pawel assisted with the development/managing of the website and online infrastructure.",
        linkedIn: "https://www.linkedin.com/in/pawe%C5%82-popkiewicz-b3b727251/",
    }
];

const teamContainer = document.getElementById("teamContainer");

let html = "";
members.forEach((person) => {
    const rawHtml = `<div
    class="team-member"
    onclick="expandTeamMember(this)"
    >
    <img
        src="images/${person.firstName.toLowerCase()}.jpg"
        alt="An image of ${person.firstName} ${person.lastName}"
    />
    <h3>${person.firstName} ${person.lastName ? person.lastName : ""}</h3>
    <p class="role">${person.role ? person.role : "Unsure"}</p>
    <p class="description">
        ${person.description ? person.description : "Unsure"}
    </p>
    <a
        aria-label="link to linked in page"
        href="${person.linkedIn ? person.linkedIn : "#home"}"
    >
        <i class="fab fa-linkedin"></i>
    </a>
    </div>`;
    html += rawHtml;
});

teamContainer.innerHTML = html;
