//list of my projects data in array to creat the projects with JS


/* Playrent */
const projects = [
  {
    id: "playrent",
    title: "Playrent",
    description: "An app that allows musicians to rent instruments instead of buying them.",
    category: "UX/UI",
    technologies: ["Figma", "UI Design"],
    image: "image/playrent.png",
    link: "#"
  },
/* An Honest Interfaces */
  {
    id: "honest-interfaces",
    title: "An Honest Interfaces",
    description: "A critical design project that shows the hidden ethical and environmental impact of driving.",
    category: "Critical Design",
    technologies: ["Critical Design", "Illustration"],
    image: "image/polestar_ui.gif",
    link: "#"
  },
  /* Touch & Discover */
  {
  id: "touch-discover",
  title: "Touch & Discover",
  description: "An interactive museum console that lets visitors explore the story of Ingemar Johansson.",
  category: "UX/UI",
  technologies: ["Interaction Design", "UI"],
  image: "image/touch_and_discover.png",
  link: "#"
},
/* Skräphjältarna */
{
  id: "skraphjaltarna",
  title: "Skräphjältarna",
  description: "An educational children’s book that teaches recycling in a fun and visual way.",
  category: "Illustration",
  technologies: ["Illustration", "Book Design"],
  image: "image/skraphjaltarna.png",
  link: "#"
},
/* Game Background */
{
  id: "game-background",
  title: "Game Background",
  description: "A digital game background illustration created from scratch for a client.",
  category: "Illustration",
  technologies: ["Photoshop", "Digital Painting"],
  image: "image/background.jpg",
  link: "#"
},
/* Portfolio */
{
  id: "portfolio",
  title: "Portfolio",
  description: "My personal portfolio built with HTML, CSS, and JavaScript.",
  category: "Web Development",
  technologies: ["HTML", "CSS", "JavaScript"],
  image: "image/webDesign.jpg",
  link: "#"
}
];


// get the container where projects will be shown
const projectsContainer = document.getElementById("projects_container");

// clear old content so projects are not duplicated
projectsContainer.innerHTML = "";

// loop through all projects and show them
projects.forEach(function (project) {

  // create a container for one project
  const card = document.createElement("div");

  // create title
  const title = document.createElement("h2");
  title.textContent = project.title;

  // create description
  const description = document.createElement("p");
  description.textContent = project.description;

  // put title and description inside the card
  card.appendChild(title);
  card.appendChild(description);

  // put the card inside the page
  projectsContainer.appendChild(card);
});