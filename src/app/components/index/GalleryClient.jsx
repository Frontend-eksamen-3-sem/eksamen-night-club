"use client"; // vigtigt for interaktivitet
import Image from "next/image";
import { useState } from "react";

const GalleryClient = ({ image }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Grid-positions fra statiske eksempel
  const positions = [
    { colStart: 1, colEnd: 3, rowSpan: 1 },
    { colStart: 3, colEnd: 4, rowSpan: 1 },
    { colStart: 4, colEnd: 6, rowSpan: 1 },
    { colStart: 6, colEnd: 7, rowSpan: 1 },
    { colStart: 1, colEnd: 3, rowSpan: 2 },
    { colStart: 3, colEnd: 5, rowSpan: 2 },
    { colStart: 5, colEnd: 7, rowSpan: 2 },
  ];

  return (
    <>
      <div className="grid grid-cols-6 grid-rows-2 items-stretch">
        {image.map((image, index) => {
          const pos = positions[index] || { colStart: 1, colEnd: 2, rowSpan: 1 };
          return <Image onClick={() => setSelectedImage(image)} key={image.id} src={image.asset?.url} alt={image.description} className={`col-start-${pos.colStart} col-end-${pos.colEnd} row-span-${pos.rowSpan} max-h-[250] max-w-[250px] object-cover`} width={500} height={500} unoptimized />;
        })}
      </div>

      {/* Overlay menu */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-3xl max-h-[80vh]">
            <Image src={selectedImage.asset?.url} alt={selectedImage.description} width={1000} height={1000} className="object-contain" unoptimized />
          </div>
        </div>
      )}
    </>
  );
};
export default GalleryClient;
