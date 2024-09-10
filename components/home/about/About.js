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
              now. I&apos;m a fourth year Computer Engineering Student at the 
              University of Alberta. I specialize in Full Stack web Developement.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I have accumalted an immense amount of experience during my internships at 
              Canadian Natural Resouces Limited as a Systems Developer, and also
              at Suncor as an Engineering Student.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Outside of work, I love to Draw, Hike, play Golf, Cook Food, Create Wood Working projects,
              and Travel. 
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m looking for new opportunities where I can merge my
              love for code with my creativity. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
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
