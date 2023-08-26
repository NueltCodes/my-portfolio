import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import reserveImage from "@/public/Reservationapp1.jpg";
import estoreImage from "@/public/estoreImage.jpg";
import DaaMarketplace from "@/public/DaaMarketplace.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Reservation app",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Prisma",
      "MongoDB",
      "Prisma",
      "Google console",
      "Github auth",
      "Cloudinary",
      "Tailwind",
    ],
    imageUrl: reserveImage,
  },
  {
    title: "E-store app with customer chat features",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind",
      "Redux",
      "JWT",
      "Stripes",
      "NodeMailer",
      "Cloudinary",
      "Socket.io",
    ],
    imageUrl: estoreImage,
  },
  {
    title: "Daa_marketPlace",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "MYSQL",
      "Prisma",
      "APi's",
      "Stripes",
      "Headless.ui",
      "Tailwind",
      "Cloudinary",
    ],
    imageUrl: DaaMarketplace,
  },
  {
    title: "Ecomerce Admin",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "MYSQL",
      "Planet scale",
      "Prisma",
      "Api's",
      "Clerk",
      "Shadcn.ui",
      "Cloudinary",
      "Chart.js",
      "Tailwind",
    ],
    imageUrl: DaaMarketplace,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "React-native",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Express",
  "Redux",
  "JWT",
  "Firebase",
  "Planet scale",
  "Framer Motion",
] as const;
