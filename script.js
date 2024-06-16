// TextContents
const aboutMe =
  "Hello there! I'm Stacey, a software engineer based in Singapore </br></br>\
  I am currently employed by Motional as part of the Cloud Applications Team, specializing in backend web development.</br></br>\
  With a passion for problem-solving and exploring new ideas, I thrive in collaborative environments where I can leverage my technical expertise to develop innovative solutions.";
const exp =
  "<ul>\
  <li>2020 - Present: Motional</li>\
  <ul><li>Software Engineer</li><li>Backend API and tooling for cloud services</li></ul>\
  </br>\
  <li>2017 - 2020: nuTonomy</li>\
  <ul><li>Autonomous Vehicle (AV) Engineer</li><li>AV sensor mounts design, installation and testing</li><li>Sensor cleaning prototype</li></ul>\
  </br>\
  <li>2016 - 2017: GT Robotics</li>\
  <ul><li>Design Engineer</li><li>Humanoid robotics mechanical design and programming</li></ul>\
  </br>\
  <li>2012 - 2016: Singapore University of Technology and Design</li>\
  <ul><li>Student</li><li>Bachelor of Engineering, Mechanical Engineering Specialisation</li></ul>\
  </ul>";
const skills =
  "<ul>\
  <li>AWS Web Services</li>\
  <li>Web Development</li>\
  <li>Grafana</li>\
  <li>Go</li>\
  <li>Python</li>\
  <li>Terraform</li>\
  <li>PostgreSQL</li>\
  <li>Javascript, Typescript</li>\
  ";

const projects =
  '<div class="content__project-1" id="content__project-1">\
    <img\
      id="content__project-img"\
      src="./static/breath-of-the-chef.jpg"\
      alt="botc"\
    />\
    <ul>\
      <li>\
        Recipe Searching Guide made for the game -\
        The Legend of Zelda: Breath of the Wild\
      </li>\
      <li>\
        Built with:\
        <ul>\
          <li>Go</li>\
          <li>Gin (Web Framework)</li>\
          <li>PostgreSQL</li>\
          <li>Bootstrap (Frontend)</li>\
        </ul>\
      </li>\
    </ul>\
  </div>\
  <div class="content__project-2" id="content__project-2">\
    <img\
      id="content__project-img"\
      src="./static/hand-e-caps.png"\
      alt="hand-e-caps"\
    />\
    <ul>\
      <li>\
        Automation script to fill in e-CAPs form\
      </li>\
      <li>\
        Built with:\
        <ul>\
          <li>Python</li>\
          <li>Selenium</li>\
          <li>Docker</li>\
        </ul>\
      </li>\
    </ul>\
  </div>';

// event listener for side bar
document.addEventListener("DOMContentLoaded", function () {
  // Set initial content load
  const targetHeader = document.getElementById("content__h");
  const targetPara = document.getElementById("content__p");
  targetHeader.textContent = "About Me";
  targetPara.innerHTML = aboutMe;

  document.querySelectorAll("p").forEach((para) => {
    para.addEventListener("click", function (event) {
      // Get the ID of the clicked element
      const elementId = event.target.id;

      // Change the content (p and h3) based on the clicked element's ID
      const targetHeader = document.getElementById("content__h");
      const targetPara = document.getElementById("content__p");
      const targetProjectBlock = document.getElementById(
        "content__project-block",
      );

      if (
        elementId === "side-bar__name" ||
        elementId === "side-bar__profile-img"
      ) {
        targetHeader.textContent = "About Me";
        targetPara.innerHTML = aboutMe;
        targetProjectBlock.textContent = "";
      } else if (elementId === "side-bar__experience") {
        targetHeader.textContent = "Experience";
        targetPara.innerHTML = exp;
        targetProjectBlock.textContent = "";
      } else if (elementId === "side-bar__skills") {
        targetHeader.textContent = "Skills";
        targetPara.innerHTML = skills;
        targetProjectBlock.textContent = "";
      } else if (elementId === "side-bar__projects") {
        targetHeader.textContent = "Projects";
        targetPara.textContent = "";
        targetProjectBlock.innerHTML = projects;
      } else {
        return null;
      }
    });
  });
});
