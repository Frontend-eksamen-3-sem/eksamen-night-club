"use client";
import { useState } from "react";
import Image from "next/image";

const WelcomeImageText = ({ src, alt, title, text, icon }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="grid grid-cols-3 grid-rows-3 cursor-pointer md:max-w-[390px] max-w-[305px] md:max-h-[500px] max-h-[350px] align-center mb-4" onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} onClick={() => setIsActive(!isActive)}>
      <div className="col-start-1 row-start-1 col-end-4 row-end-4 md:max-w-[390px] max-w-[305px] md:max-h-[500px] max-h-[350px] grid ">
        <Image src={src} alt={alt} className="md:max-w-[390px] max-w-[300px] md:max-h-[500px] max-h-[350px] object-cover" />
      </div>

      {isActive && (
        <div className="col-start-1 row-start-1 col-end-4 row-end-4 grid grid-cols-3 grid-rows-3 w-full h-full bg-black/90 text-white z-10 border-t-2 border-t-accent border-b-2 border-b-accent">
          <div className="col-start-1 row-start-1 w-full h-2 border-l-60 border-l-accent border-b-60 border-b-transparent" />
          <div className="col-start-3 row-start-3 w-0 h-0 border-r-60 border-r-accent border-t-60 border-t-transparent justify-self-end self-end" />
          <div className="col-start-1 row-start-1 col-end-4 row-end-4 flex flex-col items-center justify-center">
            <div className="col-start-2 row-start-2 w-15 h-15 md:w-20 md:h-20 flex items-center justify-center border-2 mb-4 bg-transparent border-accent">{icon}</div>
            <h3>{title}</h3>
            <p className="md:p-10 p-6 text-center">{text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WelcomeImageText;
