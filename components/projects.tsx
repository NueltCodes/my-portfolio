"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.3);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        <div className="max-w-[42rem] font-semibold text-[25px] text-center text-red-500">
          Note:{" "}
          <span className="font-medium text-lg dark:text-gray-100 text-gray-950">
            {" "}
            To launch the <b>Mobile app</b> below, you must first install{" "}
            <b>Expo Go</b> on an Android device. Then, scan the barcode from the
            app below on Expo Go to install the app.
          </span>
        </div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
