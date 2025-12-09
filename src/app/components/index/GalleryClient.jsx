"use client"; // vigtigt for interaktivitet
import Image from "next/image";
import Button from "../Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { useState } from "react";

const GalleryClient = ({ image }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Grid-positions for billederne fra statiske eksempel
  const layout = ["col-start-1 col-end-3 row-span-1", "col-start-3 col-end-4 row-span-1", "col-start-4 col-end-6 row-span-1", "col-start-6 col-end-7 row-span-1", "col-start-1 col-end-3 row-span-2", "col-start-3 col-end-5 row-span-2", "col-start-5 col-end-7 row-span-2"];

  //prøve at lave slider funktionalitet
  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex - 1 + image.length) % image.length);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((selectedIndex + 1) % image.length);
  };

  return (
    <>
      <div className="grid grid-cols-6 grid-rows-2 items-stretch">
        {image.map((image, index) => {
          return <Image onClick={() => setSelectedImage(image)} key={image.id} src={image.asset?.url} className={`${layout[index]} h-full w-full object-cover cursor-pointer`} width={500} height={500} unoptimized />;
        })}
      </div>

      {/* Overlay menu */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="w-full max-w-4xl p-4 flex items-center justify-between">
            <button onClick={handlePrev}>
              <IoIosArrowBack size={40} color="white" />
            </button>

            <div className=" bg-black relative max-w-3xl max-h-[80vh]">
              <div className="max-w-3xl max-h-[80vh] overflow-auto mb-4">
                <Image src={selectedImage.asset?.url} alt={selectedImage.description} width={1000} height={1000} className="object-contain " unoptimized />
              </div>

              <h2>Night club party</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore neque delectus quo natus aliquid ullam ipsa, quidem maiores, culpa, accusamus commodi. Aperiam, impedit temporibus. Voluptatibus nisi dolorem qui eveniet!Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore neque delectus quo natus aliquid ullam ipsa, quidem maiores, culpa, accusamus commodi. Aperiam, impedit temporibus. Voluptatibus nisi dolorem qui eveniet!</p>
              <Button onClick={() => setSelectedIdex(null)}>Read more</Button>
            </div>

            <button onClick={handleNext}>
              <IoIosArrowForward size={40} color="white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryClient;
