import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Projects";
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
    title: "EMG Viability Classifier",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://github.com/albertabionix/EMG_Viability_ML_Algorithm",
    projectLink: "",
    tech: ["Python", "Scikit-learn", "NumPy", "Pandas", "Signal Processing"],
    description:
      "An ML pipeline that classifies prosthetic trial candidate viability from EMG sensor data, built for Alberta BIONIX.",
    modalContent: (
      <>
        <p>
          Designed a full signal-processing and ML pipeline for the SIAT-LLMD
          dataset (40 subjects, 9 channels, 1920 Hz) to classify candidate
          viability for prosthetic knee trials.
        </p>
        <p>
          Built preprocessing in Python: bandpass (20-450 Hz) and 60 Hz notch
          filtering, DC removal, and channel selection isolating the four thigh
          muscles above the amputation site.
        </p>
        <p>
          Engineered 30 features per window — Du&apos;s six time-domain features
          (integrated EMG, variance, waveform length, zero crossings, slope sign
          changes, Willison amplitude) across four channels, plus six
          inter-channel Pearson correlations.
        </p>
        <p>
          Trained three mode-specific one-class SVMs (sitting, standing,
          walking) on the able-bodied population, with a weighted scoring system
          (0.2 / 0.3 / 0.5) producing a final 0-100 viability score.
        </p>
      </>
    ),
  },
  {
    title: "Batch Normalization Reproduction",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://github.com/Killinwraith/BatchNormalization-ReduceInternalCovariateShift",
    projectLink: "",
    tech: ["Python", "PyTorch", "NumPy", "Matplotlib"],
    description:
      "Reproduction of Ioffe & Szegedy's ICML 2015 Batch Normalization paper, validating its core claims on MNIST and CIFAR-10.",
    modalContent: (
      <>
        <p>
          Reproduced two central findings from Ioffe &amp; Szegedy&apos;s
          &quot;Batch Normalization: Accelerating Deep Network Training by
          Reducing Internal Covariate Shift&quot; (ICML 2015) as part of ECE 447
          at the University of Alberta.
        </p>
        <p>
          Built a 3-layer fully connected sigmoid network on MNIST to reproduce
          Figure 1(a), demonstrating that BN improves test accuracy from ~73-83%
          to ~97-98% across varying network widths.
        </p>
        <p>
          Designed a 6-layer CNN on CIFAR-10 to validate BN&apos;s learning rate
          stability claim, showing non-BN networks diverge (NaN loss) at LR =
          0.1 while BN networks train stably to ~80% accuracy.
        </p>
        <p>
          Implemented original ablation studies on hidden layer width and
          optimizer choice (SGD vs. Adam) to extend the paper&apos;s findings
          beyond its original setup.
        </p>
      </>
    ),
  },
  {
    title: "Event Lottery System",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://github.com/Killinwraith/EventLotteryApp",
    projectLink: "",
    tech: ["Java", "Android Studio", "Firebase"],
    description:
      "An Android application that enables fair, lottery-based registration for high-demand community events.",
    modalContent: (
      <>
        <p>
          Built an Android application in Java, enabling fair, lottery-based
          registration for high-demand community events.
        </p>
        <p>
          Integrated Firebase for real-time event data, notifications, user
          state management, and multi-role access control.
        </p>
        <p>
          Supported event life-cycle management, including registration windows,
          cancellations, and replacement draws.
        </p>
      </>
    ),
  },
  {
    title: "Multithreaded Concurrent Server",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://github.com/Killinwraith/MultithreadedServerForConcurrentR-W",
    projectLink: "",
    tech: ["C", "POSIX Threads", "Sockets", "Concurrency"],
    description:
      "A multithreaded TCP server in C handling concurrent read/write requests with data consistency guarantees.",
    modalContent: (
      <>
        <p>
          Built a multithreaded TCP server in C from scratch, supporting
          concurrent client connections with reader/writer synchronization for
          safe shared-state access.
        </p>
        <p>
          Implemented the client-server message protocol over POSIX sockets with
          custom message parsing and timing instrumentation for throughput
          measurement.
        </p>
        <p>
          Validated correctness using an adversarial &quot;attacker&quot; client
          designed to expose race conditions and data consistency violations
          under load.
        </p>
      </>
    ),
  },
  {
    title: "ATS Resume Analyzer",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://github.com/Killinwraith/ATS_Resume_Analyzer",
    projectLink: "",
    tech: ["Next.js", "TypeScript", "React", "Google Gemini AI"],
    description:
      "A GenAI-powered full-stack web application that evaluates resume compatibility with job descriptions.",
    modalContent: (
      <>
        <p>
          Developed a full-stack web application with Next.js 15, React.ts, and
          TypeScript to evaluate resume compatibility with job descriptions.
        </p>
        <p>
          Built a GenAI-powered resume evaluation platform using Google Gemini
          LLMs to analyze job descriptions and compute ATS compatibility scores.
        </p>
        <p>
          Implemented prompt-based evaluation pipelines for keyword extraction
          and resume optimization recommendations.
        </p>
      </>
    ),
  },
  {
    title: "Boxed",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://github.com/Killinwraith/Boxed",
    projectLink: "",
    tech: ["React", "Node.js", "Express", "Auth0", "Cloudflare R2", "Docker"],
    description:
      "A cloud storage infrastructure enabling secure file uploads, retrieval, and access control.",
    modalContent: (
      <>
        <p>
          Built a cloud storage infrastructure enabling secure file uploads,
          retrieval, and access control.
        </p>
        <p>
          Implemented authentication and role-based access with Auth0 using the
          OAuth 2.0 protocol.
        </p>
        <p>
          Deployed on Docker with S3-compatible storage via Cloudflare R2,
          integrated through RESTful APIs.
        </p>
      </>
    ),
  },
  // {
  //   title: "Locked-In",
  //   imgSrc: "project-imgs/example-project.jpg",
  //   code: "https://github.com/Killinwraith/Locked-In",
  //   projectLink: "",
  //   tech: ["Python", "Tkinter"],
  //   description:
  //     "An app that is focused around the aspect of helping the user close programs that are distracting.",
  //   modalContent: (
  //     <>
  //       <p>
  //         Created studying aid in Python that closes programs detrimental to
  //         studying.
  //       </p>
  //       <p>
  //         Program closes programs for study period (user-entered) and allows
  //         them to run for break period (user-entered).
  //       </p>
  //       <p>
  //         Integrates interactive GUI created through Python Library
  //         &apos;Tkinter&apos;.
  //       </p>
  //     </>
  //   ),
  // },
  {
    title: "Chess.app",
    imgSrc: "project-imgs/example-project.jpg",
    code: "https://github.com/Killinwraith/Chess_IOS_app",
    projectLink: "",
    tech: ["Swift"],
    description:
      "Developed an iOS application using Swift and Xcode that allows a user to play a 2-player game of chess with a timer.",
    modalContent: (
      <>
        <p>
          Designing an interface which allows the game to played between two
          iPhones.
        </p>
        <p>
          Created a UI that adapts and changes its dimensions depending on the
          user&apos;s device.
        </p>
        <p>
          Implementing a timer option which allows the user to have the ability
          to choose the timer duration; works like a chess timer.
        </p>
      </>
    ),
  },
  // {
  //   title: "Dog Classifier Website",
  //   imgSrc: "project-imgs/example-project.jpg",
  //   code: "https://github.com/Killinwraith/Dog-Classifier-Website",
  //   projectLink: "",
  //   tech: ["HTML", "CSS", "JavaScript", "C#"],
  //   description:
  //     "Developed a website catered towards dog diet estimation for a HackED.",
  //   modalContent: (
  //     <>
  //       <p>
  //         Led team of 4 in developing a dog diet estimation web application.
  //       </p>
  //       <p>Created a login system with the use of HTML, CSS, and JavaScript.</p>
  //       <p>Developed a time-dependent email notification system, using C#.</p>
  //       <p>
  //         Integrated multiple languages and source code from multiple engineers
  //         to achieve a cohesive website.
  //       </p>
  //     </>
  //   ),
  // },
];
