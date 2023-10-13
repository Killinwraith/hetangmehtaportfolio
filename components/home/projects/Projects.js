import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  

  {
    title: "Locked-In",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://github.com/Killinwraith/Locked-In",
    projectLink: "",
    tech: ["Python", "Tinkter"],
    description:
      "An app that is focused around the aspect of helping the user close porgrams that are distracting.",
    modalContent: (
      <>
        <p>
        Created studying aid in Python that closes programs detrimental to studying.
        </p>
        <p>
        Program closes programs for study period (user-entered) and allows them to run for break period (user-entered).
        </p>
        <p>
        Integrates interactive GUI created through Python Library &apos;Tkinter&apos;.
        </p>
      </>
    ),
  },

  {
    title: "Chess.app",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://github.com/Killinwraith/Chess_IOS_app",
    projectLink: "",
    tech: ["Swift"],
    description:
      "Developed an IOS application using Swift and X-code that allows a user to play a 2-player game of chess with a timer.",
    modalContent: (
      <>
        <p>
        Designing an interface which allows the game to played between two iPhones
        </p>
        <p>
        Created a UI that adapts and changes its dimensions depending on the user&apos;s device
        </p>
        <p>
        Implementing a timer option which allows the user to have the ability to choose the timer duration; works like a chess timer.
        </p>
      </>
    ),
  },

  {
    title: "Dog Classifier Website",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://github.com/Killinwraith/Dog Classifier Website",
    projectLink: "",
    tech: ["Swift"],
    description:
      "Developed an website catered towards dog die estimation for a HackEd.",
    modalContent: (
      <>
        <p>
        Led team of 4 in developing a dog diet estimation web application
        </p>
        <p>
        Created a login system with the use of HTML, CSS, and JavaScript.
        </p>
        <p>
        Developed a time-dependent email notification system, using C#.
        </p>
        <p>
        Integrated multiple languages and source code from multiple engineers to achieve a cohesive website.
        </p>
      </>
    ),
  },
  
];
