const toggleLight = document.getElementById("light-mode");
const body = document.body;
const projects = document.querySelectorAll(".my-project");
const githubProfile = document.getElementById("githubProfile");

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  body.classList.add(savedTheme);

  if (savedTheme === "light-mode") {
    projects.forEach((project) => {
      project.classList.add("light");
    });
    toggleLight.src = "assets/sun-24-dark.png";
    githubProfile.src = "assets/github-10-24-dark.png";
  }
}

toggleLight.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    body.classList.remove("light-mode");

    projects.forEach((project) => {
      project.classList.remove("light");
    });

    localStorage.setItem("theme", "dark-mode");
    toggleLight.src = "assets/sun-24-light.png"; 
    githubProfile.src = "assets/github-10-24-light.png";
  } else {
    body.classList.add("light-mode");
    projects.forEach((project) => {
      project.classList.add("light");
    });

    localStorage.setItem("theme", "light-mode");
    toggleLight.src = "assets/sun-24-dark.png";
    githubProfile.src = "assets/github-10-24-dark.png";
  }
});
