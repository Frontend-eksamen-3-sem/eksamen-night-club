"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SlideCard = ({ event }) => { 
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="grid grid-rows-[1fr_auto] h-full w-full overflow-hidden" onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} onClick={() => setIsActive(!isActive)}>
      <div className="grid row-start-1 col-start-1">
        <Image src={event.asset?.url} alt={event.title} width={800} height={600} unoptimized className="w-full h-full object-cover row-start-1 col-start-1" />
        <motion.div className="row-start-1 col-start-1 bg-black" animate={{ opacity: isActive ? 0.45 : 0 }} transition={{ duration: 0.35 }} />
        <motion.div className="row-start-1 col-start-1 grid grid-rows-[1fr_auto_auto] h-full w-full text-white " animate={{ opacity: isActive ? 1 : 0 }} transition={{ duration: 0.35 }}>
          <motion.div className="grid justify-center row-start-1 self-center m-2" initial={{ y: "0%" }} animate={{ y: isActive ? "100%" : "0%" }} transition={{ duration: 0.45, ease: "easeOut" }}>
            <a className="text-white bg-accent px-4 py-2">BOOK NOW</a>
          </motion.div> 

          <motion.div  
            className="col-start-1 row-start-1 w-0 h-0 
             border-l-60 border-l-accent border-b-60 border-b-transparent 
             z-20 "
            initial={{ x: -80, y: -80, opacity: 0 }}
            animate={isActive ? { x: 0, y: 0, opacity: 1 } : { x: -80, y: -80, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          /> 
          <motion.div
            className="col-start-3 row-start-3 w-0 h-0 
             border-r-60 border-r-accent border-t-60 border-t-transparent 
             justify-self-end self-end z-20"
            initial={{ x: 80, y: 80, opacity: 0 }}
            animate={isActive ? { x: 0, y: 0, opacity: 1 } : { x: 80, y: 80, opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          />

          <motion.div className="row-start-3 col-end-4 col-start-1 bg-black p-4 z-0" initial={{ y: "100%" }} animate={{ y: isActive ? "0%" : "100%" }} transition={{ duration: 0.45, ease: "easeOut" }}>
            <h2 className="text-lg font-semibold">{event.title}</h2>
            <p>{event.description?.slice(0, 200)}...</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="row-start-2 bg-accent p-3 text-white">
        <p>
          {event.date} / {event.location} /{" "}
        </p>
      </div>
    </div>
  );
};

export default SlideCard;
