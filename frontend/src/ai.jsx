import { useState } from "react";
import { FaAlignLeft, FaArrowLeft, FaArrowRight, FaCut, FaLeaf } from "react-icons/fa";

const Ai = ({ sethide }) => {
  const [value, setvalue] = useState("");
  const data =(e)=>{
   
    console.log(value);
    
  
   
  }
  return (
    <div className="w-full h-fit  flex relative  justify-center items-center">
      <div className="w-150 h-screen iamge border-2 border-[#3A3A3B] rounded-2xl ">
        <div className="w-full h-fit flex items-center justify-between -mx-2.5">
          <h1 className="text-xl font-bold ml-5  text-[#fffdf2cc] ">
            AI asistant
          </h1>
          <button onClick={() => sethide((prev) => !prev)}>
            <FaCut className="text-red-500 cursor-pointer" />
          </button>
        </div>
        <div className="w-140 flex items-center bg-blue-700 group  m-auto transform translate-x-4 border-1 absolute bottom-4 border-[#3A3A3B] rounded-2xl "
        >
          <textarea
          onChange={(e)=>{
            setvalue(e.target.value)
          }}
            type="text"
            className="w-full h-full min-h-20 py-3
             resize-y  text-wrap outline-none overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 bg-[#3a3a3b] text-white rounded-2xl"
          />

          <button 
          onClick={data}
          className="w-10 h-20 flex justify-center items-center group-active:bg-blue-800 text-white cursor-pointer"
          >
            <FaArrowRight className="gggg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Ai;
