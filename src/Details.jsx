{/*imports so it can be used in when building it*/}
import profilePic from './assets/mypic.jpg';
import jitsVoting from './assets/Jits-voting.png';
import mathease from './assets/copyMathease-App.jpg';
import molecular from './assets/moleculAR.png';
import ucarApp from './assets/copyUcar-app.jpg';

{/*JS array of objects contains the information about this*/}
const projects = [
  { 
    id: 1, 
    title: "Jits Voting System (Programmer)", 
    image: jitsVoting, 
    description: "An online voting system for our department to choose and JITS officer this system is made with PHP,HTML/CSS, Laravel, and Mysql." 
  },
  { 
    id: 2, 
    title: "Ucar App (Programmer)", 
    image: ucarApp, 
    description: "A sample house rental mobile app that made with Jave, XML, and Firebase Realtime Database." 
  },
  { 
    id: 3, 
    title: "Mathease App (Programmer)", 
    image: mathease, 
    description: "An educational app that helps students learn and practice math problems efficiently, made with Dart programming language and Flutter." 
  },
  { 
    id: 4, 
    title: "MolecuAR (Programmer)", 
    image: molecular, 
    description: "An AR-based learning tool that helps visualize and interact with molecular structures, made with Unity, C#, and Firebase Realtime Database." 
  },
];

function Details() {
  return (
    <div className="body">
      {/* Hero Section contains profile pic, name, motto*/}
      <div className="picture">
        <img src={profilePic} alt="profile picture" className="profile-image" />
        <div className="container">
          <div className="box">
            <h1 className="heropage">Hi, My name is Marc Ruzzel T. Muzada</h1>
            <p className="moto">"Let’s Build Something Awesome."</p>
          </div>
        </div>
      </div>

      {/* Contains the About Me Section*/}
      <section id="about" className="about-me">
        <h2>About Me</h2>
        <p>
          Hi, I'm Marc Ruzzel Muzada, a front-end developer and UX/UI designer. 
          Currently interning at Tito Solution, I'm gaining hands-on experience in 
          building intuitive web interfaces and user-centered designs.
        </p>
      </section>

      {/* Skills Section contains the category of skills and list of skills */}
      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skill-category">
          <h3>Technical Skills:</h3>
          <div className="skill-box">
            <span>HTML/CSS</span>
            <span>DART</span>
            <span>Figma</span>
            <span>Wireframing</span>
            <span>C++</span>
            <span>Java</span>
            <span>Prototyping</span>
            <span>Scrum</span>
            <span>PHP</span>
            <span>JavaScript</span>
            <span>UI Design</span>
          </div>
        </div>
        <div className="skill-category">
          <h3>Non-Technical Skills:</h3>
          <div className="skill-box">
            <span>Communication</span>
            <span>Time Management</span>
            <span>Collaboration</span>
            <span>Problem-Solving</span>
            <span>Adaptability</span>
            <span>Creativity</span>
          </div>
        </div>
      </section>

      {/*Project Section displays school projects*/}
      <section id="projects" className="projects">
        <h2>School Projects</h2>
        <div className="project-grid">
          {/* JS that uses .map() to loop through the projects array to display each project dynamically*/}
          {projects.map((project) => ( 
            <div key={project.id} className="project-item">
              <img src={project.image} alt={project.title} className="project-image" />
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Details; {/*so it can use to other files*/}
