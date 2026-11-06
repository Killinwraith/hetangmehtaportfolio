import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import styles from "./Chrome.module.css";

const sections = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export const Chrome = ({ center }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    menuRef.current?.querySelector("a, button")?.focus();

    const trigger = buttonRef.current;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const items = menuRef.current.querySelectorAll("a, button");
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header>
        <Link className={styles.logo} href="/">
          <span>H.</span>
          <span className={styles.visuallyHidden}> {site.name}, home</span>
        </Link>

        {center ? <div className={styles.center}>{center}</div> : null}

        <div className={styles.actions}>
          <a
            className={styles.resume}
            href={site.resume}
            target="_blank"
            rel="noreferrer"
          >
            My resume
          </a>
          <button
            ref={buttonRef}
            type="button"
            className={styles.menuButton}
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        ref={menuRef}
        className={styles.overlay}
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        {open ? (
          <>
            <button type="button" className={styles.close} onClick={close}>
              Close
            </button>
            <nav aria-label="Sections">
              <ol className={styles.sections}>
                {sections.map((section, index) => (
                  <li key={section.href}>
                    <span aria-hidden="true">0{index + 1}</span>
                    <Link href={section.href} onClick={close}>
                      {section.label}
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>
            <ul className={styles.external}>
              <li>
                <a href={site.resume} target="_blank" rel="noreferrer">
                  My resume
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </>
        ) : null}
      </div>
    </>
  );
};
