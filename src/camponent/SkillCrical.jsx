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

const SkillsCircle = () => {
  return (
    <div className="flex items-center justify-center bg-[#19191C] transform-3d perspective-distant relative h-[550px] rounded-2xl  border-[#51515193] border-solid border-[2px] w-[90%] m-auto mb-10 overflow-hidden">
      <div
        className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-[#111]"
        style={{ animation: "roto 20.2s infinite linear" }}
      >
        {/* Center Figma */}
        <div className="absolute left-1/2 top-1/2 w-[90px] h-[90px] bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xl transform -translate-x-1/2 -translate-y-1/2 z-10 hover:scale-110 shadow-lg shadow-red-600">
          <LuFigma
            size={60}
            className="text-3xl animate-spin [animation-duration:20s] "
          />
        </div>

        {/* Orbit Skills */}
        {skills.map((skill, index) => (
          <div
            key={index}
            className="absolute w-[90px] h-[90px] bg-[#000] text-white rounded-full flex items-center justify-center font-semibold transition-transform hover:scale-110 shadow-md shadow-neutral-800 hover:shadow-blue-950"
            style={{
              top: "50%",
              left: "50%",
              transform: `
                rotate(${skill.angle}deg) 
                translateX(190px) 
                rotate(-${skill.angle}deg)
                translate(-50%, -50%)
               
              `,
            }}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsCircle;
