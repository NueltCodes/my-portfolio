"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { BsBrowserChrome } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  title,
  description,
  sourceCode,
  liveSite,
  tags,
  imageUrl,
}: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-slate-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden  relative sm:h-[20rem] hover:bg-gray-200 transition  dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem] overflow-y-scroll">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <div className="flex items-center md:gap-4 gap-1">
            <a
              href={sourceCode}
              target="_blank"
              className="bg-slate-500 text-white text-sm px-2 py-1 flex items-center gap-2 rounded-full outline-none sm:focus:scale-110 sm:hover:scale-110 hover:bg-slate-600 active:scale-105 transition group"
            >
              View Code{" "}
              <FaGithubSquare className="opacity-70 group-hover:translate-x-1 transition" />
            </a>
            <a
              href={liveSite}
              target="_blank"
              className="group bg-slate-500 text-white text-sm px-2 py-1 flex items-center gap-2 rounded-full outline-none sm:focus:scale-110 sm:hover:scale-110 hover:bg-slate-600 active:scale-105 transition"
            >
              Visit Project{" "}
              <BsBrowserChrome className="opacity-70 group-hover:translate-x-1 transition" />
            </a>
          </div>

          <ul className="flex flex-wrap mt-4 gap-2  ">
            <p className="font-semibold">Used Tech stack</p>
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <a href={liveSite} target="_blank">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="sm:absolute p-3 sm:p-0 object-contain h-full w-full  sm:block top-8 -right-40 sm:w-[28.25rem] rounded-t-lg shadow-2xl
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
