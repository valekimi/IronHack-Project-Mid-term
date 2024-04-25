//==========================================
// FETCH Data MAIN PROJECT

async function getData() {
  try {
    const response = await fetch(
      "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
    );

    if (!response.ok) {
      throw new Error("Error in load JSON");
    }
    const data = await response.json();

    const project = data[3];
    const { name, description, completed_on, image, content } = project;

    document.getElementById("projectTitle").textContent = name;
    document.getElementById("projectTopic").textContent = description;
    document.getElementById("projectDate").textContent =
      "Completed on " + completed_on;
    document.getElementById("projectDescription").innerHTML = content;

    const projectCover = document.getElementById("projectCover");
    projectCover.innerHTML = `<img src="${image}" alt="">`;
    const img = projectCover.querySelector("img");
    img.style.width = "100%";
    img.style.height = "400px";

    document.getElementById(
      "filterBlur"
    ).innerHTML = `<img src="${image}" alt="">`;

    //I add the class to the children of #filterBlur
    document.querySelector("#filterBlur img").classList.add("filterBlur");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
getData();

//==========================================
// FETCH Data OTHER PROJECTS

const projectCards = document.querySelectorAll(".project-card");

fetch(
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
)
  .then((response) => response.json())
  .then((data) => {
    const reverseData = data.slice().reverse();

    for (let i = 1; i < Math.min(reverseData.length, 4); i++) {
      const projectData = reverseData[i];
      projectCards[i - 1].querySelector(".cover").src = projectData.image;
      projectCards[i - 1].querySelector(".title").textContent =
        projectData.name;
      projectCards[i - 1].querySelector(".description").textContent =
        projectData.description;
    }
  })
  .catch((error) => console.error("Error fetching data:", error));
