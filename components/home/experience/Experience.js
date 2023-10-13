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
