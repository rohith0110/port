import ProjectCard from "./ProjectCard";

export default function ProjectsSection({ projects }) {
  return (
    <section
      id="projects"
      className="section"
      data-reveal="3"
      aria-labelledby="projects-heading"
    >
      <div className="section-header">
        <h2 id="projects-heading" className="section-title block-title">
          Selected Projects
        </h2>
      </div>

      <div className="projects-stream">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
