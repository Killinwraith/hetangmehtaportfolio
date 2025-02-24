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
    time: "JAN 2024 - AUG 2025",
    location: "Calgary",
    description:(
      <>
      <p>
      Developed a visual analytics PWA from scratch, using .NET, Blazor, C#, PL/SQL, and APIs, and deployed it via CI/CD Azure pipelines. The app enabled 500+ engineers in access/manage well production data, boosting operational efficiency by 30%.
      </p>
      <p>
      Refactored a 5+ year-old Oracle PL/SQL architecture to eliminate technical debt and support new features, reducing quarterly bug occurrences by 33%, saving 3x the app maintenance/support cost.
      </p>
      <p>
      Implemented 300+ unit tests using VB.Net Testing suite for 20 critical Budget calculations, reducing testing time from 10 days to 4 minutes, significantly improving efficiency and reliability.
      </p>
      <p>
      Converted a legacy VB.NET application (MAWL) into a PWA using Blazor, streamlining the management of well details (name, location, responsibilities, hierarchy) for CNRL engineers, improving data accessibility and operational efficiency while eliminating the need for a virtual Windows 10 PC/XenApp. 
      </p>
      <p>
      Developed budgeting procedures and UI enhancements from scratch in VB.NET and Oracle PL/SQL, enabling senior management to make informed business decisions and improving profit estimation accuracy while enhancing user experience.
      </p>
      <p>
      Debugged and developed fixes using a CI/CD pipeline to resolve critical production issues, which improved overall application stability and reduced downtime.
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
    time: "SEP 2023 - DEC 2023",
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
