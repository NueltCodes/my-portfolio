"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { GrMail } from "react-icons/gr";

import Link from "next/link";
import { SiGithub } from "react-icons/si";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section";
import AnimateAvatar from "@/public/avatar.json";
import Lottie from "lottie-react";
import { useMediaQuery } from "react-responsive";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [ifHovered, setIfHovered] = useState(true);

  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-96"
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <div
              className="bg-slate-100 rounded-full w-full"
              onMouseEnter={() => setIfHovered(false)}
              onMouseLeave={() => setIfHovered(true)}
            >
              <Lottie
                animationData={AnimateAvatar}
                loop={ifHovered}
                autoplay
                style={
                  isSmallScreen
                    ? { height: 150, width: 150 }
                    : { height: 150, width: 150 }
                }
                className="w-full h-full cursor-pointer"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-5 mt-4 px-4 text-base font-medium !leading-[1.5] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="sm:font-bold !font-semibold">
          Hello, I'm Emmanuel.
        </span>{" "}
        I'm a{" "}
        <span className="sm:font-bold !font-[600]">
          full-stack web & mobile developer.
        </span>{" "}
        I enjoy building <span className="italic">apps</span> that offers
        services and are user friendly as you would see in my start-up projects
        below.
      </motion.h1>

      <motion.div
        className="inline-flex items-center justify-center "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#projects"
          onClick={() => {
            setActiveSection("Projects");
            setTimeOfLastClick(Date.now());
          }}
          className="relative cursor-pointer group overflow-hidden transition-all border-2 border-[#1d9bf0] dark:border-[#7a72ed] text-[#1d9bf0] font-bold px-5 py-2 rounded-lg text-[18px] mb-5 flex items-center justify-center  duration-300 ease-in-out dark:hover:text-white !hover:text-white"
          style={{ letterSpacing: "0.1em" }}
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] dark:bg-[#7a72ed] bg-[#1d9bf0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left dark:text-gray-300 text-black transition-colors duration-300 ease-in-out group-hover:text-white">
            Projects
          </span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex flex-col  sm:flex-row items-center justify-center gap-10 px-4 text-lg font-medium">
          <div className="flex gap-3">
            <a
              className="group bg-white px-7 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 active:scale-105 
            text-sm sm:text-base
            transition cursor-pointer borderBlack dark:bg-white/10"
              href="/CV.pdf"
              download
            >
              CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>
          </div>

          <div className="flex justify-center">
            <a
              className="group max-w-[450px] justify-center bg-white px-3 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href="/Meta.pdf"
              download
            >
              Mobile Cert
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>
          </div>

          <div className="flex items-center gap-6 sm:gap-10">
            <Link
              href="#contact"
              className="text-[25px] text-gray-500 flex items-center gap-2  rounded-full transition cursor-pointer hover:text-[#337ab7] dark:hover:text-[#337ab7] dark:text-white/60"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              <GrMail />
            </Link>

            <a
              className="text-[25px] text-gray-500 flex items-center gap-2  rounded-full transition cursor-pointer hover:text-[#337ab7] dark:hover:text-[#337ab7] dark:text-white/60"
              href="https://www.linkedin.com/in/emmanuet/"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="text-[25px] text-gray-500 flex items-center gap-2  rounded-full transition cursor-pointer hover:text-[#337ab7] dark:hover:text-[#337ab7] dark:text-white/60"
              href="https://github.com/NueltCodes"
              target="_blank"
            >
              <SiGithub />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
