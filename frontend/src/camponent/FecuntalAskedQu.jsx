import { useEffect, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

function FecuntalAskedQu() {
  let name = 1;
  const [Dropicon, setdropicon] = useState([...Array(5)].fill(false));
  const question = {
    Allquestion: [
      "What services do you offer?",
      "How do I get started with a project?",
      "Can I provide input during the design process?",
      "How long does a typical project take to complete?",
      `What are your rates?`,
    ],
    answer: [
      "I offer a range of design services, including UI/UX design, website design and development, landing page design and build, logo design, and mobile app design.",

      "Getting started is easy! Simply reach out to me through the contact form on my website or via email. We'll discuss your project goals and next steps.",

      "Yes, your input is crucial! We encourage collaboration and will involve you in the design and feedback process via Figma etc .",

      "Project timelines can vary based on complexity and scope. I'll provide a clear estimate and timeline after discussing your project requirements.",

      "My rates vary depending on the type and scope of the project. Please contact me to discuss your project details, and I'll provide a tailored quote.",
    ],
  };
  const handelclick = (index) => {
    setdropicon((prev) => prev.map((item, i) => (i === index ? !item : item)));
  };
  return (
    <>
      <h2
        className={`text-[102px] max-sm:text-4xl max-sm:leading-9 max-sm:pl-5 max-sm:mt-10 mt-15  w-full overflow-hidden whitespace-break-spaces pl-15 text-left text-[#787878] leading-22 tracking-[-3px] font-normal mb-2 font-['Audiowide',"sain-serif"] `}
      >
        FREQUENTLY
      </h2>
      <h2
        className={`text-[102px] max-sm:text-4xl max-sm:leading-9 max-sm:pl-5 w-full overflow-hidden whitespace-break-spaces pl-15 text-left text-[#787878] leading-22 tracking-[-3px] font-normal mb-2 font-['Audiowide',"sain-serif"] `}
      >
        ASKED
      </h2>
      <h2
        className={`text-[102px] max-sm:text-4xl max-sm:leading-9 max-sm:pl-5 w-full overflow-hidden whitespace-break-spaces pl-15 text-left text-[#787878] leading-22 tracking-[-3px] font-normal mb-8 font-['Audiowide',"sain-serif"] `}
      >
        QUESTIONS
      </h2>
      <div
        className={`w-[90%] max-sm:w-[93%] mb-8 m-auto bg-[#1A1A1D] border-2 border-[#27272A] rounded-2xl`}
      >
        {[...Array(5)].map((_, i) => {
          return (
            <div
              className={`w-[90%] mb-10 mt-10  m-auto bg-[#0c0c0d] text-xl  text-[#fffdf2cc] rounded-xl  font-bold flex-wrap font-sans leading-8 p-4 flex justify-between `}
              key={i}
            >
              <p className="max-sm:text-[12px]">{question.Allquestion[i]}</p>
              <button
                onClick={(e) => handelclick(i)}
                className=" p-0 flex justify-end text-5xl max-sm:text-2xl text-end cursor-pointer"
              >
                {Dropicon[i] ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
              </button>
              {Dropicon[i] && (
                <div className="mt-4 text-xl font-normal text-wrap text-[#a2a2a2]">
                  <p>{question.answer[i]}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
export default FecuntalAskedQu;
