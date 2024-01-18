import React from "react";
import ProjectList from "../../assets/projects/project.list";

const ProjectsPage = () => {
  return (
    <div id="project-container">
      <div className="navigation-div">
        <a className="navigation-links" href="/">
          Home
        </a>
        <a className="navigation-links" href="/projects">
          Projects
        </a>
        <a className="navigation-links" href="/aboutme">
          About Me
        </a>
      </div>
      <main>
        <h1
          style={{
            fontFamily: "Oswald",
            textAlign: "center",
            fontSize: "50px",
          }}
        >
          Projects
        </h1>
        <br />
        <br />
        <br />
        <h2 className="project-headings">Featured Project</h2>
        <div id="project-container" style={{ margin: 0 }}>
          <ProjectList />
        </div>
      </main>
    </div>
  );
};

export default ProjectsPage;
