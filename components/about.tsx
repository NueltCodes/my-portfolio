"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import AnimateInfo from "@/public/info.json";
import Lottie from "lottie-react";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-20 flex flex-col items-center max-w-[45rem] text-center leading-8 sm:mb-28 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>
        <div className="bg-slate-300 rounded-full w-[200px]">
          {" "}
          <Lottie
            animationData={AnimateInfo}
            loop
            autoplay
            style={{ height: 100, width: 200 }}
          />
        </div>
      </SectionHeading>
      <div className="max-w-[42rem] font-semibold text-[25px] text-center text-red-500">
        Note:{" "}
        <span className="font-medium text-lg dark:text-gray-100 text-gray-950">
          {" "}
          To launch the <b>Mobile app</b> below, you must first install{" "}
          <b>Expo Go</b> on an Android device so as to test the app live on your
          device. Then, scan the barcode from the app below on Expo Go to
          install the app.
        </span>
      </div>
    </motion.section>
  );
}
