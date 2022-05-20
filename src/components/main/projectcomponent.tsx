
import { ProjectInterface } from "../interfaces";
import projects from "../../projects.json"
interface ProjectComponentProp {
  project: ProjectInterface;
}

function ProjectComponent(props: ProjectComponentProp): JSX.Element {

  return (
    <div className="project">
      {projects.map((data, key) => {
        return (
          <div key={key}>
            <div className="project--header">
              <div className="project--name">{props.project.projectname}</div>
              <div className="project--links">
                <div className="project--link">
                  <a
                    href={props.project.projectrepo}
                    target="_blank"
                  rel="noopener noreferrer"
                  >
                    <div>Deployed App</div>
                  </a>
                </div>
                <div className="project--link">
                  <a
                  href={props.project.projectrepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  >
                    <div>GitHub Repo</div>
                  </a>
                </div>
              </div>
            </div>{" "}<br />
            <div className="project--text">
              <div className="project--texttitle">Project Description</div>
              <div className="project--desc">{props.project.projectdescription}</div>
              <div className="project--texttitle">Project Improvements</div>
              <div className="project--impr">{props.project.projectimprovements}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectComponent;

