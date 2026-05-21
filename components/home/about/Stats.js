import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Languages</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Python</span>
            <span className="chip">Java</span>
            <span className="chip">C++</span>
            <span className="chip">C</span>
            <span className="chip">C#</span>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">SQL</span>
            <span className="chip">Go</span>
            <span className="chip">Swift</span>
            <span className="chip">Kotlin</span>
            <span className="chip">VB.NET</span>
            <span className="chip">Ruby</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>ML & AI</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">PyTorch</span>
            <span className="chip">Scikit-learn</span>
            <span className="chip">Pandas</span>
            <span className="chip">NumPy</span>
            <span className="chip">Gemini API</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Frameworks & Tools</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React</span>
            <span className="chip">Next.js</span>
            <span className="chip">Node.js</span>
            <span className="chip">Express</span>
            <span className="chip">Spring Boot</span>
            <span className="chip">.NET</span>
            <span className="chip">Blazor</span>
            <span className="chip">Flask</span>
            <span className="chip">REST APIs</span>
            <span className="chip">JUnit</span>
            <span className="chip">Auth0</span>
            <span className="chip">Android Studio</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Cloud & DevOps</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">AWS S3</span>
            <span className="chip">Azure CI/CD</span>
            <span className="chip">Cloudflare R2</span>
            <span className="chip">Docker</span>
            <span className="chip">Kubernetes</span>
            <span className="chip">Git</span>
            <span className="chip">GitHub</span>
            <span className="chip">Linux/Unix</span>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>Databases</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">Oracle SQL</span>
            <span className="chip">PostgreSQL</span>
            <span className="chip">MySQL</span>
            <span className="chip">MongoDB</span>
          </div>
        </div>
      </Reveal>
    </div>
  );
};
