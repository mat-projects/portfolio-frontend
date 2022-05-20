import { useState } from "react";
import { ProjectInterface } from "../interfaces";

function ProjectComponent(): JSX.Element {
  const [projects, setProjects] = useState<ProjectInterface[]>([]);

  fetch("https://portfolio-matbatten.herokuapp.com/")
  .then((response) => response.json())
  .then((jsonBody: ProjectInterface[]) => setProjects(jsonBody)); 

  return (
    <div className="project">
      {projects.map((project, id) => {
        return (
          <div key={id}>
            <div className="project--header">
            <div className="project--name">{project.project_name}</div>
            <div className="project--links">
                <div className="project--link">
                  <a href={project.project_link} target="_blank" rel="noopener noreferrer">Deployed App</a>
                </div>
                <div className="project--link">
                  <a href={project.project_repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </div>
            </div>
            </div>
            <div className="project--text">
              <div className="project--texttitle">Project Description</div>
              <div className="project--desc">{project.project_description}</div>
              <div className="project--texttitle">Project Improvements</div>
              <div className="project--impr">{project.project_improvements}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectComponent;

