import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import React from "react";

function Marquee({ image, direction }) {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 gap-28 py-2 pr-28"
      >
        {image.map((image_url, index) => (
          <img
            key={index}
            src={image_url}
            className="w-28"
            alt=""
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex flex-shrink-0 gap-28 py-2 pr-28"
      >
        {image.map((image_url, index) => (
          <img
            key={index}
            src={image_url}
            className="w-28"
            alt=""
          />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
