import Link from "next/link";
import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { HiDownload } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

const Footer = () => {
  return (
    <footer className=" mb-10 px-4 text-center text-gray-500">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
        <div className="flex gap-6 sm:gap-16 mb-4">
          <Link
            href="mailto:emmanuetolaniran@gmail.com"
            className="text-[25px] sm:text-[30px] text-gray-500 flex items-center gap-2  rounded-full transition cursor-pointer hover:text-[#337ab7] dark:hover:text-[#337ab7] dark:text-white/60"
          >
            <GrMail />
          </Link>

          <a
            className="text-[25px] sm:text-[30px] text-gray-500 flex items-center gap-2  rounded-full transition cursor-pointer hover:text-[#337ab7] dark:hover:text-[#337ab7] dark:text-white/60"
            href="https://www.linkedin.com/in/emmanuet/"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="text-[25px] sm:text-[30px] text-gray-500 flex items-center gap-2  rounded-full transition cursor-pointer hover:text-[#337ab7] dark:hover:text-[#337ab7] dark:text-white/60"
            href="https://github.com/NueltCodes"
            target="_blank"
          >
            <SiGithub />
          </a>
        </div>
      </div>

      <small className="mb-2 text-xs block">
        &copy; 2023 Emmanuet. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website</span> built with
        React & Next.js (App Router & Server Actions), Typesvript, Tailwind css,
        Framer Motion, React Email & Resend, Vercel hosting
      </p>
    </footer>
  );
};

export default Footer;
