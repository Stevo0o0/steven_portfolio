function About() {
  return (
    <div>
      <h2>About Me</h2>

      <img
        src="/photo.jpg"
        alt="Steven"
        width="200"
      />

      <p>
        My name is Steven Ikharo. I am a Software Engineering Technology student
        with a strong interest in DevOps and Cloud Computing.
      </p>

      <p>
        I have experience working with tools such as AWS, Docker, Kubernetes, and
        CI/CD pipelines. I enjoy building scalable systems and automating workflows.
      </p>

      <a href="/resume.pdf" download>
        Download My Resume
      </a>
    </div>
  );
}

export default About;
