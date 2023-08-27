"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        As an experienced Graphics designer, I discovered my interest for
        programming, I then embarked on a transformative journey to transition
        into <span className="font-medium">full-stack web developer</span>, I
        immersed myself in a rigorous coding activity where I honed my skills
        and also had lots challenge as there's nothing more rewarding than
        arriving at a solution after navigating through challenges. I hold a
        certificate from{" "}
        <span className="font-medium">
          Meta Fullstack Mobile Development course, which modified my strenght
          in mobile development and was perfect icing to my skillset, It also
          solidified my dedication to staying at the forefront in this industry.
        </span>
        <span> With 4 years of experience in graphics design,</span> I bring my
        own creativity into coding projects. This unique blend allows me to
        bridge the gap between design aesthetics and functional code. My core
        stack is{" "}
        <span className="font-medium">
          React, React-native, Next.js, Typescript, Prisma, Node.js, and MongoDB
        </span>
        . I am also lover of TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing keyboard. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning <span className="font-medium">French</span>.
      </p>
    </motion.section>
  );
}
