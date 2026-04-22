export default function ProjectCard({ project }) {
  return (
    <div className="project-row">
      <h3>{project.title}</h3>
      <p>{project.duration}</p>
      <a href={project.githubUrl} target="_blank" rel="noreferrer">
        GitHub Repo
      </a>
    </div>
  );
}
