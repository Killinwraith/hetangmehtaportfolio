import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "Alberta Bionix - School Club",
    position: "Machine Learning Engineer",
    time: "SEP 2025 - Present",
    location: "Edmonton",
    description: (
      <>
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
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn"],
  },
  {
    title: "Canadian Natural Resources Limited, CNRL",
    position: "Systems Developer Student",
    time: "MAY 2026 - Present",
    location: "Calgary",
    description: (
      <>
        <p></p>
      </>
    ),
    tech: [
      "VB.NET",
      "Oracle PL/SQL",
      "DevOps",
      "Microsoft Excel",
      "Blazor",
      "Azure",
    ],
  },
  {
    title: "Canadian Natural Resources Limited, CNRL",
    position: "Systems Developer Student",
    time: "JAN 2024 - AUG 2025",
    location: "Calgary",
    description: (
      <>
        <p>
          Improved productivity by 30% for 500+ engineers by owning the design
          and delivery of a PWA built with C#, .NET, Blazor, REST APIs, and
          Azure CI/CD.
        </p>
        <p>
          Reduced defects by 33% and saved $40K annually by redesigning Oracle
          SQL schemas, optimizing queries, and enforcing data integrity
          constraints.
        </p>
        <p>
          Reduced test latency from 10 days to 4 minutes, saving $60K by
          building 300+ automated unit tests and validation pipelines in C# and
          VB.
        </p>
        <p>
          Developed budgeting procedures and UI enhancements from scratch in
          VB.NET and Oracle PL/SQL, enabling senior management to make informed
          business decisions and improving profit estimation accuracy while
          enhancing user experience.
        </p>
        <p>
          Debugged and developed fixes using a CI/CD pipeline to resolve
          critical production issues, which improved overall application
          stability and reduced downtime.
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
    ],
  },
  {
    title: "Suncor",
    position: "Data Analyst Intern",
    time: "SEP 2023 - DEC 2023",
    location: "Fort McMurray",
    description: (
      <>
        <p>
          Developed 3 automation tools which saved 30 hours of work for tasks
          maintain, update, create and manipulate data within SAP.
        </p>
        <p>
          Streamlined many mundane business tasks for planners and schedulers by
          analyzing, designing and developing automation tools.
        </p>
        <p>
          Created analytical, informative, and visually appealing data
          visualizations using tools like Python and Power BI to help make my
          team make data-driven decisions.
        </p>
        <p>
          Designed new automation tools based on business requirements, to
          streamline the business processes and functions using Python.
        </p>
        <p>
          Cleaned and processed large datasets to ensure data quality and
          accuracy, improving the reliability of subsequent analyses.
        </p>
      </>
    ),
    tech: ["Python", "SAP", "PowerBI", "Microsoft Excel"],
  },
  {
    title: "Aquatics Lifeguard and Swimming Instructor",
    position: "YMCA",
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
