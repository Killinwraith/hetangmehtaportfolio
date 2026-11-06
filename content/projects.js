// Every project on the site. The hero dial, the widget, the Projects section and
// the /projects/[slug] pages are all built from this list.
export const projects = [
  {
    "slug": "energy-copilot",
    "title": "Energy Copilot",
    "code": "https://github.com/Killinwraith/EnergyCopilot",
    "projectLink": "",
    "tech": [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "Next.js"
    ],
    "description": "In progress: an AI copilot that answers plain-English questions over public Alberta well production data.",
    "details": [
      "Building an AI copilot that answers plain-English questions over public Alberta well production data (Petrinex, AER). This project is in progress.",
      "Wrote the product spec: target users, priority use cases, success metrics and a phased roadmap.",
      "Using a tool-calling agent that writes guarded read-only SQL, forecasts decline curves, and cites AER directives, with pgvector retrieval for RAG.",
      "Designed responsible-AI guardrails: answers grounded in query results, cited regulations, and refusals on confidential data.",
      "Developing eval-first: versioned test sets for SQL accuracy, retrieval and extraction, used to compare RAG chunking and hybrid retrieval strategies, with CI blocking regressions."
    ]
  },
  {
    "slug": "emg-viability-classifier",
    "title": "EMG Viability Classifier",
    "code": "https://github.com/albertabionix/EMG_Viability_ML_Algorithm",
    "projectLink": "",
    "tech": [
      "Python",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "Signal Processing"
    ],
    "description": "An ML pipeline that classifies prosthetic trial candidate viability from EMG sensor data, built for Alberta BIONIX.",
    "details": [
      "Designed a full signal-processing and ML pipeline for the SIAT-LLMD dataset (40 subjects, 9 channels, 1920 Hz) to classify candidate viability for prosthetic knee trials.",
      "Built preprocessing in Python: bandpass (20-450 Hz) and 60 Hz notch filtering, DC removal, and channel selection isolating the four thigh muscles above the amputation site.",
      "Engineered 30 features per window — Du's six time-domain features (integrated EMG, variance, waveform length, zero crossings, slope sign changes, Willison amplitude) across four channels, plus six inter-channel Pearson correlations.",
      "Trained three mode-specific one-class SVMs (sitting, standing, walking) on the able-bodied population, with a weighted scoring system (0.2 / 0.3 / 0.5) producing a final 0-100 viability score."
    ]
  },
  {
    "slug": "batch-normalization-reproduction",
    "title": "Batch Normalization Reproduction",
    "code": "https://github.com/Killinwraith/BatchNormalization-ReduceInternalCovariateShift",
    "projectLink": "",
    "tech": [
      "Python",
      "PyTorch",
      "NumPy",
      "Matplotlib"
    ],
    "description": "Reproduction of Ioffe & Szegedy's ICML 2015 Batch Normalization paper, validating its core claims on MNIST and CIFAR-10.",
    "details": [
      "Reproduced two central findings from Ioffe & Szegedy's \"Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift\" (ICML 2015) as part of ECE 447 at the University of Alberta.",
      "Built a 3-layer fully connected sigmoid network on MNIST to reproduce Figure 1(a), demonstrating that BN improves test accuracy from ~73-83% to ~97-98% across varying network widths.",
      "Designed a 6-layer CNN on CIFAR-10 to validate BN's learning rate stability claim, showing non-BN networks diverge (NaN loss) at LR = 0.1 while BN networks train stably to ~80% accuracy.",
      "Implemented original ablation studies on hidden layer width and optimizer choice (SGD vs. Adam) to extend the paper's findings beyond its original setup."
    ]
  },
  {
    "slug": "event-lottery-system",
    "title": "Event Lottery System",
    "code": "https://github.com/Killinwraith/EventLotteryApp",
    "projectLink": "",
    "tech": [
      "Java",
      "Android Studio",
      "Firebase"
    ],
    "description": "An Android application that enables fair, lottery-based registration for high-demand community events.",
    "details": [
      "Built an Android application in Java, enabling fair, lottery-based registration for high-demand community events.",
      "Integrated Firebase for real-time event data, notifications, user state management, and multi-role access control.",
      "Supported event life-cycle management, including registration windows, cancellations, and replacement draws."
    ]
  },
  {
    "slug": "multithreaded-concurrent-server",
    "title": "Multithreaded Concurrent Server",
    "code": "https://github.com/Killinwraith/MultithreadedServerForConcurrentR-W",
    "projectLink": "",
    "tech": [
      "C",
      "POSIX Threads",
      "Sockets",
      "Concurrency"
    ],
    "description": "A thread-pool TCP server in C handling concurrent read/write requests with data consistency guarantees.",
    "details": [
      "Built a multithreaded TCP server in C from scratch, using a thread-pool architecture to manage connection load and supporting concurrent client connections, with mutexes and reader-writer locks for safe shared-state access and to prevent race conditions.",
      "Implemented the client-server message protocol over POSIX sockets with custom message parsing and timing instrumentation for throughput measurement.",
      "Validated correctness using an adversarial \"attacker\" client designed to expose race conditions and data consistency violations under load."
    ]
  },
  {
    "slug": "ats-resume-analyzer",
    "title": "ATS Resume Analyzer",
    "code": "https://github.com/Killinwraith/ATS_Resume_Analyzer",
    "projectLink": "https://atsresume-ai.vercel.app/dashboard",
    "tech": [
      "Next.js",
      "TypeScript",
      "React",
      "Google Gemini AI"
    ],
    "description": "A GenAI-powered full-stack web application that evaluates resume compatibility with job descriptions.",
    "details": [
      "Developed a full-stack web application with Next.js 15, React.ts, and TypeScript to evaluate resume compatibility with job descriptions.",
      "Built a GenAI-powered resume evaluation platform using Google Gemini LLMs to analyze job descriptions and compute ATS compatibility scores.",
      "Implemented prompt-based evaluation pipelines for keyword extraction and resume optimization recommendations, including suggested rewrites, and deployed the app to production on Vercel."
    ]
  },
  {
    "slug": "boxed",
    "title": "Boxed",
    "code": "https://github.com/Killinwraith/Boxed",
    "projectLink": "",
    "tech": [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Auth0",
      "Cloudflare R2",
      "Docker"
    ],
    "description": "A cloud storage infrastructure enabling secure file uploads, retrieval, and access control.",
    "details": [
      "Built a cloud storage infrastructure enabling secure file uploads, retrieval, and access control.",
      "Implemented authentication and role-based access with Auth0 using the OAuth 2.0 protocol.",
      "Deployed on Docker with S3-compatible storage via Cloudflare R2, integrated through RESTful APIs."
    ]
  },
  {
    "slug": "chess-app",
    "title": "Chess.app",
    "code": "https://github.com/Killinwraith/Chess_IOS_app",
    "projectLink": "",
    "tech": [
      "Swift"
    ],
    "description": "Developed an iOS application using Swift and Xcode that allows a user to play a 2-player game of chess with a timer.",
    "details": [
      "Designing an interface which allows the game to played between two iPhones.",
      "Created a UI that adapts and changes its dimensions depending on the user's device.",
      "Implementing a timer option which allows the user to have the ability to choose the timer duration; works like a chess timer."
    ]
  }
];

// Not shown on the site.
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
