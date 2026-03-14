import React, { useRef } from "react";
import { Box } from "./box";
import { RiMailFill, RiTwitterFill, RiWhatsappFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";

function ContantUs() {
  const glowRefs = useRef([null]);
  return (
    <>
      <h2
        className={`text-[72px] max-sm:text-4xl max-sm:leading-9 max-sm:pl-5 max-sm:mt-10 w-full overflow-hidden whitespace-break-spaces pl-15 text-left text-[#505050] leading-16 tracking-[-3px] font-normal mb-5 font-['Audiowide',"sain-serif"] mt-20`}
      >
        CONTACT
      </h2>
      <h2
        className={`text-[72px] max-sm:text-4xl max-sm:leading-9 max-sm:pl-5 w-full overflow-hidden whitespace-break-spaces pl-15 text-left text-[#505050] leading-18 tracking-[-3px] font-normal mb-5 font-['Audiowide',"sain-serif"] `}
      >
        ME
      </h2>
      <div className="w-[90%] m-auto flex gap-5 mb-10">
        <NavLink
          to={"mailto:youremail@gmail.com"}
          target="_blank"
          rel="noopener noreferrer"
          className={"w-[90%]"}
        >
          <Box
            icon={{
              icon: (
                <RiMailFill
                  className="group-hover:text-blue-700 group-hover:bg-transparent transition-all 
          duration-500 group-hover:text-[132px] bg-[#6D6D6F] rounded-[5px] text-9xl text-[#010101]"
                />
              ),
              index: 15,
              glowRefs: glowRefs,
              istext: false,
            }}
          />
        </NavLink>
        <NavLink
          to={"https://wa.me/+916393014836?text=Hii%20Dheeraj%20dwivedi"}
          target="_blank"
          rel="noopener noreferrer"
          className={"w-[90%]"}
        >
          <Box
            icon={{
              icon: (
                <RiWhatsappFill
                  className="group-hover:text-green-600 group-hover:bg-transparent transition-all 
        duration-500  group-hover:text-[132px] bg-[#6D6D6F] rounded-[5px] text-9xl text-[#010101]"
                />
              ),
              index: 16,
              glowRefs: glowRefs,
              istext: false,
            }}
          />
        </NavLink>
      </div>
    </>
  );
}

export default ContantUs;
