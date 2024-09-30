import React from "react";
import { motion } from "framer-motion";
const Drag = ({ val, reference }) => {
  return (
    <motion.div
      className="w-[20vw] h-[25vw] rounded-3xl pt-8 pb-2 px-3 bg-zinc-800/90 text-zinc-100 flex-shrink-0 max-sm:w-full max-sm:h-full flex flex-col "
      drag
      dragConstraints={reference}
      dragTransition={{
        bounceStiffness: 600,
        bounceDamping: 10,
      }}
      dragElastic={0.5}
    >
      <h1 className="font-extrabold text-3xl text-center max-sm:text-xl">
        {val.title}
      </h1>
      <div className="mt-4 bg-sky-700/90 p-2 rounded-3xl max-sm:mt-2 max-sm:text-sm">
        <p className="text-center text-xl max-sm:text-sm">{val.author}</p>
      </div>
    </motion.div>
  );
};

export default Drag;
