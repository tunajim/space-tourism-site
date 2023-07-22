const crew = {
  hurley: {
    name: "douglas hurley",
    title: "Commander",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  shuttleworth: {
    name: "mark shuttleworth",
    title: "Mission Specialist",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  glover: {
    name: "victor glover",
    title: "Pilot",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  ansari: {
    name: "anousheh ansari",
    title: "Flight Engineer",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
};

const crewDots = Array.from(document.getElementsByClassName("crew-selector"));

crewDots.forEach((link) => {
    link.addEventListener("mouseup", updateActiveLink);
  link.addEventListener("mouseup", updateCrewInfo);
});

function updateActiveLink(e) {
    crewDots.forEach(link => {
        link.classList.remove("active");
    })

    e.target.classList.add("active");
}

function updateCrewInfo(e) {
  switch (e.target.getAttribute("data-crew")) {
    case "hurley":
      updateElements(crew.hurley);
      break;
    case "shuttleworth":
      updateElements(crew.shuttleworth);
      break;
    case "glover":
      updateElements(crew.glover);
      break;
    case "ansari":
      updateElements(crew.ansari);
      break;
  }
}

function updateElements(member) {
  const img = document.getElementById("crew-img");
  const title = document.getElementById("title");
  const name = document.getElementById("name");
  const description = document.getElementById("crew-description");

  img.src = `../assets/crew/image-${
    member.name.split(" ")[0]
  }-${member.name.split(" ")[1]}.webp`;

  title.textContent = member.title;
  name.textContent = member.name;
  description.textContent = member.description;
}
