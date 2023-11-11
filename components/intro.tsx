"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
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
              className="bg-slate-100 rounded-full w-full group"
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
                    : { height: 300, width: 300 }
                }
                className="w-full h-full cursor-pointer"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-lg font-medium !leading-[1.5] sm:text-4xl"
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
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <div className="flex justify-center mb-3">
          <a
            className="group max-w-[450px] justify-center bg-white px-3 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
            href="/Meta.pdf"
            download
          >
            Meta Mobile Certificate
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
          <div className="flex gap-3">
            <Link
              href="#contact"
              className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 text-sm sm:text-base rounded-full outline-none focus:scale-110 hover:bg-gray-950 active:scale-105 transition"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Contact
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 active:scale-105 
            text-sm sm:text-base
            transition cursor-pointer borderBlack dark:bg-white/10"
              href="/CV.pdf"
              download
            >
              Download CV{" "}
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>
          </div>

          <div className="flex gap-3">
            <a
              className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://www.linkedin.com/in/emmanuet/"
              target="_blank"
            >
              <BsLinkedin />
            </a>

            <a
              className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
              href="https://github.com/NueltCodes"
              target="_blank"
            >
              <FaGithubSquare />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Intro;
