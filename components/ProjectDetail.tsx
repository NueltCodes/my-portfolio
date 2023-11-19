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
  info?: string;
  sourceCode: string;
  liveSite?: string; // Add this line
  liveVideo?: string;
  tags: readonly { image: string }[];
  screenShots?: readonly { image: string }[];
  imageUrl: StaticImageData;
  barCode?: StaticImageData;
  logins?: string;
  password?: string;
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
          <section className="bg-slate-100 max-w-[55rem] border border-black/5 rounded-lg overflow-hidden scrollbar-hide relative  hover:bg-[#dbd7fb] transition ease-in-out dark:text-white dark:bg-white/10 dark:hover:bg-white/5 shadow-lg">
            <div className="pt-4 pb-7 px-5 md:pt-10 flex flex-col h-full">
              <h3 className="text-2xl font-semibold">{foundProject.title}</h3>
              {foundProject.logins && (
                <>
                  <p className="font-medium text-sm mt-2">Login credentials</p>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[15px] font-medium">
                      {"U: " + foundProject.logins}
                    </h3>
                    <h3 className="text-[15px] font-medium">
                      {"P: " + foundProject.password}
                    </h3>
                  </div>
                </>
              )}
              {foundProject.info && (
                <div className="text-[18px] font-semibold text-red-600 mt-3">
                  Note
                  <div className="flex items-start gap-3">
                    <p className="font-normal mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                      {foundProject.info}
                    </p>

                    <Image
                      src={foundProject.barCode ?? ""}
                      width={200}
                      height={100}
                      alt="Barcode to app"
                      className=""
                    />
                  </div>
                </div>
              )}

              <p className="mt-3 text-[18px] font-semibold text-gray-700 dark:text-white/70">
                About
              </p>
              <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
                {foundProject.description}
              </p>

              <Image
                src={foundProject.imageUrl}
                width={200}
                height={200}
                alt="Project image"
                className="object-cover w-full my-4"
              />

              {foundProject.screenShots && (
                <h2 className="mt-4 mb-2 text-[18px] font-semibold text-gray-700 dark:text-white/70">
                  Preview
                </h2>
              )}
              <ul className="flex flex-wrap justify-center  gap-2  ">
                {foundProject.screenShots?.map((screens, index) => (
                  <li
                    className="text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                    key={index}
                  >
                    <Image
                      src={screens.image}
                      width={200}
                      height={100}
                      alt="Project I worked on"
                      className=" object-cover"
                    />
                  </li>
                ))}
              </ul>

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
                    />
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
