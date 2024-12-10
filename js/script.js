const toggleLight = document.getElementById("light-mode");
const body = document.body;
const header = document.querySelector("header");
const projects = document.querySelectorAll(".my-project");
const githubProfile = document.getElementById("githubProfile");
const aboutme = document.querySelector(".aboutme");
const allProjects = document.querySelector(".projects");
const repoLinks = document.querySelectorAll(".github-repo a");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);

  if (savedTheme === "light-mode") {
    projects.forEach((project) => {
      project.classList.add("light");
    });

    repoLinks.forEach((link) => {
        link.classList.add("aLight");
    })
    toggleLight.src = "assets/sun-24-dark.png";
    githubProfile.src = "assets/github-10-24-dark.png";
    header.style.borderBottom = "1px solid #0e0e0e";
    allProjects.style.borderBottom = "1px solid #0e0e0e";
    aboutme.style.borderBottom = "1px solid #0e0e0e";
  }
}

toggleLight.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");
    header.style.borderBottom = "1px solid #fff";
    aboutme.style.borderBottom = "1px solid #fff";
    allProjects.style.borderBottom = "1px solid #fff";

    projects.forEach((project) => {
      project.classList.remove("light");
    });

    repoLinks.forEach((link) => {
        link.classList.remove("aLight");
    })

    localStorage.setItem("theme", "dark-mode");
    toggleLight.src = "assets/sun-24-light.png"; 
    githubProfile.src = "assets/github-10-24-light.png";
  } else {
    body.classList.add("light-mode");
    header.style.borderBottom = "1px solid #0e0e0e";
    aboutme.style.borderBottom = "1px solid #0e0e0e";
    allProjects.style.borderBottom = "1px solid #0e0e0e";

    projects.forEach((project) => {
      project.classList.add("light");
    });

    repoLinks.forEach((link) => {
        link.classList.add("aLight");
    })

    localStorage.setItem("theme", "light-mode");
    toggleLight.src = "assets/sun-24-dark.png";
    githubProfile.src = "assets/github-10-24-dark.png";
  }
});
