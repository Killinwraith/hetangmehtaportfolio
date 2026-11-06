import Link from "next/link";
import { useRef, useState } from "react";
import { site } from "@/content/site";
import { HeroObject } from "./HeroObject";
import styles from "./ProjectHero.module.css";

const pad = (value) => String(value).padStart(2, "0");

export const ProjectHero = ({ projects }) => {
  const [selected, setSelected] = useState(0);
  const [hasTurned, setHasTurned] = useState(false);
  const [listOpen, setListOpen] = useState(false);
  const listRef = useRef(null);

  const project = projects[selected];
  const count = projects.length;

  const choose = (index) => {
    setSelected((index + count) % count);
    setHasTurned(true);
  };

  const onListKeyDown = (event) => {
    const moves = { ArrowDown: 1, ArrowUp: -1 };
    if (!(event.key in moves)) return;
    event.preventDefault();
    const next = (selected + moves[event.key] + count) % count;
    choose(next);
    listRef.current?.querySelectorAll("button")[next]?.focus();
  };

  return (
    <section className={styles.hero} aria-label="Introduction and projects">
      <p className={styles.line} aria-live="polite">
        {hasTurned ? (
          <>
            <strong>{project.title}</strong>
            <span>{project.tech.join(", ")}</span>
          </>
        ) : (
          <>
            <strong>Turn the dial, pick a project.</strong>
            <span>Each number is a project.</span>
          </>
        )}
      </p>

      <div className={styles.stage}>
        <div className={styles.circle} />
        <div className={styles.object}>
          <HeroObject
            items={projects}
            selectedIndex={selected}
            onSelect={choose}
          />
        </div>
      </div>

      <div className={styles.intro}>
        <h1>{site.hero.title}</h1>
        <h2>I&apos;m a {site.hero.role}</h2>
        <p>{site.hero.intro}</p>
        <a href="#contact">Contact me</a>
      </div>

      <a className={styles.scroll} href="#about">
        Keep scrolling ↓
      </a>

      <p className={styles.credit}>© 2026 {site.name}</p>

      <aside className={styles.device} aria-label="Project selector">
        <div className={styles.screen}>
          <p className={styles.nowLabel}>
            Project {pad(selected + 1)}/{pad(count)}
          </p>
          <p className={styles.nowTitle}>{project.title}</p>
          <Link className={styles.open} href={`/projects/${project.slug}`}>
            Open project →
            <span className={styles.visuallyHidden}>: {project.title}</span>
          </Link>
        </div>

        <div className={styles.controls}>
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => choose(selected - 1)}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next project"
            onClick={() => choose(selected + 1)}
          >
            →
          </button>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={listOpen}
            aria-controls="project-list"
            onClick={() => setListOpen((open) => !open)}
          >
            {listOpen ? "Hide list" : "Show list"}
          </button>
        </div>

        <ol
          id="project-list"
          ref={listRef}
          className={styles.list}
          data-open={listOpen}
          onKeyDown={onListKeyDown}
        >
          {projects.map((item, index) => (
            <li key={item.slug}>
              <button
                type="button"
                aria-current={index === selected ? "true" : undefined}
                onClick={() => choose(index)}
              >
                <span aria-hidden="true">{pad(index + 1)}</span>
                <span className={styles.itemTitle}>{item.title}</span>
              </button>
            </li>
          ))}
        </ol>
      </aside>
    </section>
  );
};
