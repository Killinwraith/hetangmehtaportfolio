import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={`${item.title}-${item.time}`} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Canadian Natural Resources Limited, CNRL",
    position: "Systems Developer Student",
    time: "JAN - AUG 2024; JAN - AUG 2025; MAY - DEC 2026",
    location: "Calgary",
    description: (
      <>
        <p>
          Improved productivity by 30% for 500+ exploitation engineers by
          designing and shipping a PWA that gives them one reliable source for
          well production data (C#, .NET, Blazor, REST APIs, Azure CI/CD).
        </p>
        <p>
          Led development of the Enersight integration, a multi-stage import
          wizard in the capital budgeting app: stages external asset data in
          Oracle, lets users map, merge or exclude assets against budget
          entities, and loads only after privilege, version-lock and
          business-rule validation, with a per-asset audit trail.
        </p>
        <p>
          Cut worst-case load time by 81% (117s → 22s) on a performance-critical
          VB.NET/ASP.NET and Oracle data path by profiling it, removing redundant
          fetches and moving a 59s operation off the critical path; added
          reusable timing instrumentation.
        </p>
        <p>
          Took over as lead developer of the budgeting application after a team
          transition: sole technical contact for 5 business stakeholders, owner
          of deployments, and onboarding lead for a new developer; set up
          twice-weekly standups and a weekly business review.
        </p>
        <p>
          Cut economics regression testing from 10 days of manual UAT to 4
          minutes by building a library of 300+ automated unit tests and
          validation pipelines in C# and VB.NET, saving $60K.
        </p>
        <p>
          Reduced defects by 33% and recovered 100+ hours/yr of engineer idle
          time by redesigning Oracle SQL schemas, optimizing queries, and
          enforcing data integrity constraints.
        </p>
      </>
    ),
    tech: [
      "VB.NET",
      "Oracle PL/SQL",
      "DevOps",
      "Microsoft Excel",
      "Blazor",
      "Azure",
      "ASP.NET",
      "Enersight API",
      "C#",
      ".NET",
      "REST APIs",
    ],
  },
  {
    title: "Alberta BIONIX - School Club",
    position: "Machine Learning Team Lead",
    time: "SEP 2025 - Present",
    location: "Edmonton",
    description: (
      <>
        <p>
          Lead the ML team building control models for a prosthetic knee,
          managing and mentoring 2 junior engineers; researching reinforcement
          learning to auto-tune the knee motor&apos;s PID controller.
        </p>
        <p>
          Processed and analyzed a 26GB EMG gait dataset using Python (Pandas,
          NumPy, Scikit-learn), building feature engineering pipelines to
          extract biomechanical signals used for prosthetic knee control.
        </p>
        <p>
          Developed and evaluated machine learning models (Random Forest, SVM)
          to classify prosthetic trial participant viability from EMG activation
          patterns.
        </p>
        <p>
          Designed and trained CNN models for real-time knee flexion prediction,
          achieving 87% accuracy across locomotion modes (sitting, standing,
          walking, running).
        </p>
      </>
    ),
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "CNNs",
      "Random Forest",
      "SVM",
      "Reinforcement Learning",
    ],
  },
  {
    title: "Suncor Energy",
    position: "Data Analyst Intern",
    time: "SEP 2023 - DEC 2023",
    location: "Fort McMurray",
    description: (
      <>
        <p>
          Developed 3 Python-based automation tools for SAP workflows (data
          maintenance, updates, manipulation), saving 30+ hours/week of manual
          work and $26K annually for planners and schedulers.
        </p>
        <p>
          Cleaned and processed large datasets using Python, Excel, and VB to
          ensure data quality, then built analytical dashboards in Power BI to
          support data-driven decisions across the team.
        </p>
      </>
    ),
    tech: ["Python", "SAP", "PowerBI", "Microsoft Excel", "VB"],
  },
  {
    title: "YMCA",
    position: "Aquatics Lifeguard and Swimming Instructor",
    time: "May 2019 - SEP 2023",
    location: "Calgary",
    description: (
      <>
        <p>
          Trained four lifeguards and swimming instructors on effective scanning
          and teaching techniques
        </p>
        <p>
          Utilized lifesaving techniques to ensure the safety of patrons during
          a swim test, lessons, on deck and when assisting co-workers
        </p>
        <p>
          Ensured patrons aged from 12-months to 75 years old received an
          amazing learning experience in lessons
        </p>
        <p>
          Performed regular headcounts, three water tests per day, change room
          checks, and safety checks of equipment
        </p>
      </>
    ),
    tech: [],
  },
];
