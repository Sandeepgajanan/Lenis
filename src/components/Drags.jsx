import React from "react";
import { dragData } from "../constants";
import { useRef } from "react";
import Drag from "./Drag";

const Drags = () => {
  const reference = useRef(null);
  return (
    <div
      className="w-full min-h-screen bg-[#846C64]  relative z-10 flex gap-10 py-20 items-center justify-center flex-wrap overflow-hidden max-sm:flex-col max-sm:px-5"
      ref={reference}
    >
      {dragData.map((item, index) => (
        <Drag key={index} val={item} reference={reference} />
      ))}
    </div>
  );
};

export default Drags;
