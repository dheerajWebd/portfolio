import React from "react";
import Adarsh from "../asscts/man1.webp";

function AboutLink() {
  return (
    <div className="w-[90%] m-auto relative h-[500px] rounded-3xl border-2 border-solid border-[#3e3a3a] bg-[#19191C]">
      <h2
        className={`block font-[Audiowide] text-[#E5F48C] text-7xl m-auto max-sm:text-3xl ml-20 max-sm:ml-6 uppercase mt-10 `}
      >
        web developer &rarr; ui/ux designer
      </h2>
      <img
        src={Adarsh}
        alt="my img"
        loading="lazy"
        className="h-[82%] absolute -bottom-43 right-83.5 max-sm:right-7 w-auto object-cover rounded-3xl"
      />
    </div>
  );
}
export default AboutLink;

export function Exprience() {
  return (
    <>
      <h2
        className={`text-[72px]  w-full max-sm:text-5xl overflow-hidden whitespace-break-spaces pr-15 text-right text-[#e5f48c] leading-19 max-sm:leading-9 max-sm:pr-5 tracking-[-3px] font-normal mb-5 font-['Audiowide',"sain-serif"]`}
      >
        EXPERIEN
      </h2>
      <h2
        className={`text-[72px]  w-full max-sm:text-5xl overflow-hidden whitespace-break-spaces pr-15 text-right text-[#e5f48c] leading-19 max-sm:leading-9 max-sm:pr-5 tracking-[-3px] font-normal mb-5 font-['Audiowide',"sain-serif"]`}
      >
        CES
      </h2>

      <div className="grid w-full text-white mb-12 m-auto">
        <div className="grid w-full grid-cols-1 grid-rows-1 mb-10 text-white">
          <div className="w-[90%] group m-auto p-3 pl-6 bg-[#212127] rounded-3xl border-2 border-solid border-[#3e3a3a]">
            <p className="w-full group-hover:text-[#E5F48C] transition-colors duration-750  text-2xl font-bold text-white">
              Senior UI/UX Designer & web dev
            </p>
            <p className="w-full group-hover:text-[#e4f48cd2] transition-colors duration-750 text-xl">
              Creative Solutions Agency
            </p>
            <p className="w-full mb-6 text-xl text-[#fffdf2b3]">
              Aug 2024 - Present
            </p>
            <p className="w-full mb-6 text-xl text-[#fffdf2b3]">
              Led a dheeraj team of designers in creating cutting-edge user
              interfaces and seamless user experiences for web applications.
              Spearheaded user research, wireframing, prototyping, and
              collaborated closely with developers to bring designs to life.
            </p>
          </div>
        </div>

        <div className="grid w-[90%] m-auto min-lg:gap-1 min-sm:gap-y-8 min-md:grid-cols-2 min-lg:grid-cols-3 grid-cols-1">
          <div className="w-[90%] m-auto p-3 pl-6 bg-[#212127] rounded-3xl border border-[#c1c2c3]/20">
            <div className="w-full h-fit bg-[#212127] rounded-2xl p-5 ">
              <p className="w-full text-2xl font-bold text-[#e3e2e2]">
                UX Researcher
              </p>
              <p className="w-full text-[#f0d6d6ef] text-xl capitalize">
                InnovateUX Labs
              </p>
              <p className="w-full mb-6 text-xl text-[#fffdf2b3]">
                Learning in 2024{" "}
              </p>
              <p className="w-full mb-6  pb-2 text-[18px]/6 font-medium font-serif text-[#e1e1e1b3]">
                Conducted in-depth user research, including interviews, surveys,
                and usability testing, to gather valuable insights that informed
                the design and development.
              </p>
            </div>
          </div>

          <div className="w-[90%] m-auto p-3 pl-6 bg-[#212127] rounded-3xl border shadow-[0px_0px_60px_0Px_#c1c1c1]/20  border-[#c1c2c3]/40 group transform scale-105 -translate-y-2 ">
            <div className="w-full h-fit bg-[#212127] rounded-2xl p-5 ">
              <p className="w-full text-2xl/5 mb-1 font-bold text-[#e3e2e2] group-hover:text-[#E5F48C]">
                MERN Fullstack Devlaper
              </p>
              <p className="w-full text-[#f0d6d6ef] text-xl capitalize group-hover:text-[#e4f48cd9]">
                Digital Innovations Inc.
              </p>
              <p className="w-full mb-6 text-xl text-[#fffdf2b3]">
                2024 - 2025{" "}
              </p>
              <p className="w-full mb-6  pb-2 text-[18px]/6 font-medium font-serif text-[#e1e1e1b3]">
                Crafted visually stunning and responsive websites for a diverse
                range of clients, ensuring each project exceeded design
                expectations and user needs.
              </p>
            </div>
          </div>

          <div className="w-[90%] m-auto p-3 pl-6 bg-[#212127] rounded-3xl border border-[#c1c2c3]/20">
            <div className="w-full h-fit bg-[#212127] rounded-2xl p-5 ">
              <p className="w-full text-2xl font-bold text-[#e3e2e2]">
                UX Researcher
              </p>
              <p className="w-full text-[#f0d6d6ef] text-xl capitalize">
                InnovateUX Labs
              </p>
              <p className="w-full mb-6 text-xl text-[#fffdf2b3]">
                Learning in 2024{" "}
              </p>
              <p className="w-full mb-6  pb-2 text-[18px]/6 font-medium font-serif text-[#e1e1e1b3]">
                Conducted in-depth user research, including interviews, surveys,
                and usability testing, to gather valuable insights that informed
                the design and development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
