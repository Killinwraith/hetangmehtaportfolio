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
              now. I&apos;m a fourth year Computer Engineering student at the
              University of Alberta, with experience spanning full-stack
              development, machine learning, and cloud infrastructure.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;ve accumulated a deep set of engineering experience through
              my internships as a Software Engineer at Canadian Natural
              Resources Limited and Suncor Energy, where I shipped production
              systems used by hundreds of engineers and automated workflows
              saving six figures annually.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m currently a Machine Learning Engineer with Alberta
              BIONIX, where I build models for real-time prosthetic knee control
              from EMG sensor data.
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
