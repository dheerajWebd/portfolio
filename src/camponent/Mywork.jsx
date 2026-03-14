import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MaskEffect, BigProject } from "./zoom";
const My_work = () => {
  const reff = useRef(null);
  const [pos, setpos] = useState({ x: 0, y: 0 });
  const [big, setbig] = useState(false);
  const [project, setproject] = useState(false);
  const [prjectLinks, setprjectLinks] = useState(false);
  const handleMouseMove1 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setpos({ x: e.clientX - rect.left - 30, y: e.clientY - rect.top - 30 });
    console.log(pos.x, e.currentTarget.getBoundingClientRect());
  };
  // import
  return (
    <>
      <h2
        className={`text-[72px] mt-15 max-sm:text-6xl max-sm:pl-5 w-full overflow-hidden whitespace-break-spaces pl-15 text-left text-[#f1fb87] leading-16 tracking-[-3px] font-normal mb-5 font-['Audiowide',"sain-serif"] `}
      >
        MY
      </h2>
      <h2
        className={`text-[72px] w-full max-sm:text-6xl max-sm:pl-5 overflow-hidden whitespace-break-spaces pl-15 text-left text-[#f1fb87] leading-16 tracking-[-3px] font-normal mb-5 font-['Audiowide',"sain-serif"] `}
      >
        WORK
      </h2>

      <BigProject
        big={big}
        setbig={setbig}
        data={project}
        projectData={prjectLinks}
      />
      <div className={`w-[90%] m-auto grid gap-15 max-sm:gap-y-5 `}>
        <div
          className={`grid grid-cols-2  max-sm:grid-cols-1 gap-17 max-sm:gap-y-5 `}
        >
          <MaskEffect
            img="/assets/fur.webp"
            set={setbig}
            data={" /assets/fur.webp"}
            setproject={setproject}
            setlinks={setprjectLinks}
            projectData={{
              liveLink: "https://dheeraj087.github.io/weather-app/",
              githubLink: "https://github.com/dheeraj087/weather-app",
              techStack: "React, Tailwind CSS, JavaScript, API, etc",
            }}
          />

          <MaskEffect
            img=" /assets/desiner.webp"
            set={setbig}
            data={" /assets/desiner.webp"}
            setproject={setproject}
            setlinks={setprjectLinks}
            projectData={{
              liveLink:
                "https://dheeraj087.github.io/Video-editing-portfolio-/",
              githubLink:
                "https://github.com/dheeraj087/Video-editing-portfolio-",
              techStack: "HTML, CSS, JavaScript, etc",
            }}
          />
        </div>

        <div
          className={`grid grid-cols-2 max-sm:grid-cols-1 gap-17 max-sm:gap-y-5`}
        >
          <MaskEffect
            img=" /assets/buld.webp"
            set={setbig}
            data={" /assets/buld.webp"}
            setproject={setproject}
            setlinks={setprjectLinks}
            projectData={{
              liveLink: "https://dheeraj087.github.io/todo-project-/",
              githubLink: "https://github.com/dheeraj087/todo-project-",
              techStack: "HTML, CSS, JavaScript, etc",
            }}
          />

          <MaskEffect
            img=" /assets/images.webp"
            set={setbig}
            data={" /assets/images.webp"}
            setproject={setproject}
            setlinks={setprjectLinks}
            projectData={{
              liveLink: "https://dheeraj087.github.io/funny-calculator-/",
              githubLink: "https://github.com/dheeraj087/funny-calculator-",
              techStack: "HTML, CSS, JavaScript, etc",
            }}
          />
        </div>

        <div
          className={`grid grid-cols-2 max-sm:grid-cols-1 gap-17 max-sm:gap-y-5 `}
        >
          <MaskEffect
            img=" /assets/primum.webp"
            set={setbig}
            data={" /assets/primum.webp"}
            setproject={setproject}
            classes={"top-[50%]"}
            setlinks={setprjectLinks}
            projectData={{
              liveLink: "https://dheeraj087.github.io /",
              githubLink: "https://github.com/dheeraj087 ",
              techStack: "React, Tailwind CSS, JavaScript, etc",
            }}
          />

          <MaskEffect
            img=" /assets/image.webp"
            set={setbig}
            data={" /assets/image.webp"}
            setproject={setproject}
            setlinks={setprjectLinks}
            projectData={{
              liveLink: "https://dheeraj087.github.io /",
              githubLink: "https://github.com/dheeraj087/funny-calculator-",
              techStack: "HTML, CSS, JavaScript, etc",
            }}
          />
        </div>
      </div>
    </>
  );
};
export default My_work;
