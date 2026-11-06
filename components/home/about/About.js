import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Hetang, if you haven&apos;t already gathered that by
              now. I&apos;m a fourth year Computer Engineering (Co-op) student at
              the University of Alberta, graduating in April 2027, with experience
              spanning full-stack development, machine learning, and cloud
              infrastructure. My coursework includes data structures and
              algorithms, object-oriented software design, operating systems,
              parallel and distributed programming, and databases.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;ve accumulated a deep set of engineering experience through
              my internships as a Systems Developer at Canadian Natural Resources
              Limited and a Data Analyst at Suncor Energy, where I shipped
              production systems used by 500+ engineers and automated workflows
              saving 30+ hours a week. At Canadian Natural, I&apos;ve since
              stepped up as lead developer of a core capital budgeting
              application.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m currently a Machine Learning Engineer and team lead with
              Alberta BIONIX, where I build models for real-time prosthetic knee
              control from EMG sensor data and mentor 2 junior engineers. On the
              side, I&apos;m building Energy Copilot, an AI agent that answers
              plain-English questions over Alberta well production data.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love to draw, hike, play golf, cook, build
              woodworking projects, and travel.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m looking for new opportunities where I can merge my love
              for code with my creativity. If you think you&apos;ve got an
              opening that I might like, let&apos;s connect 🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
