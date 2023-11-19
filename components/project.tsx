"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { BsBrowserChrome } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

type ProjectProps = {
  id: string;
  title: string;
  description: string;
  sourceCode: string;
  liveVideo?: string;
  liveSite?: string;
  logins?: string;
  tags: readonly { image: string }[];
  imageUrl: StaticImageData;
};

// Define the Project component
const Project: React.FC<ProjectProps> = ({
  id,
  title,
  description,
  sourceCode,
  liveSite,
  logins,
  liveVideo,
  tags,
  imageUrl,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [git, setGit] = useState(false);
  const [live, setLive] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const route = useRouter();
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 shadow-lg"
    >
      <section className="bg-slate-100 max-w-[45rem] border border-black/5 rounded-lg overflow-hidden scrollbar-hide relative sm:h-[20rem] hover:bg-gray-200 transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 md:pt-10 sm:max-w-[70%] flex flex-col h-full sm:group-odd:mr-[22rem] sm:group-even:ml-[20rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 line-clamp-3">
            {description}
          </p>
          <div className="flex items-center gap-3">
            <span
              onClick={() => route.push(`/projectDetails/${id}`)}
              className="w-[100px] text-blue-500 text-sm hover:text-blue-300 cursor-pointer transition dark:hover:text-gray-300"
            >
              read more
            </span>
            {logins && (
              <span
                onClick={() => route.push(`/projectDetails/${id}`)}
                className="w-[100px] text-blue-500 text-sm hover:text-blue-300 cursor-pointer transition dark:hover:text-gray-300"
              >
                login details
              </span>
            )}
          </div>
          <div className="flex mt-2 items-center md:gap-4 gap-1">
            <a
              onMouseEnter={() => setGit(true)}
              onMouseLeave={() => setGit(false)}
              href={sourceCode}
              target="_blank"
              className="bg-slate-500 text-white text-sm px-2 py-1 flex items-center gap-2 rounded-full outline-none   hover:bg-slate-600 active:scale-105 transition group"
            >
              View Code{" "}
              <FaGithubSquare
                className={` ${
                  git ? "group-hover:translate-x-1" : ""
                } opacity-70  transition`}
              />
            </a>
            <a
              onMouseEnter={() => setLive(true)}
              onMouseLeave={() => setLive(false)}
              href={liveSite ? liveSite : liveVideo}
              target="_blank"
              className="group bg-slate-500 text-white text-sm px-2 py-1 flex items-center gap-2 rounded-full outline-none   hover:bg-slate-600 active:scale-105 transition"
            >
              {liveSite ? "View App" : "Live Video"}
              <BsBrowserChrome
                className={` ${
                  live ? "group-hover:translate-x-1" : ""
                } opacity-70  transition`}
              />
            </a>
          </div>

          <ul className="flex flex-wrap mt-4 gap-2  ">
            {tags.map((tag, index) => (
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

        <a href={liveSite} target="_blank">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="sm:absolute p-3 sm:p-0 object-cover h-full w-full  sm:block top-0 -right-32 sm:w-[28.25rem] rounded-t-lg shadow-2xl
            transition 
            sm:group-hover:scale-[1.04]
            sm:group-hover:-translate-x-3
            sm:group-hover:translate-y-3
            sm:group-hover:-rotate-2
    
            sm:group-even:group-hover:translate-x-3
            sm:group-even:group-hover:translate-y-3
            sm:group-even:group-hover:rotate-2
    
            sm:group-even:right-[initial] sm:group-even:-left-40"
          />
        </a>
      </section>
    </motion.div>
  );
};

export default Project;
