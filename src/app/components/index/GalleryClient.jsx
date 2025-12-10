"use client"; // vigtigt for interaktivitet
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { useState } from "react";

const GalleryClient = ({ image }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  // Grid-positions for billederne fra statiske eksempel
  const layout = ["col-start-1 col-end-3 row-span-1", "col-start-3 col-end-4 row-span-1", "col-start-4 col-end-6 row-span-1", "col-start-6 col-end-7 row-span-1", "col-start-1 col-end-3 row-span-2", "col-start-3 col-end-5 row-span-2", "col-start-5 col-end-7 row-span-2"];

  //prøve at lave slider funktionalitet
  // const handlePrev = () => {
  //   if (selectedIndex === null) return;
  //   setSelectedIndex((selectedIndex - 1 + image.length) % image.length);
  // };

  // const handleNext = () => {
  //   if (selectedIndex === null) return;
  //   setSelectedIndex((selectedIndex + 1) % image.length);
  // };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    const newIndex = (selectedIndex - 1 + image.length) % image.length;
    setSelectedIndex(newIndex);
    setSelectedImage(image[newIndex]);
  };

  const handleNext = () => {
    if (selectedIndex === null) return;
    const newIndex = (selectedIndex + 1) % image.length;
    setSelectedIndex(newIndex);
    setSelectedImage(image[newIndex]);
  };

  // individuelle offsets (matcher videoens “organiske” slide-in)
  const offsets = [-140, -60, -120, -40, -160, -80, -100];

  // matchende durations for et mere varieret look
  const durations = [0.7, 0.55, 0.65, 0.5, 0.75, 0.6, 0.7];

  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="show"
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        variants={{
          hidden: {},
          show: {},
        }}
        className="grid grid-cols-6 grid-rows-2 max-h-[60vh] "
      >
        {image.map((image, index) => {
          return (
            <div
              onClick={() => {
                setSelectedImage(image);
                setSelectedIndex(index);
              }}
              key={image.id}
              className={`${layout[index]} w-full h-full cursor-pointer`}
            >
              <motion.div
                variants={{
                  hidden: {
                    x: offsets[index] ?? -80,
                    opacity: 0,
                  },
                  show: {
                    x: 0,
                    opacity: 1,
                    transition: {
                      duration: durations[index] ?? 0.6,
                      ease: "easeOut",
                    },
                  },
                }}
                className="w-full h-full"
              >
                <Image src={image.asset?.url} alt={image.description} className="w-full h-full object-cover" width={500} height={500} unoptimized />
              </motion.div>
            </div>
          );
        })}
      </motion.div>

      {/* Overlay billede */}
      {selectedImage && (
        <motion.div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 overflow-hidden" onClick={() => setSelectedImage(null)}>
          <div className="flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <button className="border-2 border-text mr-15" onClick={handlePrev}>
              <IoIosArrowBack size={25} color="white" />
            </button>
            <div className="max-w-[750px] max-h-screen grid  bg-black">
              <div className="overflow-auto">
                <Image src={selectedImage.asset?.url} alt={selectedImage.description} width={1000} height={900} className="object-cover w-full max-h-[75vh]" unoptimized />
              </div>
              <div className="p-8 grid">
                <h2>Night club party</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore neque delectus quo natus aliquid ullam ipsa, quidem maiores, culpa, accusamus commodi. Aperiam, impedit temporibus. Voluptatibus nisi dolorem qui eveniet!Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore neque delectus quo natus aliquid ullam ipsa, quidem maiores, culpa, accusamus commodi. Aperiam, impedit temporibus. Voluptatibus nisi dolorem qui eveniet!</p>
                <Button className="mt-2  place-self-end-safe" onClick={() => setSelectedIdex(null)}>
                  Read more
                </Button>
              </div>
            </div>
            <button className="border-2 border-text ml-15 " onClick={handleNext}>
              <IoIosArrowForward size={25} color="white" />
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GalleryClient;
