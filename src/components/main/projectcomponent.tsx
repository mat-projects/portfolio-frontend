import { useState } from "react";
import { ProjectInterface } from "../interfaces";
import github from "../images/GitHub.png";
import index from "../images/index.png";

function ProjectComponent(): JSX.Element {
  const [projects, setProjects] = useState<ProjectInterface[]>([]);

  fetch("https://portfolio-matbatten.herokuapp.com/")
    .then((response) => response.json())
    .then((jsonBody: ProjectInterface[]) => setProjects(jsonBody));

  return (
    <>
      {projects.map((project, id) => {
        return (
          <div className="project" key={id}>
            <div className="project--header">
              <div className="project--name">{project.project_name}</div>
              <div className="project--linkbox">
                <a
                  className="project--links"
                  href={project.project_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project--img"
                    src={index}
                    alt="deployed app"
                  ></img>
                </a>
                <a
                  className="project--links"
                  href={project.project_repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="project--img"
                    src={github}
                    alt="deployed app"
                  ></img>
                </a>
              </div>
            </div>
            <div className="project--textbox">
              <div className="project--texttitle">What is this?</div>
              <div className="project--text">{project.project_description}</div>
              <div className="project--texttitle">What's next?</div>
              <div className="project--text">
                {project.project_improvements}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProjectComponent;
