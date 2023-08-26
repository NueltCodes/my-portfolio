import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28">
      <SectionHeading>My Start-up project</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
