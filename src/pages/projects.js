import ProjectsSection from "../components/ProjectsSection";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <div className="page-stack projects-page">
      <ProjectsSection projects={projects} />
    </div>
  );
}
