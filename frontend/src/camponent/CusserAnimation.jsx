import { useState } from "react";
import React from "react";

function couser({ reffarence, movre }) {
  return (
    <>
      <div
        ref={reffarence}
        className=" w-1 h-1 rounded-full shadow-[0px_0px_50px_50px_#707071] absolute left-0 top-0"
      ></div>
    </>
  );
}
export default couser;
