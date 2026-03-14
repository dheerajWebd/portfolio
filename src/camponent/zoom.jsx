import { useState, useRef, useEffect } from "react";
import { FaArrowAltCircleRight, FaBackspace, FaBackward, FaCross, FaCut, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom";
const MaskEffect = ({ data, img, set, setproject, projectData, setlinks }) => {
  const [pos, setPos] = useState({ x: -999, y: -999 }); // hide initially
  const [isHover, setIsHover] = useState(false); // to toggle overlay

  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
    setPos({ x: -999, y: -999 }); // hide lens
  };
  const hendalclick = (e) => {
    set(true)
    setproject(data)
    setlinks(projectData)
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-110 max-lg:w-[100%] md:w-[110%] max-sm:w-[90%] overflow-hidden m-auto max-sm:h-120 h-100 border-[#51515193] border-2 rounded-xl bg-[#19191C] p-17 flex items-center hover:scale-3d hover:scale-102 hover:shadow-[0_10px_25px_rgba(230,244,141,0.3)] transform-3d ease-in-out duration-500 transition-transform  origin-left justify-center hover:rotate-x-10 hover:rotate-z-1 hover:rotate-y-10 ${data?.css}`}
      style={{
        perspective: "1300px",
        transformStyle: "preserve-3d",
      }}
      onClick={e => (hendalclick(e))}

    >
      {/* Main UI (Image or App) */}
      <img
        src={img}
        alt="App"
        loading="lazy"
        className="w-[100%] max-sm:w-100 max-sm:h-80 rounded-xl z-10 relative"
      />

      {/* Overlay */}
      {isHover && (
        <div
          className="absolute  w-full h-full pointer-events-none z-20 border-[#51515193]  rounded-xl"
          style={{
            backgroundColor: "rgba(10, 10, 0)",
            maskImage: `radial-gradient(circle 100px at ${pos.x}px ${pos.y}px, transparent 20%, black 90%)`,
            WebkitMaskImage: `radial-gradient(circle 120px at ${pos.x}px ${pos.y}px, transparent 20%, black 100%)`,
            transition: "mask-image 0.1s ease",
          }}
        ></div>
      )}
    </div>
  );
};

const BigProject = ({ big, setbig, data, projectData }) => {
  const [thechTools, settechTools] = useState(false);
  const hendalclick = (e) => {
    settechTools(!thechTools);
  };
  if (big == false) return null;
  console.log(projectData);
  return (
    <>
      <div className={`w-[90%] fixed ml-20 max-sm:ml-0 bg-black lg:top-6 top-10 z-40 shadow-2xl `}>
        <div className="w-[90%] max-sm:w-[80%] flex justify-evenly max-sm:mr-20 items-center mt-3.5 ">
          <button className=" cursor-pointer max-sm:mr-10  flex justify-center items-center w-30 border-double rounded-2xl border-cyan-800  border-2  text-white text-3xl mb-2 z-50" onClick={() => setbig(false)}>
            <FaBackspace className="pointer" />
          </button>

          <Link className="cursor-pointer max-sm:mr-2" target="_blank" rel="noopener noreferrer" to={projectData?.githubLink || ""}>
            <button className="cursor-pointer w-50 max-sm:w-10 flex justify-center items-center font-extrabold border-double rounded-xl border-cyan-800 
             border-2  text-white text-3xl mb-2 z-50" >
              <FaGithub />
            </button>
          </Link>
          <Link className="cursor-pointer max-sm:mr-2" target="_blank" rel="noopener noreferrer" to={projectData?.liveLink || ""}>
            <button className="cursor-pointer w-40 max-sm:w-10 max-sm:text-[9px] font-extrabold border-double rounded-xl border-cyan-800  border-2  text-white text-2xl mb-2 z-50" >
              Live Link
            </button>
          </Link>
          <button className="cursor-pointer w-40 max-sm:w-10 max-sm:text-[9px] font-extrabold border-double rounded-xl border-cyan-800  border-2  text-white text-[16px]  mb-2 z-50"
            onClick={hendalclick}
          >
            {thechTools ? "close" : "Tech& Tools"}
            {thechTools &&
              <div className="absolute top-12 bg-black right-17 p-4 rounded-2xl border-cyan-800 border-2">
                <p className="text-white text-[14px]">Tech & Tools Used:</p>
                <p className="text-white text-[14px]">{projectData?.techStack}</p>
              </div>}
          </button>
        </div>

        <img className="w-[90%] rounded-2xl m-auto flex items-center justify-center" src={data} alt="project" />
      </div>
    </>
  )
};
export { MaskEffect, BigProject }
