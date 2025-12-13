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
  const images = await response.json();

  const maxseven = images.slice(0, 7);

  return (
    <>
      <GalleryClient images={maxseven} />;
    </>
  );
};
