import { motion } from "framer-motion";
import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started" }) {
  return (
    <div className="w-fit h-[3vh] bg-zinc-100 rounded-full px-5 text-black text-sm font-medium overflow-hidden ">
      <motion.div
        className="tile"
        whileHover={{
          y: "-3.25vh ",
          transition: { duration: 0.25, ease: "easeIn" },
        }}
        // onMouseLeave={{
        //   y: "0",
        //   transition: { duration: 0.25, ease: "easeInOut" },
        // }}
      >
        <div className="flex items-center gap-3 text-[1.5vh] py-[0.5vh]">
          {title}
          <IoIosReturnRight className="text-black text-sm font-medium" />
        </div>
        <div className="flex items-center gap-3 text-[1.5vh] py-[0.5vh]">
          {title}
          <IoIosReturnRight className="text-black text-sm font-medium" />
        </div>
      </motion.div>
    </div>
  );
}

export default Button;
