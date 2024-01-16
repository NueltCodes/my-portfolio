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
  // {
  //   name: "About",
  //   hash: "#about",
  // },
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
    title: "Full-Stack Developer - YeahsTech Agency",
    location: "Remote",
    description:
      "Developed and implemented numerous software solutions tailored to client needs. In collaboration with my team, developed an innovative offline app for a club. This initiative significantly drove productivity gains to 10X than before, A significant achievement was the design of robust management systems for several clients which foster development to about 55%.These systems increased productivity and introduced measures to prevent any potential malpractices or theft, thereby fortifying the interests of our clients’ companies. Maintained and updated existing applications, ensuring seamless integration.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
   {
    title: "Graphic Design - Obent media",
    location: "Abuja / remote",
    description:
      "I worked as a graphics desginer at a priniting press and later freelanced for a media company remotely.",
    icon: React.createElement(IoLogoDesignernews),
    date: "2020",
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
    // liveVideo: "https://www.tiktok.com/@olanirantobi/video/7257246536151649542",
    info: "To launch the Mobile app below, you must first install Expo Go on an Android device so as to test the app live on your device. Then from the app scan the barcode and you have the access to the mobile app.",

    screenShots: [
      {
        image: require("../public/1.png").default,
      },
      { image: require("../public/2.png").default },
      { image: require("../public/3.png").default },
      {
        image: require("../public/4.png").default,
      },
      {
        image: require("../public/5.png").default,
      },
      {
        image: require("../public/6.png").default,
      },
      {
        image: require("../public/7.png").default,
      },
      {
        image: require("../public/8.png").default,
      },
      {
        image: require("../public/9.png").default,
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
      "Developed and launched Vstrim, a cutting-edge video streaming app that provides users with a wide range of high-quality content. The app supports multiple video formats, ensuring compatibility and accessibility for all users. Implemented an advanced streaming algorithm that ensures smooth playback without buffering issues, thereby enhancing the user experience. The app is designed to adapt to varying network conditions, providing uninterrupted streaming even in low-bandwidth situations.Designed a user-friendly interface with intuitive controls, making it easy for users to navigate the app and find their desired content. The app also includes features like playlists, engagements and viewing history for a more personalized experience.",
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
      "Engineered a Web platform enabling users to effortlessly book accommodations worldwide. Introduced engaging animations to elevate user experience and the integration of dynamic filter functionalities. Implemented a dynamic system where Hosts gets to see the number of traffic their home are getting either from registered users or unregistered users. Peer makes it easy to plan your next getaway.",
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
