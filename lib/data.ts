import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { IoLogoDesignernews } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import Peer from "@/public/Peer.png";
import market from "@/public/market.png";
import Vstrim from "@/public/Vstrim.png";
import reserveMobileApp from "@/public/mobile-reserve-app.jpg";
import reserveBarCode from "@/public/reserve-barcode.jpg";

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
    title: "Graphic Design",
    location: "Abuja / remote",
    description:
      "I worked as a graphics desginer at a priniting press and later freelanced for a media company remotely.",
    icon: React.createElement(IoLogoDesignernews),
    date: "2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "During this role I learnt alot, one of them being re-assigning JWT Tokens to users after redeploying as the domain changes, I led the development of my start-up app, which is called Market. This has been a valuable experience that has allowed me to further refine my technical skills and capability to provide software as a services",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Meta Fullstack Mobile Certificate",
    location: "Online",
    description:
      "I have successfully completed the Meta Fullstack Mobile Development course and earned a certificate in recognition of my knowledge and skills in mobile development. This online program provided me with a solid foundation in the latest technologies and best practices for building high-quality mobile applications.",
    icon: React.createElement(TbCertificate),
    date: "2023",
  },
  {
    title: "Full-Stack Web & Mobile Developer",
    location: "Remote",
    description:
      "This role presented me with numerous challenges, but I was able to overcome them and successfully create a Reservation Web & Mobile app called Peer. Peer was complicated app to create as I had update the codebase with some new feaures and packages.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    id: "0",
    title: "Reserve Mobile App",
    description:
      "Reserve is a Mobile platform where you get to find a place to stay and relax. Our app makes it easy to search for lodging options across the globe and find exactly the type of place you are looking for. Discover your next adventure with our Mobile app!",
    sourceCode: "https://github.com/NueltCodes/reservation_mobile_app",
    liveVideo: "https://www.tiktok.com/@olanirantobi/video/7257246536151649542",
    info: "To launch the Mobile app below, you must first install Expo Go on an Android device so as to test the app live on your device. Then from the app scan the barcode and you have the access to the mobile app.",

    screenShots: [
      {
        image: require("../public/html.png").default,
      },
      { image: require("../public/Css.png").default },
      { image: require("../public/javascript.png").default },
      {
        image: require("../public/react.png").default,
      },
      {
        image: require("../public/firebase.png").default,
      },
      {
        image: require("../public/expo.png").default,
      },
    ],
    tags: [
      {
        image: require("../public/html.png").default,
      },
      { image: require("../public/Css.png").default },
      { image: require("../public/javascript.png").default },
      {
        image: require("../public/react.png").default,
      },
      {
        image: require("../public/firebase.png").default,
      },
      {
        image: require("../public/expo.png").default,
      },
    ],
    imageUrl: reserveMobileApp,
    barCode: reserveBarCode,
  },
  {
    id: "1",

    title: "Vstrim",
    description:
      "As the creator of the Vstrim video streaming app. My app offers high-quality streaming services, ensuring smooth playback without buffering issues. It supports a wide range of video formats and provides an intuitive user interface for easy navigation. With features like personalized recommendations and user-friendly controls. I am committed to continuously improving the app, making it the go-to choice for video streaming.",
    sourceCode: "https://github.com/NueltCodes/VStrim",
    liveSite: "https://v-strim.vercel.app/",
    tags: [
      {
        image: require("../public/html.png").default,
      },
      { image: require("../public/Css.png").default },
      {
        image: require("../public/react.png").default,
      },
      {
        image: require("../public/typescript.png").default,
      },
      {
        image: require("../public/trpc.png").default,
      },
      {
        image: require("../public/nextjs.png").default,
      },
      {
        image: require("../public/tailwindcss.png").default,
      },
      {
        image: require("../public/mysql-logo.png").default,
      },
      {
        image: require("../public/prisma.png").default,
      },
    ],
    imageUrl: Vstrim,
  },
  {
    id: "2",

    title: "Peer",
    description:
      "Engineered a Web platform enabling users to effortlessly book accommodations worldwide. Introduced engaging animations to elevate user experience and the integration of dynamic filter functionalities. Our app makes it easy to plan your next getaway.",
    logins: "test@gmail.com",
    password: "12345678",
    sourceCode: "https://github.com/NueltCodes/peer",
    liveSite: "https://peer-startup.vercel.app/",
    tags: [
      {
        image: require("../public/html.png").default,
      },
      { image: require("../public/Css.png").default },
      {
        image: require("../public/javascript.png").default,
      },
      {
        image: require("../public/react.png").default,
      },
      {
        image: require("../public/typescript.png").default,
      },
      {
        image: require("../public/nextjs.png").default,
      },
      {
        image: require("../public/mongodb.png").default,
      },
      {
        image: require("../public/tailwindcss.png").default,
      },
      {
        image: require("../public/prisma.png").default,
      },
    ],
    imageUrl: Peer,
  },

  {
    id: "3",

    title: "Market",
    description:
      "Market is an online market place which comes with a customer-to-seller chatting system, facilitating uninterrupted communication between buyers and sellers, thereby elevating the shopping experience, Created a secure payment system, including Stripe and PayPal, to provide customers with a hassle-free transaction experience.",
    sourceCode: "https://github.com/NueltCodes/market",
    liveSite: "https://markett.vercel.app/",
    tags: [
      {
        image: require("../public/html.png").default,
      },
      { image: require("../public/Css.png").default },
      {
        image: require("../public/javascript.png").default,
      },
      {
        image: require("../public/react.png").default,
      },
      {
        image: require("../public/mongodb.png").default,
      },
      {
        image: require("../public/redux.png").default,
      },
      {
        image: require("../public/express.png").default,
      },
      {
        image: require("../public/tailwindcss.png").default,
      },
      {
        image: require("../public/socket.io.png").default,
      },
      {
        image: require("../public/paypal.png").default,
      },
      {
        image: require("../public/sttripe.png").default,
      },
    ],
    imageUrl: market,
  },
] as const;

export const skillsData = [
  { name: "Html", image: require("../public/html.png").default },
  { name: "Css", image: require("../public/Css.png").default },
  { name: "Javascript", image: require("../public/javascript.png").default },
  { name: "Trpc", image: require("../public/trpc.png").default },
  { name: "React", image: require("../public/react.png").default },
  { name: "React-native", image: require("../public/react.png").default },
  { name: "Expo", image: require("../public/expo.png").default },
  { name: "Redux", image: require("../public/redux.png").default },
  { name: "Typescript", image: require("../public/typescript.png").default },
  { name: "Next.js", image: require("../public/nextjs.png").default },
  { name: "Tailwindcss", image: require("../public/tailwindcss.png").default },
  { name: "Socket.io", image: require("../public/socket.io.png").default },
  { name: "Mysql", image: require("../public/mysql-logo.png").default },
  { name: "Prisma", image: require("../public/prisma.png").default },
  { name: "Nodejs", image: require("../public/nodejs.png").default },
  { name: "MongoDB", image: require("../public/mongodb.png").default },
  { name: "Firebase", image: require("../public/firebase.png").default },
  { name: "Express", image: require("../public/express.png").default },
  { name: "git", image: require("../public/git.png").default },
  // "HTML",
  // "CSS",
  // "JavaScript",
  // "React",
  // "TypeScript",
  // "Next.js",
  // "Prisma",
  // "React-native",
  // "Node.js",
  // "Git",
  // "Github",
  // "Tailwind css",
  // "React-icons",
  // "Mui",
  // "Next auth",
  // "NOSQL",
  // "MYSQL",
  // "Express",
  // "Redux",
  // "JWT",
  // "Firebase",
  // "Planet scale",
  // "Framer Motion",
] as const;
