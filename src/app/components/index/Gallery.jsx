import Title from "../Title";
import Image from "next/image";
import { Suspense } from "react";
import GalleryClient from "./GalleryClient";

const Gallery = async () => {
  return (
    <div className="col-[full]">
      <Title>NIGHT CLUB GALLERY</Title>

      <Suspense fallback={<div className="p-4">Loading gallery…</div>}>
        <FetchGallery />
      </Suspense>
    </div>
  );
};

export default Gallery;

const FetchGallery = async () => {
  "use server";
  const response = await fetch("http://localhost:4000/gallery");
  const image = await response.json();

  const maxseven = image.slice(0, 7);

  // Grid-positions som i dit statiske eksempel
  // const positions = [
  //   { colStart: 1, colEnd: 3, rowSpan: 1 },
  //   { colStart: 3, colEnd: 4, rowSpan: 1 },
  //   { colStart: 4, colEnd: 6, rowSpan: 1 },
  //   { colStart: 6, colEnd: 7, rowSpan: 1 },
  //   { colStart: 1, colEnd: 3, rowSpan: 2 },
  //   { colStart: 3, colEnd: 5, rowSpan: 2 },
  //   { colStart: 5, colEnd: 7, rowSpan: 2 },
  // ];

  return (
    <>
      <GalleryClient image={maxseven} />;
      {/* <div className="grid grid-cols-6 grid-rows-2 items-stretch">
        {maxseven.map((image, index) => {
          const pos = positions[index] || { colStart: 1, colEnd: 2, rowSpan: 1 };
          return <Image key={image.id} src={image.asset?.url} alt={image.description} className={`col-start-${pos.colStart} col-end-${pos.colEnd} row-span-${pos.rowSpan} max-h-[250] max-w-[250px] object-cover`} width={500} height={500} unoptimized />;
        })}
      </div> */}
    </>
  );
};
