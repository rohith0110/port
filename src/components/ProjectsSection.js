import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }) {
  return (
    <div className="section">
      <h2>Projects</h2>
      {projects.map((p) => (
        <ProjectCard key={p.title} project={p} />
      ))}
    </div>
  );
}
