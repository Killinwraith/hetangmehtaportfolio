# Content inventory

Audited 2026-11-06 for the `redesign` branch. This is the source of truth for the redesign's content diff.

**Source checked:** https://www.hetangmehta.ca (Vercel), compared with commit `afdd01d`. The rendered text on the live page exactly matches a build of this repo, and sampled project detail text is in the live JavaScript bundles. There are no wording differences to reconcile.

**Out of scope:** `Projects/PersonalPortfolio_New` (Astro, not the live site). Its articles, stickers, about page and `hello@hetangmehta.ca` address are not part of this inventory.

## Pages and URLs

| URL | What it is | Status |
|---|---|---|
| `/` | The only page | Keep |
| `/#about`, `/#projects`, `/#experience`, `/#contact` | Section anchors | Keep |
| `/Hetang_Mehta_Resume.pdf` | Resume, opened by "My resume" | Keep |
| `/sitemap.xml`, `/robots.txt`, `/rss.xml` | Return 404, do not exist | Nothing to preserve |
| `/about`, `/projects`, `/articles`, `/contact` | Return 404, do not exist | Nothing to preserve |

The site has no articles, per-project pages, analytics, RSS or sitemap.

## Sections

| Section | Content | Repo location |
|---|---|---|
| Navigation | Logo "H.", About, Projects, Exp., Contact | `components/nav/SideBar.js` |
| Header | LinkedIn, GitHub, "My resume" | `components/nav/Heading.js`, `components/nav/components/MyLinks.js` |
| Hero | Greeting, role, one-line intro, "Contact me" | `components/home/hero/Hero.js` |
| About | 5 paragraphs and "My links" | `components/home/about/About.js` |
| Skills | 8 chip groups | `components/home/about/Stats.js` |
| Projects | 8 live projects | `components/home/projects/Projects.js` |
| Experience | 4 entries | `components/home/experience/Experience.js` |
| Contact | Copy, email, phone, LinkedIn, GitHub | `components/home/contact/Contact.js` |

## Links

| Link | Destination | Used in |
|---|---|---|
| Email | `mailto:hetangmehta03@gmail.com` | Contact |
| Phone | +1 (587) 438-8399 (displayed, not a link) | Contact |
| LinkedIn | https://www.linkedin.com/in/hetang-mehta/ | Header, About, Contact |
| GitHub | https://github.com/Killinwraith | Header, About, Contact |
| Resume | `/Hetang_Mehta_Resume.pdf` | Header |

## Projects

| Project | Source code | Live link | Tech |
|---|---|---|---|
| Energy Copilot | https://github.com/Killinwraith/EnergyCopilot | none | Python, FastAPI, PostgreSQL, pgvector, Next.js |
| EMG Viability Classifier | https://github.com/albertabionix/EMG_Viability_ML_Algorithm | none | Python, Scikit-learn, NumPy, Pandas, Signal Processing |
| Batch Normalization Reproduction | https://github.com/Killinwraith/BatchNormalization-ReduceInternalCovariateShift | none | Python, PyTorch, NumPy, Matplotlib |
| Event Lottery System | https://github.com/Killinwraith/EventLotteryApp | none | Java, Android Studio, Firebase |
| Multithreaded Concurrent Server | https://github.com/Killinwraith/MultithreadedServerForConcurrentR-W | none | C, POSIX Threads, Sockets, Concurrency |
| ATS Resume Analyzer | https://github.com/Killinwraith/ATS_Resume_Analyzer | https://atsresume-ai.vercel.app/dashboard | Next.js, TypeScript, React, Google Gemini AI |
| Boxed | https://github.com/Killinwraith/Boxed | none | React, TypeScript, Node.js, Express, Auth0, Cloudflare R2, Docker |
| Chess.app | https://github.com/Killinwraith/Chess_IOS_app | none | Swift |

Two more projects, **Locked-In** and **Dog Classifier Website**, are commented out in `Projects.js`. They are not on the live site, so they are not in scope, and the comments are not being deleted as content.

## Images and assets

| File | Referenced by the site? | Note |
|---|---|---|
| `public/project-imgs/example-project.jpg` | Yes, on all 8 projects | Placeholder that reads "Your Project Here" |
| `public/favicon.ico` | Yes | |
| `public/Hetang_Mehta_Resume.pdf` | Yes | |
| `public/Hetang_Mehta_Resume1.pdf` | No | Publicly downloadable |
| `public/Hetang_Mehta_Resume_old.pdf` | No | Publicly downloadable |
| `public/Hetang_Mehta_Resume_v2.pdf` | No | Publicly downloadable |
| `public/fake_resume.pdf` | No | Publicly downloadable |
| `public/bob-ross.png` | No | Publicly downloadable |
| `public/next.svg`, `public/thirteen.svg`, `public/vercel.svg` | No | Framework starter files |
| `https://www.hetangmehta.ca/og-image.png` | Yes, in meta tags | **Missing: returns 404** |

## SEO and meta

Set in `pages/index.js`:

- **Title:** Hetang Mehta — Software Engineer
- **Description:** Hetang Mehta is a Software Engineer and Computer Engineering student at the University of Alberta, working across full-stack, machine learning, and cloud infrastructure.
- **Author:** Hetang Mehta
- **Canonical and `og:url`:** https://www.hetangmehta.ca
- **Open Graph and Twitter description:** Computer Engineering student at the University of Alberta. Full-stack, ML, and cloud infrastructure.
- **Open Graph type and Twitter card:** website, summary_large_image

## Project detail text

This text only appears when a project is opened, so it is not in the page snapshot below.

### Energy Copilot

**Card description:** In progress: an AI copilot that answers plain-English questions over public Alberta well production data.

- Building an AI copilot that answers plain-English questions over public Alberta well production data (Petrinex, AER). This project is in progress.
- Wrote the product spec: target users, priority use cases, success metrics and a phased roadmap.
- Using a tool-calling agent that writes guarded read-only SQL, forecasts decline curves, and cites AER directives, with pgvector retrieval for RAG.
- Designed responsible-AI guardrails: answers grounded in query results, cited regulations, and refusals on confidential data.
- Developing eval-first: versioned test sets for SQL accuracy, retrieval and extraction, used to compare RAG chunking and hybrid retrieval strategies, with CI blocking regressions.

### EMG Viability Classifier

**Card description:** An ML pipeline that classifies prosthetic trial candidate viability from EMG sensor data, built for Alberta BIONIX.

- Designed a full signal-processing and ML pipeline for the SIAT-LLMD dataset (40 subjects, 9 channels, 1920 Hz) to classify candidate viability for prosthetic knee trials.
- Built preprocessing in Python: bandpass (20-450 Hz) and 60 Hz notch filtering, DC removal, and channel selection isolating the four thigh muscles above the amputation site.
- Engineered 30 features per window — Du's six time-domain features (integrated EMG, variance, waveform length, zero crossings, slope sign changes, Willison amplitude) across four channels, plus six inter-channel Pearson correlations.
- Trained three mode-specific one-class SVMs (sitting, standing, walking) on the able-bodied population, with a weighted scoring system (0.2 / 0.3 / 0.5) producing a final 0-100 viability score.

### Batch Normalization Reproduction

**Card description:** Reproduction of Ioffe & Szegedy's ICML 2015 Batch Normalization paper, validating its core claims on MNIST and CIFAR-10.

- Reproduced two central findings from Ioffe & Szegedy's "Batch Normalization: Accelerating Deep Network Training by Reducing Internal Covariate Shift" (ICML 2015) as part of ECE 447 at the University of Alberta.
- Built a 3-layer fully connected sigmoid network on MNIST to reproduce Figure 1(a), demonstrating that BN improves test accuracy from ~73-83% to ~97-98% across varying network widths.
- Designed a 6-layer CNN on CIFAR-10 to validate BN's learning rate stability claim, showing non-BN networks diverge (NaN loss) at LR = 0.1 while BN networks train stably to ~80% accuracy.
- Implemented original ablation studies on hidden layer width and optimizer choice (SGD vs. Adam) to extend the paper's findings beyond its original setup.

### Event Lottery System

**Card description:** An Android application that enables fair, lottery-based registration for high-demand community events.

- Built an Android application in Java, enabling fair, lottery-based registration for high-demand community events.
- Integrated Firebase for real-time event data, notifications, user state management, and multi-role access control.
- Supported event life-cycle management, including registration windows, cancellations, and replacement draws.

### Multithreaded Concurrent Server

**Card description:** A thread-pool TCP server in C handling concurrent read/write requests with data consistency guarantees.

- Built a multithreaded TCP server in C from scratch, using a thread-pool architecture to manage connection load and supporting concurrent client connections, with mutexes and reader-writer locks for safe shared-state access and to prevent race conditions.
- Implemented the client-server message protocol over POSIX sockets with custom message parsing and timing instrumentation for throughput measurement.
- Validated correctness using an adversarial "attacker" client designed to expose race conditions and data consistency violations under load.

### ATS Resume Analyzer

**Card description:** A GenAI-powered full-stack web application that evaluates resume compatibility with job descriptions.

- Developed a full-stack web application with Next.js 15, React.ts, and TypeScript to evaluate resume compatibility with job descriptions.
- Built a GenAI-powered resume evaluation platform using Google Gemini LLMs to analyze job descriptions and compute ATS compatibility scores.
- Implemented prompt-based evaluation pipelines for keyword extraction and resume optimization recommendations, including suggested rewrites, and deployed the app to production on Vercel.

### Boxed

**Card description:** A cloud storage infrastructure enabling secure file uploads, retrieval, and access control.

- Built a cloud storage infrastructure enabling secure file uploads, retrieval, and access control.
- Implemented authentication and role-based access with Auth0 using the OAuth 2.0 protocol.
- Deployed on Docker with S3-compatible storage via Cloudflare R2, integrated through RESTful APIs.

### Chess.app

**Card description:** Developed an iOS application using Swift and Xcode that allows a user to play a 2-player game of chess with a timer.

- Designing an interface which allows the game to played between two iPhones.
- Created a UI that adapts and changes its dimensions depending on the user's device.
- Implementing a timer option which allows the user to have the ability to choose the timer duration; works like a chess timer.

## Live page text snapshot

Word for word from the server-rendered page, in order.

```text
Hetang Mehta — Software Engineer
H
.
About
Projects
Exp.
Contact
My resume
Hey, I'm Hetang
.
I'm a
Software Engineer
Final-year Computer Engineering student at the University of Alberta, building across full-stack, machine learning, and cloud infrastructure.
Contact me
About
.
Hey! I'm Hetang, if you haven't already gathered that by now. I'm a fourth year Computer Engineering (Co-op) student at the University of Alberta, graduating in April 2027, with experience spanning full-stack development, machine learning, and cloud infrastructure. My coursework includes data structures and algorithms, object-oriented software design, operating systems, parallel and distributed programming, and databases.
I've accumulated a deep set of engineering experience through my internships as a Systems Developer at Canadian Natural Resources Limited and a Data Analyst at Suncor Energy, where I shipped production systems used by 500+ engineers and automated workflows saving 30+ hours a week. At Canadian Natural, I've since stepped up as lead developer of a core capital budgeting application.
I'm currently a Machine Learning Engineer and team lead with Alberta BIONIX, where I build models for real-time prosthetic knee control from EMG sensor data and mentor 2 junior engineers. On the side, I'm building Energy Copilot, an AI agent that answers plain-English questions over Alberta well production data.
Outside of work, I love to draw, hike, play golf, cook, build woodworking projects, and travel.
I'm looking for new opportunities where I can merge my love for code with my creativity. If you think you've got an opening that I might like, let's connect 🔗
My links
Languages
Python
Java
C++
C
C#
JavaScript
TypeScript
SQL
Go
Swift
Kotlin
VB.NET
Ruby
ML & AI
PyTorch
Scikit-learn
Pandas
NumPy
Gemini API
Matplotlib
RAG
Frameworks & Tools
React
Next.js
Node.js
Express
Spring Boot
.NET
Blazor
Flask
REST APIs
JUnit
Auth0
Android Studio
ASP.NET
FastAPI
Power BI
Cloud & DevOps
AWS S3
Azure CI/CD
Cloudflare R2
Docker
Kubernetes
Git
GitHub
Linux/Unix
Databases
Oracle SQL
PostgreSQL
MySQL
MongoDB
pgvector
Query Optimization
Schema Design
Engineering Practices
Data Structures & Algorithms
Object-Oriented Design
Concurrency
Unit Testing
Debugging
SDLC
Agile
Product
Stakeholder Management
Requirements & Scoping
Release Ownership
UAT
AI-Assisted Development
Claude
Claude Code
GitHub Copilot
Projects
.
Energy Copilot
Python - FastAPI - PostgreSQL - pgvector - Next.js
In progress: an AI copilot that answers plain-English questions over public Alberta well production data.
Learn more
>
EMG Viability Classifier
Python - Scikit-learn - NumPy - Pandas - Signal Processing
An ML pipeline that classifies prosthetic trial candidate viability from EMG sensor data, built for Alberta BIONIX.
Learn more
>
Batch Normalization Reproduction
Python - PyTorch - NumPy - Matplotlib
Reproduction of Ioffe & Szegedy's ICML 2015 Batch Normalization paper, validating its core claims on MNIST and CIFAR-10.
Learn more
>
Event Lottery System
Java - Android Studio - Firebase
An Android application that enables fair, lottery-based registration for high-demand community events.
Learn more
>
Multithreaded Concurrent Server
C - POSIX Threads - Sockets - Concurrency
A thread-pool TCP server in C handling concurrent read/write requests with data consistency guarantees.
Learn more
>
ATS Resume Analyzer
Next.js - TypeScript - React - Google Gemini AI
A GenAI-powered full-stack web application that evaluates resume compatibility with job descriptions.
Learn more
>
Boxed
React - TypeScript - Node.js - Express - Auth0 - Cloudflare R2 - Docker
A cloud storage infrastructure enabling secure file uploads, retrieval, and access control.
Learn more
>
Chess.app
Swift
Developed an iOS application using Swift and Xcode that allows a user to play a 2-player game of chess with a timer.
Learn more
>
Experience
.
Canadian Natural Resources Limited, CNRL
JAN - AUG 2024; JAN - AUG 2025; MAY - DEC 2026
Systems Developer Student
Calgary
Improved productivity by 30% for 500+ exploitation engineers by designing and shipping a PWA that gives them one reliable source for well production data (C#, .NET, Blazor, REST APIs, Azure CI/CD).
Led development of the Enersight integration, a multi-stage import wizard in the capital budgeting app: stages external asset data in Oracle, lets users map, merge or exclude assets against budget entities, and loads only after privilege, version-lock and business-rule validation, with a per-asset audit trail.
Cut worst-case load time by 81% (117s → 22s) on a performance-critical VB.NET/ASP.NET and Oracle data path by profiling it, removing redundant fetches and moving a 59s operation off the critical path; added reusable timing instrumentation.
Took over as lead developer of the budgeting application after a team transition: sole technical contact for 5 business stakeholders, owner of deployments, and onboarding lead for a new developer; set up twice-weekly standups and a weekly business review.
Cut economics regression testing from 10 days of manual UAT to 4 minutes by building a library of 300+ automated unit tests and validation pipelines in C# and VB.NET, saving $60K.
Reduced defects by 33% and recovered 100+ hours/yr of engineer idle time by redesigning Oracle SQL schemas, optimizing queries, and enforcing data integrity constraints.
VB.NET
Oracle PL/SQL
DevOps
Microsoft Excel
Blazor
Azure
ASP.NET
Enersight API
C#
.NET
REST APIs
Alberta BIONIX - School Club
SEP 2025 - Present
Machine Learning Team Lead
Edmonton
Lead the ML team building control models for a prosthetic knee, managing and mentoring 2 junior engineers; researching reinforcement learning to auto-tune the knee motor's PID controller.
Processed and analyzed a 26GB EMG gait dataset using Python (Pandas, NumPy, Scikit-learn), building feature engineering pipelines to extract biomechanical signals used for prosthetic knee control.
Developed and evaluated machine learning models (Random Forest, SVM) to classify prosthetic trial participant viability from EMG activation patterns.
Designed and trained CNN models for real-time knee flexion prediction, achieving 87% accuracy across locomotion modes (sitting, standing, walking, running).
Python
Pandas
NumPy
Scikit-learn
CNNs
Random Forest
SVM
Reinforcement Learning
Suncor Energy
SEP 2023 - DEC 2023
Data Analyst Intern
Fort McMurray
Developed 3 Python-based automation tools for SAP workflows (data maintenance, updates, manipulation), saving 30+ hours/week of manual work and $26K annually for planners and schedulers.
Cleaned and processed large datasets using Python, Excel, and VB to ensure data quality, then built analytical dashboards in Power BI to support data-driven decisions across the team.
Python
SAP
PowerBI
Microsoft Excel
VB
YMCA
May 2019 - SEP 2023
Aquatics Lifeguard and Swimming Instructor
Calgary
Trained four lifeguards and swimming instructors on effective scanning and teaching techniques
Utilized lifesaving techniques to ensure the safety of patrons during a swim test, lessons, on deck and when assisting co-workers
Ensured patrons aged from 12-months to 75 years old received an amazing learning experience in lessons
Performed regular headcounts, three water tests per day, change room checks, and safety checks of equipment
Contact
.
Shoot me an email if you want to connect! You can also find me on
Linkedin
or
GitHub
if that's more your speed.
hetangmehta03@
gmail.com
+1 (587) 438-8399
```
