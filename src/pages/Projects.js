import projects from "../data/projects";

function Projects() {
  return (
    <main className="page">
      <h1>Projects</h1>
      <p>Here are my strongest cloud and DevOps projects.</p>

      <section className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>

            <div className="tech-list">
              {project.tech.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              )}

              {project.live && (
                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Projects;