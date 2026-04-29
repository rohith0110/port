export default function ProjectCard({ project }) {
  return (
    <article className="project-row">
      <header className="project-meta">
        <p className="project-period">{project.duration}</p>
        <div className="project-title-row">
          <h3>{project.title}</h3>
          {project.liveUrl ? (
            <a
              className="project-live-link"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live version of ${project.title}`}
            >
              Live <span aria-hidden="true">&#8599;</span>
            </a>
          ) : null}
        </div>
        <p className="project-org">{project.organization}</p>
      </header>

      <div className="project-content">
        <p className="project-impact">{project.impact}</p>
        <ul className="project-highlights">
          {project.highlights.map((point) => (
            <li key={`${project.title}-${point}`}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="project-tail">
        <a
          className="project-link"
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.title} repository on GitHub`}
        >
          Repository
        </a>

        <ul className="stack-tags" aria-label={`${project.title} technology stack`}>
          {project.stack.map((tech) => (
            <li key={`${project.title}-${tech}`}>{tech}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
