import React, { lazy, useRef, useState } from "react";
import { RiArrowDownCircleFill } from "react-icons/ri";

import { NavLink } from "react-router-dom";
import {
  DiHtml5,
  DiJavascript,
  DiMongodb,
  DiNodejs,
  DiReact,
  DiRedis,
} from "react-icons/di";
import { GrCss3 } from "react-icons/gr";
import { Heart } from "lucide-react";
import { MdJavascript } from "react-icons/md";
import { SiExpress, SiRedis, SiTailwindcss } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { LuFigma } from "react-icons/lu";
import { Exprience } from "./somePageCompnent";

const SkillsCircle = lazy(() => import("./SkillCrical"));
const Box = lazy(() =>
  import("./box").then((module) => ({
    default: module.Box,
  }))
);
const Box2 = lazy(() =>
  import("./box").then((module) => ({
    default: module.Box2,
  }))
);
const AboutLink = lazy(() => import("./somePageCompnent"));
const skills = [
  {
    name: (
      <DiHtml5 className="text-3xl animate-spin [animation-duration:20s]  text-yellow-300" />
    ),
    angle: 0,
  },
  {
    name: (
      <GrCss3 className="text-3xl text-blue-300 animate-spin [animation-duration:20s]" />
    ),
    angle: 36,
  },
  {
    name: (
      <MdJavascript
        size={100}
        className="text-3xl animate-spin [animation-duration:20s]  text-yellow-300"
      />
    ),
    angle: 36 * 2,
  },
  {
    name: (
      <DiReact
        size={100}
        className="tetext-3xl animate-spin [animation-duration:20s]  text-blue-500"
      />
    ),
    angle: 36 * 3,
  },
  {
    name: (
      <DiNodejs
        size={70}
        className="tetext-3xl animate-spin [animation-duration:20s]  text-yellow-300"
      />
    ),
    angle: 36 * 4,
  },
  {
    name: (
      <SiExpress
        size={60}
        className="tetext-3xl animate-spin [animation-duration:20s]  text-yellow-300"
      />
    ),
    angle: 36 * 5,
  },
  {
    name: (
      <DiMongodb
        size={60}
        className="tetext-3xl animate-spin [animation-duration:20s]  text-green-400"
      />
    ),
    angle: 36 * 6,
  },
  {
    name: (
      <FaDocker
        size={60}
        className="tetext-3xl animate-spin [animation-duration:20s]  text-blue-500"
      />
    ),
    angle: 36 * 7,
  },
  {
    name: (
      <DiRedis
        size={60}
        className="tetext-3xl animate-spin [animation-duration:20s]  text-red-500"
      />
    ),
    angle: 36 * 8,
  },
  {
    name: (
      <SiTailwindcss
        size={60}
        className="tetext-3xl animate-spin [animation-duration:20s]  text-blue-500"
      />
    ),
    angle: 36 * 9,
  },
];

const About = ({ Extra, textCss }) => {
  const glowRefs = useRef([null]);
  return (
    <>
      <div className=" w-full h-[100%] mt mb-10">
        {Extra && (
          <>
            <AboutLink />
          </>
        )}
        <h2
          className={`block font-[Audiowide] text-[#E5F48C] text-7xl max-sm:text-6xl ml-4 pl-15 max-sm:pl-5 ${
            textCss ? textCss : ""
          }`}
        >
          ABOUT
        </h2>
        <h2
          className={`block font-[Audiowide] text-[#E5F48C] text-7xl ml-4 max-sm:text-6xl pl-15 max-sm:pl-5 ${
            textCss ? textCss : ""
          }`}
        >
          ME
        </h2>
        {/* ye exprience section hai */}

        <div className="w-[90%] max-w-6xl mx-auto my-10 h-auto max-sm:block flex gap-5 m-4">
          <Box
            icon={{
              color: "#e5f48c",
              icon: false,
              index: 4,
              glowRefs: glowRefs,
              text: "0.6",
              text2: "Years of Experience",
              font: ["Audiowide", "sans-serif"],
              driction: " flex-col",
              classPorp: "text-white text-3xl block",
            }}
          />
          <Box
            icon={{
              color: "#e5f48c",
              driction: " flex-col",
              font: ["Audiowide", "sans-serif"],
              icon: false,
              index: 5,
              text2: "Satisfied Customers",
              glowRefs: glowRefs,
              classPorp: "text-white text-3xl block ",
              text: "1",
            }}
          />
        </div>
          <Exprience />

        <SkillsCircle />
        <div className="w-[90%] m-auto ">
          <Box2
            icon={{
              color: "#e5f48c",
              driction: " flex-row",
              discription:
                "Hello, I'm Dheeraj Dwivedi, a UI/UX designer with a passion for creating beautiful and user-friendly digital experiences. Proficient in Figma, Framer, and Tailwind, I specialize in empathetic design, ensuring that every interface I craft not only looks great but also feels intuitive.",
              classdis:
                "text-2xl max-sm:text-[11px] w-150 max-sm:mr-2 max-sm:text-[#fffdf2b3] text-[#fffdf2b3] font-normal leading-[20px] p-2 font-serif",
              font: ["Audiowide", "sans-serif"],
              index: 6,
              glowRefs: glowRefs,
              text2: "About Me",
              classabout: "text-3xl max-sm:text-[20px] mr-20 max-sm:ml-4 mb-9",
              text: "1",
            }}
          />
        </div>
        <div className="w-[90%] m-auto ">
          <NavLink to={"/contant"}>
            <Box
              icon={{
                color: "#e5f48c",
                driction: " flex-row justify-between",
                icon: (
                  <RiArrowDownCircleFill
                    className="group-hover:text-white group-hover:text-[132px] 
                      rounded-full group-hover:bg-transparent transition-all duration-500 text-9xl  overflow-hidden  text-[#6a6a6a] absolute right-2 bottom-2 justify-between"
                  />
                ),
                font: ["Audiowid", "sans-serif"],
                index: 7,
                glowRefs: glowRefs,
                classabout: "text-3xl mr-20 mb-9",
                text: "Let'S Tolks ",
                css: " block text-left w-20 absolute whitespace-break-spaces break-word left-7 top-7 text-wrap text-5xl font-bold text-white",
                istext: false,
              }}
              className="invisible scroll-animation"
            />
          </NavLink>
        </div>
      </div>
    </>
  );
};
export default About;
