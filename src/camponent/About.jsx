import React, { useRef, useState } from "react";
import { Box, Box2 } from "./box";
import { RiArrowDownCircleFill } from "react-icons/ri";
import AboutLink from "./somePageCompnent";
import { NavLink } from "react-router-dom";

const skills = [
  { name: "Re", angle: 0 },
  { name: "Ta", angle: 45 },
  { name: "FL", angle: 90 },
  { name: "Ai", angle: 135 },
  { name: "Ps", angle: 180 },
  { name: "HL", angle: 225 },
  { name: "CS", angle: 270 },
  { name: "JS", angle: 315 },
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
          Fi
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
          className={`block font-[Audiowide] text-[#E5F48C] text-7xl max-sm:text-6xl ml-4 ${
            textCss ? textCss : ""
          }`}
        >
          ABOUT
        </h2>
        <h2
          className={`block font-[Audiowide] text-[#E5F48C] text-7xl ml-4 max-sm:text-6xl ${
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
