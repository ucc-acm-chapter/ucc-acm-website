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
        linkedIn: null,
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
        linkedIn: null,
    },
    {
        firstName: "Mikolaj",
        lastName: "Wujek",
        role: "Secretary",
        description: "Mikolaj keeps everything organized and on schedule.",
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
        firstName: "Taylor",
        lastName: "Santos",
        role: null,
        description: null,
        linkedIn: null,
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
