"use client";
import { projectsData } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { BsBrowserChrome } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

type ProjectProps = {
  id: string;
  title: string;
  description: string;
  sourceCode: string;
  liveSite?: string; // Add this line
  liveVideo?: string;
  tags: readonly { image: string }[];
  imageUrl: StaticImageData;
};

const ProjectDetail: React.FC = () => {
  const pathname = usePathname();

  const foundProject: ProjectProps | undefined = projectsData.find(
    (info) => `/projectDetails/${info.id}` === pathname
  );

  return (
    <div className="mb-10">
      {foundProject ? (
        <>
          <section className="bg-slate-100 max-w-[55rem] border border-black/5 rounded-lg overflow-hidden scrollbar-hide relative sm:h-[20rem] hover:bg-gray-200 transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
            <div className="pt-4 pb-7 px-5 md:pt-10 flex flex-col h-full">
              <h3 className="text-2xl font-semibold">{foundProject.title}</h3>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                {foundProject.description}
              </p>

              <div className="flex mt-2 items-center md:gap-4 gap-1">
                <a
                  href={foundProject.sourceCode}
                  target="_blank"
                  className="bg-slate-500 text-white text-sm px-2 py-1 flex items-center gap-2 rounded-full outline-none   hover:bg-slate-600 active:scale-105 transition group"
                >
                  View Code{" "}
                  <FaGithubSquare className={`  opacity-70  transition`} />
                </a>
                <a
                  href={
                    foundProject.liveSite
                      ? foundProject.liveSite
                      : foundProject.liveVideo
                  }
                  target="_blank"
                  className="group bg-slate-500 text-white text-sm px-2 py-1 flex items-center gap-2 rounded-full outline-none   hover:bg-slate-600 active:scale-105 transition"
                >
                  {foundProject.liveSite ? "View App" : "Live Video"}
                  <BsBrowserChrome className=" opacity-70  transition" />
                </a>
              </div>

              <ul className="flex flex-wrap mt-4 gap-2  ">
                {foundProject.tags.map((tag, index) => (
                  <li
                    className="text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                  >
                    <Image
                      src={tag.image}
                      width={25}
                      height={25}
                      alt="Project I worked on"
                      className="bg-white rounded-full"
                    />{" "}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* Display other properties here... */}
        </>
      ) : (
        <p>Project not found</p>
      )}
    </div>
  );
};

export default ProjectDetail;
