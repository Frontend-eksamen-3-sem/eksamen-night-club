"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const GalleryComponent = ({ src, alt, onClick, initial, transition, className = "" }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <motion.div onClick={onClick} initial={initial} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={transition} className={`w-full relative h-full overflow-hidden cursor-pointer  ${className}`}>
        <div className="grid grid-cols-3 grid-rows-3 w-full h-full " onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
          <motion.div
            className="col-start-1 row-start-1 self-start w-0 h-0
            border-l-60 border-l-accent border-b-60 border-b-transparent
            z-20"
            initial={{ x: -80, y: -80, opacity: 0 }}
            animate={isActive ? { x: 0, y: 0, opacity: 1 } : { x: -80, y: -80, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
          <motion.div
            className="col-start-3 row-start-3 w-0 h-0
            border-r-60 border-r-accent border-t-60 border-t-transparent
            justify-self-end self-end z-20"
            initial={{ x: 80, y: 80, opacity: 0 }}
            animate={isActive ? { x: 0, y: 0, opacity: 1 } : { x: 80, y: 80, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />

          <Image src={src} alt={alt} className="w-full h-full object-cover hover:border-t hover:border-b border-accent overflow-hidden" fill unoptimized />
        </div>
      </motion.div>
    </>
  );
};

export default GalleryComponent;
