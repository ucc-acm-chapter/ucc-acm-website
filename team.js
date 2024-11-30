const members = [
    {
        firstName: "Nicola",
        lastName: "Rossberg",
        role: "Chairperson",
        description:
            "Nicola is a master's student and the UCC ACM Chapter Chair!",
        linkedIn: "https://www.linkedin.com/in/nicola-rossberg/",
    },
    {
        firstName: "Andrew",
        lastName: "Nash",
        role: "IT/Sys Admin",
        description:
            "Andrew oversees all technical matters in the ACM Chapter.",
        linkedIn: "https://www.linkedin.com/in/a-nash/",
    },
    {
        firstName: "Andrea",
        lastName: "Visentin",
        role: null,
        description: null,
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
        description:
            "Mikolaj created the ACM poster, and manages our social media platforms.",
        linkedIn: "https://www.linkedin.com/in/mikolaj-wujek-132354333/",
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
        firstName: "Pawel",
        lastName: "Popkiewicz",
        role: "OCM",
        description:
            "Pawel assisted with the development/managing of the website and online infrastructure.",
        linkedIn: "https://www.linkedin.com/in/dan-bokete-672a72316/",
    },
    {
        firstName: "Taylor",
        lastName: "Santos",
        role: "",
        description: "",
        linkedIn: "https://www.linkedin.com/in/taylor-santos-094954296/",
    },
    {
        firstName: "Leo",
        lastName: "Berdin",
        role: "OCM",
        description: "Leo placed the ACM posters around UCC.",
        linkedIn: "https://www.linkedin.com/in/taylor-santos-094954296/",
    },
    {
        firstName: "Freddie",
        lastName: null,
        role: null,
        description: null,
        linkedIn: null,
    },
    {
        firstName: "Abigail",
        lastName: null,
        role: null,
        description: null,
        linkedIn: null,
    },
    {
        firstName: "Alison",
        lastName: null,
        role: null,
        description: null,
        linkedIn: null,
    },
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
