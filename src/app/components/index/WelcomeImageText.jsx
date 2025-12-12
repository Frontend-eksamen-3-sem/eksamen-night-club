"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const WelcomeImageText = ({ src, alt, title, text, icon }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="grid grid-cols-3 grid-rows-3 cursor-pointer w-full h-full align-center mb-4 overflow-hidden" onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} onClick={() => setIsActive(!isActive)}>
      <div className="col-start-1 row-start-1 col-end-4 row-end-4  grid ">
        <Image src={src} alt={alt} className="w-full h-full object-cover" />
      </div>

      {isActive && (
        <motion.div className="col-start-1 row-start-1 col-end-4 row-end-4 grid grid-cols-3 grid-rows-3 w-full h-full bg-black/90 text-white z-10 border-t-2 border-t-accent border-b-2 border-b-accent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
          <motion.div className="col-start-1 row-start-1 w-0 h-0 border-l-60 border-l-accent border-b-60 border-b-transparent" initial={{ x: -80, y: -80, opacity: 0 }} animate={isActive ? { x: 0, y: 0, opacity: 1 } : { x: -80, y: -80, opacity: 0 }} transition={{ duration: 0.45, ease: "easeOut" }} />
          <motion.div className="col-start-3 row-start-3 w-0 h-0 border-r-60 border-r-accent border-t-60 border-t-transparent justify-self-end self-end" initial={{ x: 80, y: 80, opacity: 0 }} animate={isActive ? { x: 0, y: 0, opacity: 1 } : { x: 80, y: 80, opacity: 0 }} transition={{ duration: 0.45, ease: "easeOut" }} />
          <div className="col-start-1 row-start-1 col-end-4 row-end-4 flex flex-col items-center justify-center">
            <motion.div className="col-start-2 row-start-2 w-15 h-15 md:w-20 md:h-20 flex items-center justify-center border-2 bg-transparent border-accent" initial={{ scale: 0.5 }} animate={{ scale: 1 }} transition={{ duration: 0.4, type: "spring" }}>
              {icon}
            </motion.div>
            <motion.h2 className="md:pt-6 md:pb-6 pt-4 pb-4" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, delay: 0.3, type: "spring" }}>
              {title}
            </motion.h2>
            <motion.p className="md:pl-10 md:pr-10 md:pb-10 pr-6 pl-6 pb-6 text-center" initial={{ x: 80, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.3, type: "spring" }}>
              {text}
            </motion.p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default WelcomeImageText;
