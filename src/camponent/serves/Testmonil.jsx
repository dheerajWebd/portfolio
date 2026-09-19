import React, { lazy } from "react";
import { RiStarFill } from "react-icons/ri";
const TestmonilBox = lazy(() =>
  import("../box").then((module) => ({ default: module.TestmonilBox }))
);
const Testmonil = () => {
  return (
    <>
      <h2
        className={`text-[72px] text-right max-sm:text-5xl max-sm:leading-11 max-sm:pr-5 w-full pr-15   overflow-hidden whitespace-break-spaces pl-15  text-[#505050] leading-16 tracking-[-3px] font-normal font-['Audiowide',"sain-serif"] max-sm:mt-[-120px] -mt-20`}
      >
        TESTIMON
      </h2>
      <h2
        className={`text-[72px] max-sm:text-5xl max-sm:leading-11 max-sm:pr-5 pr-15  w-full overflow-hidden whitespace-break-spaces pl-15  text-right text-[#505050] leading-18 tracking-[-3px] font-normal mb-5 font-['Audiowide',"sain-serif"] `}
      >
        IALS
      </h2>
      <div className="w-[90%] m-auto grid grid-cols-3 max-sm:grid-cols-1 max-sm:grid-rows-1 max-sm:gap-y-4 max-md:grid-rows-1 gap-x-10 max-lg:grid-cols-2 max-lg:gap-y-4">
        <TestmonilBox
          contant={{
            work: "Developer",
            name: "Ajay",
            img: " /assets/ajay.webp",
            workdis: "Ajay is a design genius!",
            discription:
              "This is unbelievable. He is too fast and he work with details. I will hire him again.Highly recommend!",
            icon: <RiStarFill className=" text-2xl text-[#E6F48D]" />,
          }}
        />
        <TestmonilBox
          contant={{
            work: "Designer",
            name: "Adarsh",
            img: " /assets/Adarsh.webp",
            workdis: "Adarsh is a design genius!",
            discription:
              "Adarsh was a game-changer for our online store. They designed a websiti that perfectly captures our brand's identity",
            icon: <RiStarFill className=" text-2xl text-[#E6F48D]" />,
          }}
        />
        <TestmonilBox
          contant={{
            work: "Designer",
            name: "Dheeraj dwivedi",
            img: " /assets/dheeraj.webp",
            workdis: "Dheeraj is a design genius!",
            discription:
              "Dheeraj was a game-changer for our online store. They designed a websiti that perfectly captures our brand's identity",
            icon: <RiStarFill className=" text-2xl text-[#E6F48D]" />,
          }}
        />
      </div>
    </>
  );
};

export default Testmonil;
