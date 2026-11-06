import Link from "next/link";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import styles from "./Sections.module.css";

const pad = (value) => String(value).padStart(2, "0");

const Title = ({ children }) => (
  <h2 className={styles.title}>
    {children}
    <span aria-hidden="true">.</span>
  </h2>
);

const External = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer">
    {children}
  </a>
);

export const About = () => (
  <section id="about" className={styles.section}>
    <Title>About</Title>
    <div className={styles.columns}>
      <div className={styles.prose}>
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p className={styles.links}>
          <span>My links →</span>
          <External href={site.linkedin}>LinkedIn</External>
          <External href={site.github}>GitHub</External>
        </p>
      </div>
      <dl className={styles.skills}>
        {site.skills.map((skill) => (
          <div key={skill.group}>
            <dt>{skill.group}</dt>
            <dd>
              <ul>
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  </section>
);

export const Projects = () => (
  <section id="projects" className={styles.section}>
    <Title>Projects</Title>
    <ol className={styles.projects}>
      {projects.map((project, index) => (
        <li key={project.slug}>
          <span className={styles.number} aria-hidden="true">
            {pad(index + 1)}
          </span>
          <div>
            <h3>
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </h3>
            <p>{project.description}</p>
            <p className={styles.projectLinks}>
              <Link href={`/projects/${project.slug}`}>
                Learn more {">"}
                <span className={styles.visuallyHidden}>
                  : {project.title}
                </span>
              </Link>
              <External href={project.code}>
                source code
                <span className={styles.visuallyHidden}>
                  : {project.title}
                </span>
              </External>
              {project.projectLink ? (
                <External href={project.projectLink}>
                  live project
                  <span className={styles.visuallyHidden}>
                    : {project.title}
                  </span>
                </External>
              ) : null}
            </p>
          </div>
          <p className={styles.mono}>{project.tech.join(" - ")}</p>
        </li>
      ))}
    </ol>
  </section>
);

export const Experience = () => (
  <section id="experience" className={styles.section}>
    <Title>Experience</Title>
    <ol className={styles.experience}>
      {experience.map((item) => (
        <li key={`${item.title}-${item.time}`}>
          <div className={styles.meta}>
            <p>{item.time}</p>
            <p>{item.location}</p>
          </div>
          <div>
            <h3>{item.title}</h3>
            <p className={styles.position}>{item.position}</p>
            <ul className={styles.bullets}>
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            {item.tech.length ? (
              <p className={styles.mono}>{item.tech.join(" - ")}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export const Contact = () => (
  <section id="contact" className={styles.contact}>
    <div className={styles.contactBody}>
      <Title>Contact</Title>
      <p>
        Shoot me an email if you want to connect! You can also find me on{" "}
        <External href={site.linkedin}>Linkedin</External> or{" "}
        <External href={site.github}>GitHub</External> if that&apos;s more your
        speed.
      </p>
      <a className={styles.email} href={`mailto:${site.email}`}>
        hetangmehta03@
        <wbr />
        gmail.com
      </a>
      <p>{site.phone}</p>
    </div>
  </section>
);
