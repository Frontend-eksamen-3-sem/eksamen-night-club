"use client";
import { useState } from "react";
import Image from "next/image";

const ImageText = ({ src, alt, title, text, icon }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="grid grid-cols-3 grid-rows-3 cursor-pointer max-w-[350px] h-[450px]" onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} onClick={() => setIsActive(!isActive)}>
      <div className="col-start-1 row-start-1 col-end-4 row-end-4 w-full h-full">
        <Image src={src} alt={alt} className="w-full h-full object-cover" width={350} height={450} />
      </div>

      {isActive && (
        <div className="col-start-1 row-start-1 col-end-4 row-end-4 grid grid-cols-3 grid-rows-3 w-full h-full bg-black/90 text-white z-10">
          {/* Venstre top trekant */}
          <div className="col-start-1 row-start-1 w-0 h-0 border-l-60 border-l-accent border-b-60 border-b-transparent" />
          {/* Højre bund trekant */}
          <div className="col-start-3 row-start-3 w-0 h-0 border-r-60 border-r-accent border-t-60 border-t-transparent justify-self-end self-end" />
          {/* Indhold centreret i midten */}
          <div className="col-start-2 row-start-2 flex flex-col items-center justify-center">
            <div className="w-20 h-20 flex items-center justify-center border-2 mb-4 bg-transparent border-accent">{icon}</div>
            <h3>{title}</h3>
            <p className="mt-2">{text}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageText;
