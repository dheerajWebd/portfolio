import React, { lazy, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import { FaArrowAltCircleRight, FaFileDownload } from "react-icons/fa";
import {
  RiDownload2Line,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
} from "react-icons/ri";
import mean2 from "../asscts/mean2.webp";
import man1 from "../asscts/man1.webp";
const Box = lazy(() =>
  import("./box").then((module) => ({ default: module.Box }))
);
import { Mediahook } from "../responsive hook/midea";

const Main = () => {
  const imgRef = useRef(null);
  const glowRefs = useRef([null]);
  let isMobile = Mediahook("720px");

  const handleMouseEnter = () => {
    if (imgRef.current) {
      imgRef.current.src = man1;
    }
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.src = mean2;
    }
  };
  const icons = [
    {
      icon: (
        <RiLinkedinFill
          className="group-hover:text-blue-500 group-hover:text-[132px] 
        rounded-[5px] group-hover:bg-transparent transition-all duration-500 bg-[#6D6D6F]  text-9xl text-[#010101]"
        />
      ),
    },
    {
      icon: (
        <RiInstagramFill
          className="group-hover:text-pink-700  group-hover:bg-transparent transition-all
         duration-500  group-hover:text-[132px] bg-[#6D6D6F] rounded-[5px] text-9xl text-[#010101]"
        />
      ),
    },
    {
      icon: (
        <RiFacebookFill
          className="group-hover:text-blue-700  group-hover:bg-transparent transition-all 
        duration-500  group-hover:text-[132px] bg-[#6D6D6F] rounded-[5px] text-9xl text-[#010101]"
        />
      ),
    },
  ];

  return (
    <main className="w-screen font-[Audiowide] mb-2 text-white bg-[#161618] min-h-screen">
      <div className="relative m-auto mt-10 rounded-xl h-110 p-6 bg-[#19191C] border border-[#6161615f] text-[#e5f48c] text-right text-5xl font-extrabold md:leading-20 md:text-8xl w-10/12 max-sm:w-[94%] max-sm:text-4xl max-sm:h-66 ">
        <p>DHEERAJ</p>
        <p>WEB DEV</p>
        <p>IN INDIA</p>
        <button className="text-xl text-[#282828] absolute ml-60 text-center bg-[#e9ff6b] block cursor-pointer p-3 border rounded-4xl hover:skew-6 hover:origin-center active:shadow-[inset_2px_0px_10px_0px_red,2px_0px_8px_0px_yellow] active:scale-[0.9] max-sm:ml-4 max-sm:text-[10px] md:ml-35">
          <RiDownload2Line className="inline mr-1.5 text-1xl" />
          <a href="/assets/Dhiraj_Kumar_Resume.pdf" download>
            Resume
          </a>
        </button>
        <p>2025</p>
      </div>

      <div className="w-[90%] max-w-6xl mx-auto my-10 grid-cols-2 grid max-sm:grid-cols-1 grid-rows-1 max-sm:grid-rows-1 md:gap-3 gap-4 max-sm:gap-y-5 gap-y-px ">
        {isMobile ? (
          ""
        ) : (
          <NavLink
            to={"https://share.google/MqFC02p8Yr925somY"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              icon={{
                icon: icons[0].icon,
                index: 0,
                glowRefs: glowRefs,
                istext: false,
              }}
            />
          </NavLink>
        )}
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative  h-70 w-full bg-[#C2B5F5] text-black p-4 text-3xl border-[#51515193] border-2 font-serif rounded-[10px] hover:text-2xl hover:bg-white hover:text-[#a8a1c1]"
        >
          <img
            ref={imgRef}
            src={mean2}
            alt="main png img"
            loading="lazy"
            className="absolute z-10 w-2/4 -top-57 right-7  max-sm:w-2/3 max-sm-top-50 max-sm-right-11 md:top-[-130px]"
          />
          <p className="text-7xl">Let's</p> <p className="text-7xl">Talk</p>
          <NavLink to={"/contant"}>
            <button className="absolute text-gray-800 right-2 cursor-pointer bottom-2 text-9xl">
              <FaArrowAltCircleRight className="cursor-pointer" />
            </button>
          </NavLink>
        </div>
        {isMobile ? (
          <NavLink
            to={"https://share.google/MqFC02p8Yr925somY"}
            loading="lazy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Box
              icon={{
                icon: icons[0].icon,
                index: 0,
                glowRefs: glowRefs,
                istext: false,
              }}
            />
          </NavLink>
        ) : (
          ""
        )}
        <NavLink
          to={
            "https://www.instagram.com/dheerajdwivedi141?utm_source=qr&igsh=MTV4aW85aDFuc3Bydg=="
          }
          target="_blank"
          rel="noopener noreferrer"
          loading="lazy"
        >
          <Box
            icon={{
              icon: icons[1].icon,
              index: 1,
              glowRefs: glowRefs,
              istext: false,
            }}
          />
        </NavLink>
        <NavLink
          to={"https://www.facebook.com/dheeraj.dwivedi.104"}
          target="_blank"
          rel="noopener noreferrer"
          loading="lazy"
        >
          <Box
            icon={{
              icon: icons[2].icon,
              index: 2,
              glowRefs: glowRefs,
              istext: false,
            }}
          />
        </NavLink>
      </div>
    </main>
  );
};

export default Main;

/* 
| 🎯 **CSS Property**            | ✅ **Tailwind Class**                                        | 🔎 **Explanation**                    |
| ------------------------------ | ----------------------------------------------------------- | ------------------------------------- |
| `font-family`                  | `font-sans` / `font-serif` / `font-mono`                    | Font family सेट करता है               |
| `font-size`                    | `text-xs` to `text-9xl` / `text-[32px]`                     | टेक्स्ट का size सेट करता है           |
| `font-weight`                  | `font-thin` to `font-black` / `font-bold`                   | Font की मोटाई                         |
| `font-style`                   | `italic` / `not-italic`                                     | Italic या normal font                 |
| `line-height`                  | `leading-none` to `leading-loose` / `leading-[1.5]`         | लाइन स्पेसिंग                         |
| `letter-spacing`               | `tracking-tight` / `tracking-wide` / `tracking-[1px]`       | अक्षरों के बीच spacing                |
| `text-align`                   | `text-left` / `text-center` / `text-right` / `text-justify` | टेक्स्ट align करना                    |
| `text-transform`               | `uppercase` / `lowercase` / `capitalize`                    | टेक्स्ट कैपिटलाइज                     |
| `text-decoration`              | `underline` / `line-through` / `no-underline`               | underline या strike-through           |
| `text-indent`                  | `indent-4` / `indent-[20px]`                                | पैराग्राफ इंडेंटेशन                   |
| `color`                        | `text-red-500` / `text-[#222]`                              | टेक्स्ट का कलर                        |
| `text-shadow` *(custom)*       | (Tailwind में built-in नहीं)                                | Custom class via plugin               |
| `white-space`                  | `whitespace-normal` / `nowrap` / `pre-line`                 | लाइन ब्रेक्स कैसे हों                 |
| `overflow-wrap` / `word-break` | `break-words` / `break-all`                                 | शब्द टूटें या नहीं                    |
| `text-overflow`                | `truncate`                                                  | लंबा text कटे और `...` दिखे           |
| `vertical-align` (SVG/inline)  | `align-middle` / `align-top` / `align-bottom`               | Inline elements के लिए vertical align |
| `user-select`                  | `select-none` / `select-text` / `select-all`                | Text को select करने की permission     |
| `pointer-events`               | `pointer-events-none` / `pointer-events-auto`               | क्लिक allow या block                  |
| `text-anchor` (SVG only)       | `textAnchor="middle"` (attribute)                           | SVG text alignment                    |
| `dominant-baseline` (SVG)      | `dominantBaseline="middle"`                                 | SVG में vertical alignment            |

*/
