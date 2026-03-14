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
// function Exprience() {
//   return (
//   <>
//       <h2
//         className={`text-[72px] w-20 ml-20 whitespace-break-spaces pr-15 text-[#8d8e8a] leading-19 tracking-[-3px] mt-15 font-normal font-['Audiowide',"sain-serif"] `}
//       >
//         EXPERIEN CES
//       </h2>
//       <div className="grid w-full text-white">
//        <div className="grid w-full grid-cols-1 grid-rows-1 mb-10 text-white">
//           <div className="w-[90%] m-auto p-3 pl-6 bg-[#212127] rounded-3xl border-2 border-solid border-[#3e3a3a]">
//             <p className="w-full text-2xl font-bold text-white">
//               Senior UI/UX Designer & web dev
//             </p>
//             <p className="w-full text-xl">Creative Solutions Agency</p>
//             <p className="w-full mb-6 text-xl text-[#fffdf2b3]">
//               Aug 2024 - Present
//             </p>
//             <p className="w-full mb-6 text-xl text-[#fffdf2b3]">
//               Led a dheeraj team of designers in creating cutting-edge user
//               interfaces and seamless user experiences for web applications.
//               Spearheaded user research, wireframing, prototyping, and
//               collaborated closely with developers to bring designs to life.
//             </p>
//           </div>
//         </div>

//         <div className="grid w-[90%] m-auto grid-cols-3">
//          <div fccc7className="w-[90%] m-auto p-3 pl-6 bg-[#21217] rounded-3xl c">
//           <div className="w-70 h-70 bg-[#212127] rounded-2xl p-5 ">
//             <p>UX fResearcher</p>
//             <p>InnovateUX Labs</p>
//             <p>Learning in 2024 </p>
//             <p>
//               Conducted in-depth user research, including interviews, surveys,
//               and usability testing, to gather valuable insights that informed
//               the design and development.
//             </p>
//           </div>
//           <div className="w-[90%] m-auto p-3 pl-6 bg-[#212127] rounded-3xl c">
//           <div className="w-70 h-70 bg-[#212127] rounded-2xl p-5 ">
//             <p>Lead Web Designer</p>
//             <p>Digital Innovations Inc.</p>
//             <p>2024 - 2025 </p>
//             <p>
//               Crafted visually stunning and responsive websites for a diverse
//               range of clients, ensuring each project exceeded design
//               expectations and user needs.
//             </p>
//           </div>
//           <div className ="w-[90%] m-auto p-3 pl-6 bg-[#212127] rounded-3xl c">
//           <div className ="w-70 h-70 bg-[#212127] rounded-2xl p-5 ">
//             <p>UX Researcher</p>
//             <p>InnovateUX Labs</p>
//             <p>Learning in 2024 </p>
//             <p>
//               Conducted in-depth user research, including interviews, surveys,
//               and usability testing, to gather valuable insights that informed
//               the design and development.
//             </p>
//           </div>
//         </div>

//       </div>
//     </>
//   );
// }
