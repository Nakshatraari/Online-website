import React from "react";

const projects = [
  {
    name: "Study Buddy",
    description:
      "A simple study planner that helps students turn big assignments into manageable tasks.",
    technologies: ["React", "TypeScript", "Firebase"],
  },
  {
    name: "Campus Eats",
    description:
      "A campus dining menu finder built to make the “what’s for lunch?” question easier.",
    technologies: ["Python", "Flask", "SQLite"],
  },
  {
    name: "Pathfinding Visualizer",
    description:
      "An interactive way to explore how common graph-search algorithms find a path.",
    technologies: ["JavaScript", "Algorithms", "Canvas"],
  },
];

function SectionHeading({ eyebrow, title, index, titleId }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 id={titleId}>{title}</h2>
      </div>
      <span className="section-index">{index} / 03</span>
    </div>
  );
}

function Projects() {
  return (
    <section
      className="projects section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        eyebrow="Starter examples · replace with your own"
        title="Selected projects"
        index="01"
        titleId="projects-title"
      />
      <div className="project-list">
        {projects.map((project, index) => (
          <article className="project" key={project.name}>
            <div className="project-number">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="tags" aria-label="Technologies">
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
            <a
              className="project-link"
              href="https://github.com/"
              aria-label={`View ${project.name} on GitHub`}
            >
              ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Your Name, home">
          YN<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero" aria-labelledby="intro-title">
          <p className="eyebrow">
            <span className="status-dot" />
            CS student · Class of 20XX
          </p>
          <h1 id="intro-title">
            Hi, I’m Your Name.
            <br />
            I like making <span>useful things</span>.
          </h1>
          <p className="hero-copy">
            I’m a computer science major interested in software engineering,
            thoughtful design, and solving everyday problems with code.
          </p>
          <div className="hero-links">
            <a className="button" href="#projects">
              See what I’ve built <span aria-hidden="true">↓</span>
            </a>
            <a className="text-link" href="mailto:hello@example.com">
              Say hello <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-note" aria-hidden="true">
            <span className="note-line" />
            <span>Currently learning, always building.</span>
          </div>
        </section>

        <Projects />

        <section
          className="about section"
          id="about"
          aria-labelledby="about-title"
        >
          <SectionHeading
            eyebrow="A little about me"
            title="Curious by default."
            index="02"
            titleId="about-title"
          />
          <div className="about-content">
            <p>
              I’m studying computer science at{" "}
              <strong>Your University</strong>. I enjoy taking an idea from a
              rough sketch to something people can actually use—and learning a
              lot along the way.
            </p>
            <div className="skills">
              <h3>Things I use</h3>
              <p>Python · Java · JavaScript · React · Git · SQL</p>
            </div>
          </div>
        </section>

        <section
          className="contact section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <SectionHeading
            eyebrow="Have an idea or an opportunity?"
            title="Let’s talk."
            index="03"
            titleId="contact-title"
          />
          <div className="contact-row">
            <a className="email-link" href="mailto:hello@example.com">
              hello@example.com <span aria-hidden="true">↗</span>
            </a>
            <div className="social-links">
              <a href="https://github.com/">GitHub ↗</a>
              <a href="https://www.linkedin.com/">LinkedIn ↗</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Your Name</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
