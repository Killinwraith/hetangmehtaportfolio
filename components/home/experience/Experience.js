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
    title: "Canadian Natural Resources Limited, CNRL",
    position: "Systems Developer Student",
    time: "JAN 2024 - AUG 2024",
    location: "Calgary",
    description:(
      <>
      
        <p>
        Implemented and updated a budgeting procedure from the ground up, in VB.NET and Oracle PL/SQL to help aid business decisions made by senior management; Whilst also updating the UI to simplifying the user experience. Resulting in more accurate profit estimations for the company.
        </p>
        <p>
        Reworked the Oracle PL/SQL architecture to accommodate several new additional features allowing administrators to track the individuals responsible for any given site.
        </p>
        <p>
        Debugged, validated, tested, and developed fixes to resolve crucial production errors such as key budgeting calculations and UI failures within the Budget application, and scheduled oracle jobs failing.
        </p>
        <p>
        Utilized Agile methodology and Azure for successful deployments of full stack improvements to current applications which resulted in improved workflow and productivity of the users.
        </p>

      </>
    ),
    tech: [
      "VB.NET",
      "Oracle PL/SQL",
      "DevOps",
      "Microsoft Excel",
      "Blazor",
      "Azure"
    ],
  },
  {
    title: "Suncor",
    position: "Data Analyst Intern",
    time: "SEP 2023 - Present",
    location: "Fort McMurray",
    description:(
      <>
        <p>
        Developed 3 automation tools which saved 30 hours of work for tasks maintain, update, create and manipulate data within SAP.
        </p>
        <p>
        Streamlined many mundane business tasks for planners and schedulers by analyzing, designing and developing automation tools.
        </p>
        <p>
        Created analytical, informative, and visually appealing data visualizations using tools like Python and Power BI to help make my team make data-driven decisions.
        </p>
        <p>
        Designed new automation tools based on business requirements, to streamline the business processes and functions using Python.
        </p>
        <p>
        Cleaned and processed large datasets to ensure data quality and accuracy, improving the reliability of subsequent analyses.
        </p>

      </>
    ),
    tech: [
      "Python",
      "SAP",
      "PowerBI",
      "Microsoft Excel",
    ],
  },
  {
    title: "Aquatics Lifeguard and Swimming Instructor",
    position: "YMCA",
    time: "May 2019 - SEP 2023",
    location: "Calgary",
    description: (
      <>
        <p>
        Trained four lifeguards and swimming instructors on effective scanning and teaching techniques
        </p>
        <p>
        Utilized lifesaving techniques to ensure the safety of patrons during a swim test, lessons, on deck and when assisting co-workers
        </p>
        <p>
        Ensured patrons aged from 12-months to 75 years old received an amazing learning experience in lessons
        </p>
        <p>
        Performed regular headcounts, three water tests per day, change room checks, and safety checks of equipment
        </p>

      </>
    ),
    tech: [],
  },
];
