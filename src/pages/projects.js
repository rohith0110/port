import ProjectsSection from "../components/ProjectsSection";

const projects = [
  {
    title: "Aeon Techfest Platform",
    duration: "2025",
    githubUrl: "https://github.com/rohith0110",
  },
  {
    title: "AI DJ System",
    duration: "2025",
    githubUrl: "https://github.com/rohith0110",
  },
];

export default function Projects() {
  return <ProjectsSection projects={projects} />;
}
