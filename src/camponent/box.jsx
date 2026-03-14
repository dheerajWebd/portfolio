import {
  Curser,
  handleMouseEnter2,
  handleMouseleave2,
  handleMouseMove,
} from "./somefunction";
const Box = ({ icon = false, className }) => {
  const color = icon?.color || "";
  let classPorp = icon?.classPorp || "";
  let fontstack = icon.font ? icon.font.join("', '") : "";

  return (
    <>
      <div
        className={`${className}  group relative w-full max-sm:mb-4 h-70 text-[${color}] bg-[#19191C] text-9xl gap-y-2.5 border-[#51515193] border-2 rounded-xl flex items-center decoration-current justify-center overflow-hidden  ${icon?.driction}`}
        onMouseMove={(e) => handleMouseMove(icon?.index, e, icon?.glowRefs)}
        onMouseEnter={(e) => handleMouseEnter2(icon?.index, icon?.glowRefs)}
        onMouseLeave={(e) => handleMouseleave2(icon?.index, icon?.glowRefs)}
      >
        <Curser ref={(el) => (icon.glowRefs.current[icon.index] = el)} />
        {icon?.icon ? (
          icon?.icon
        ) : (
          <p
            className={`block font-extrabold font-['${fontstack}'] ${icon?.newClass}`}
          >
            {icon?.text}
          </p>
        )}
        <p className={`${classPorp} ${fontstack}`}>
          {icon?.icon ? "" : icon?.text2}
        </p>

        {icon?.istext === false ? (
          <p
            className={`font-extrabold font-['${fontstack}'] ${icon?.newClass} ${icon?.css}`}
          >
            {icon?.text}
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
const Box2 = ({ icon = false }) => {
  let color = icon?.color || "";
  let classPorp = icon?.classPorp || "";
  let fontstack = icon.font ? icon.font.join("', '") : "";

  return (
    <>
      <div
        className={`group relative w-full mb-10 h-60 text-[${color}] bg-[#19191C] text-9xl ${icon?.driction} gap-y-2.5 border-[#51515193] border-2 rounded-xl flex items-center decoration-current justify-center overflow-hidden `}
        onMouseMove={(e) => handleMouseMove(icon?.index, e, icon?.glowRefs)}
        onMouseEnter={(e) => handleMouseEnter2(icon?.index, icon?.glowRefs)}
        onMouseLeave={(e) => handleMouseleave2(icon?.index, icon?.glowRefs)}
      >
        <Curser ref={(el) => (icon.glowRefs.current[icon.index] = el)} />
        <div>
          <p className="max-sm:text-5xl max-sm:ml-6">{icon.text}</p>
          <p className={`${icon.classabout}`}>{icon.text2}</p>
        </div>
        <div className={`${icon.classdis}`}>{icon.discription}</div>
      </div>
    </>
  );
};
const ServesBox = ({ icon }) => {
  return (
    <>
      <div
        className={`group relative  mb-10  text-[${icon?.color}] bg-[#19191C] text-9xl gap-y-2.5 border-[#51515193] border-2 rounded-xl overflow-hidden 
        ${icon?.boxcss}
    `}
        onMouseMove={(e) => handleMouseMove(icon?.index, e, icon?.glowRefs)}
        onMouseEnter={(e) => handleMouseEnter2(icon?.index, icon?.glowRefs)}
        onMouseLeave={(e) => handleMouseleave2(icon?.index, icon?.glowRefs)}
      >
        <Curser ref={(el) => (icon.glowRefs.current[icon?.index] = el)} />
        {icon?.contant[0]}
        <p className={`${icon?.contantCss[1]} max-sm:text-3xl`}>
          {icon?.contant[1]}
        </p>
        <p className={`${icon?.contantCss[2]} max-sm:text-[14px]`}>
          {icon?.contant[2]}
        </p>
      </div>
    </>
  );
};
function TestmonilBox({ contant }) {
  const img = contant?.img;
  return (
    <>
      <div
        className={`group relative w-65 max-sm:w-11/12 max-lg:w-[105%] h-65 bg-[#19191C] text-9xl p-2 border-[#51515193] border-2 rounded-xl overflow-hidden mr-7 max-sm:ml-4 transition-transform duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(230,244,141,0.3)]`}
      >
        <div className="top relative w-[100%] flex gap-0 ">
          <div
            className={`w-16 h-16 rounded-full border-4 border-b-blue-950 bg-center bg-cover bg-no-repeat`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className="ml-5  w-20 ">
            <p className="text-xl text-white text-nowrap ">{contant?.name}</p>
            <p className="text-[15px]  text-gray-300 font-serif">
              {contant?.work}
            </p>
          </div>
        </div>
        <div className="mt-3 w-full">
          <p className="text-[18px] font-medium text-white">
            {contant?.workdis}
          </p>
          <p className="text-[18px] font-normal font-serif text-gray-400 mt-4">
            {contant?.discription}
          </p>
          <div className="flex w-full gap-3 mt-5">
            {contant?.icon}
            {contant?.icon}
            {contant?.icon}
            {contant?.icon}
            {contant?.icon}
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";

const AutoFlipCard = ({ frontContent, backContent, flipInterval = 3000 }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, flipInterval); // flip every X milliseconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [flipInterval]);

  return (
    <div className="group w-[260px] h-[320px] [perspective:1000px]">
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full bg-[#19191C] text-white rounded-xl border-2 border-[#51515193] p-4 [backface-visibility:hidden] flex items-center justify-center">
          {frontContent}
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full bg-[#E6F48D] text-black rounded-xl p-4 rotate-y-180 [backface-visibility:hidden] flex items-center justify-center">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export { Box, Box2, ServesBox, TestmonilBox, AutoFlipCard };
