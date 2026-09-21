import React from "react";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="w-[90%] relative m-auto text-amber-100 flex p-6 rounded-2xl mb-0 gap-10 max-md:gap-5">
        <div className="grow-[0.7]">
          <p
            className={`text-right m-2 text-[102px] max-sm:text-2xl max-sm:leading-15 max-md:text-3xl text-[#E5F48C] leading-26 font-['Audiowide',"sain-serif"]`}
          >
            DHEERAJ
          </p>
          <p
            className={`text-right m-2 text-[102px] max-sm:text-2xl max-sm:leading-15 max-md:text-3xl text-[#E5F48C] leading-26 font-['Audiowide',"sain-serif"]`}
          >
            PORT
          </p>
          <p
            className={`text-right m-2 text-[102px] max-sm:text-2xl max-sm:leading-15 max-md:text-3xl text-[#E5F48C] leading-26 font-['Audiowide',"sain-serif"]`}
          >
            FOLIO
          </p>
          <p className="mt-16 max-sm:mt-2 max-sm:mb-0 -mb-6 text-xl max-md:mb-0 max-md:mt-2 max-sm:text-[15px] max-md-ml-10 text-right text-white">
            copyright@2025 Dheeraj dwivedi All Right Reserved
          </p>
        </div>
        <ul>
          <li className="text-4xl max-md:text-3xl max-md:mt-10  max-sm:text-2xl max-sm:mb-2 text-right cursor-pointer mb-7 ">
            {" "}
            <NavLink
              to={"/"}
              end
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              home
            </NavLink>
          </li>
          <li className="text-4xl max-md:text-3xl max-md:mb-5  max-sm:text-2xl max-sm:mb-2 text-right cursor-pointer mb-7 ">
            {" "}
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              About
            </NavLink>
          </li>
          <li className="text-4xl max-md:text-3xl max-md:mb-5  max-sm:text-2xl max-sm:mb-2 text-right cursor-pointer mb-7 ">
            <NavLink
              to={"/serves"}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              Serves
            </NavLink>
          </li>
          <li className="text-4xl max-md:text-3xl max-md:mb-5  max-sm:text-2xl max-sm:mb-2 text-right cursor-pointer mb-7 ">
            {" "}
            <NavLink
              to={"/mywark"}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              Work
            </NavLink>
          </li>
          <li className="text-4xl max-md:text-3xl max-md:mb-5  max-sm:text-2xl max-sm:mb-2 text-right cursor-pointer mb-7 ">
            {" "}
            <NavLink
              to={"/contant"}
              className={({ isActive }) =>
                isActive ? "text-white" : "text-[#E5F48C]"
              }
            >
              contant
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Footer;
