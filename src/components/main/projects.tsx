import ProjectComponent from "./projectcomponent";
// import { ProjectInterface } from "../interfaces"; - no longer required
// import projects from "../../projects.json" - no longer required with frontend


export default function Projects(): JSX.Element {
  return (
    <>
      <div className="projects">
        <ProjectComponent/>
      </div>
    </>
  );
}
