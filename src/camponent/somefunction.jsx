import React, { forwardRef } from "react";

const handleMouseMove = (index, e, glowRefs) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  function animation() {
    if (glowRefs.current[index]) {
      glowRefs.current[index].style.left = `${x}px`;
      glowRefs.current[index].style.top = `${y}px`;
    }
    requestAnimationFrame(animation);
  }
  animation();
};
const handleMouseEnter2 = (index, glowRefs) => {
  if (glowRefs.current[index]) {
    glowRefs.current[index].style.opacity = 7;
  }
};
const handleMouseleave2 = (index, glowRefs) => {
  if (glowRefs.current[index]) {
    glowRefs.current[index].style.opacity = 0;
    glowRefs.current[index].style.left = `0px`;
    glowRefs.current[index].style.top = `0px`;
  }
};

const Curser = forwardRef((prop, ref) => {
  return (
    <>
      <div
        ref={ref}
        className="absolute w-5 h-5 rounded-full bg-gray-500 blur-[25px] opacity-0 shadow-[0_0_70px_60px_#c1c1c1] pointer-events-none transition-all transition-discrete duration-1000"
      ></div>
    </>
  );
});

export { handleMouseMove, handleMouseleave2, handleMouseEnter2, Curser };
