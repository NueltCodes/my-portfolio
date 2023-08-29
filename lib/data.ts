import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { IoLogoDesignernews } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import reserveImage from "@/public/Reservationapp1.jpg";
import estoreImage from "@/public/estoreImage.jpg";
import DaaMarketplace from "@/public/DaaMarketplace.jpg";
import adminDashboard from "@/public/portfolio adminMarketPlace.jpg";
import reserveMobileApp from "@/public/mobile-reserve-app.jpg";

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
      "I worked as a graphics desginer at a priniting press and later freelanced for a media company.",
    icon: React.createElement(IoLogoDesignernews),
    date: "2020",
  },
  {
    title: "Full-Stack Developer",
    location: "Remote",
    description:
      "During this role I learnt alot, one of them being re-assigning JWT Tokens to users after redeploying as the domain changes, I led the development of my start-up app, which is an E-store app as you would see in my project section below. This has been a valuable experience that has allowed me to further refine my technical proficiencies and capability in using technical skills to provide services",
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
      "This role presented me with numerous challenges, but I was able to overcome them and successfully create a Reservation Web & Mobile app. The core technologies I used included React, React-native, Next.js, TypeScript, Tailwind css, Prisma, MongoDB, and Firebase. I am currently seeking full-time opportunities to further develop my skills and contribute to exciting projects.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Reservation Mobile App",
    description:
      "Reservation Mobile App is a place to stay and relax on your next getaway? Look no further than our Reservation App! With cool features, our app makes it easy to search for lodging options across the globe and find exactly what you’re looking for. Our advanced filter options allow you to search by country, name, or category, and our cool animations makes the experience even more enjoyable, so you can plan your trip on the go. Discover your next adventure with our Reservation App!",
    sourceCode: "https://github.com/NueltCodes/reservation_mobile_app",
    liveSite:
      "https://expo.dev/%40nueltcodes/reserve_app?serviceType=classic&distribution=expo-go&releaseChannel=default/",

    tags: [
      "React",
      "React-native",
      "react-native-swiper",
      "expo-font",
      "Firebase",
      "Firebase auth",
      "@reduxjs/toolkit",
      "expo-image-picker",
      "lottie-react",
    ],
    imageUrl: reserveMobileApp,
  },
  {
    title: "Reservation App",
    description:
      "Discover the perfect place to stay and relax with our Reservation App. Search for lodging options across the globe and use our advanced filter options to find exactly what you’re looking for. With features similar to Airbnb, our app makes it easy to plan your next getaway.",
    sourceCode: "https://github.com/NueltCodes/reservationApp_startup",
    liveSite: "https://startup-reservation-app.vercel.app/",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwind css",
      "Prisma",
      "MongoDB",
      "NextAuth",
      "Google auth",
      "Github auth",
      "Cloudinary",
      "lottie-react",
    ],
    imageUrl: reserveImage,
  },

  {
    title: "E-Store App with Customer Chat Features",
    description:
      "E-Store is an innovative e-commerce app that allows multiple sellers to create their own stores within the platform. Our app features a customer-to-seller chat system, secure payment options through Stripe and PayPal, and comprehensive admin dashboards for both individual sellers and a universal admin overseeing all seller activity. Shop, sell, and connect with E-Store.",
    sourceCode: "https://github.com/NueltCodes/mernstack_e_store",
    liveSite: "https://e-store-app-tau.vercel.app/",
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind css",
      "Redux",
      "JWT",
      "Socket.io",
      "Stripes",
      "React-icons",
      "Mui",
      "PayPal",
      "lottie-react",
      "NodeMailer",
      "Cloudinary",
    ],
    imageUrl: estoreImage,
  },
  {
    title: "Daa Marketplace",
    description:
      "Discover the latest fashion trends with Daa Marketplace, a clothing e-commerce app that offers a wide selection of clothing in different categories. Our app features advanced filter options, allowing you to easily find the perfect outfit by color, size, and category. Shop for your favorite brands and styles with Daa Marketplace.",
    sourceCode: "https://github.com/NueltCodes/nextjs-ecommerce-marketplace",
    liveSite: "https://nextjs-ecommerce-marketplace-6d9y.vercel.app/",
    tags: [
      "React",
      "Next.js",
      "Typescript",
      "Headless-ui",
      "Prisma",
      "APi's",
      "Stripes",
      "Headless.ui",
      "Tailwind css",
      "Cloudinary",
    ],
    imageUrl: DaaMarketplace,
  },
  {
    title: "Ecomerce Admin App",
    description:
      "Manage your online store with ease using our E-Commerce Admin App. Our app features customizable options and live graphs to help you track sales, products, and orders in real-time. Create and manage products with options for sizes, colors, categories, and billboard images. Our app also allows you to create multiple dashboards for different e-commerce apps, giving you complete control over your online business.",
    sourceCode: "https://github.com/NueltCodes/next13.4-ecommerce-admin",
    liveSite: "https://next13-4-ecommerce-admin-6gly.vercel.app/",
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
      "reChart.js",
      "Tailwind css",
    ],
    imageUrl: adminDashboard,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Next.js",
  "React-native",
  "Node.js",
  "Git",
  "Tailwind css",
  "React-icons",
  "Mui",
  "Prisma",
  "Next auth",
  "MongoDB",
  "Express",
  "Redux",
  "JWT",
  "Firebase",
  "Planet scale",
  "Framer Motion",
] as const;
