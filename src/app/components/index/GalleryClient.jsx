"use client";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Button from "../Button";
import GalleryComponent from "./GalleryComponent";

export default function Gallery({ images }) {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpen = (index) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 w-full h-full">
        <GalleryComponent className="md:col-start-1 md:col-end-3 md:row-span-1" src={images[0].asset.url} alt={images[0].description} onClick={() => handleOpen(0)} initial={{ x: -140, opacity: 0 }} transition={{ duration: 0.7 }} />
        <GalleryComponent className="md:col-start-3 md:col-end-4 md:row-span-1" src={images[1].asset.url} alt={images[1].description} onClick={() => handleOpen(1)} initial={{ x: -60, opacity: 0 }} transition={{ duration: 0.55 }} />
        <GalleryComponent className="md:col-start-4 md:col-end-6 md:row-span-1" src={images[2].asset.url} alt={images[2].description} onClick={() => handleOpen(2)} initial={{ x: -120, opacity: 0 }} transition={{ duration: 0.65 }} />
        <GalleryComponent className="md:col-start-6 md:col-end-7 md:row-span-1" src={images[3].asset.url} alt={images[3].description} onClick={() => handleOpen(3)} initial={{ x: -40, opacity: 0 }} transition={{ duration: 0.5 }} />
        <GalleryComponent className="md:col-start-1 md:col-end-3 md:row-span-2" src={images[4].asset.url} alt={images[4].description} onClick={() => handleOpen(4)} initial={{ x: -160, opacity: 0 }} transition={{ duration: 0.75 }} />
        <GalleryComponent className="md:col-start-3 md:col-end-5 md:row-span-2" src={images[5].asset.url} alt={images[5].description} onClick={() => handleOpen(5)} initial={{ x: -80, opacity: 0 }} transition={{ duration: 0.6 }} />
        <GalleryComponent className="md:col-start-5 md:col-end-7 md:row-span-2" src={images[6].asset.url} alt={images[6].description} onClick={() => handleOpen(6)} initial={{ x: -100, opacity: 0 }} transition={{ duration: 0.7 }} />
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-black border-black justify-center !max-w-[250] max-h-[500]  md:!max-w-[800] md:max-h-[750] p-0">
          <Carousel opts={{ startIndex: selectedIndex }}>
            <CarouselPrevious className="z-50 text-white" />
            <CarouselNext className="z-50 text-white" />
            <CarouselContent className="max-w-[250] max-h-[500] md:max-w-[850] md:max-h-[750] border-none bg-black">
              {images.map((img) => (
                <CarouselItem key={img.id}>
                  <div className="overflow-auto grid border-b-2 border-accent">
                    <div className="col-start-4 row-end-3 self-end w-0 h-0 border-r-accent border-r-50 border-t-50 border-t-transparent z-20 justify-self-end " />
                    <Image src={img.asset?.url} alt={img.description} className="md:w-[800] md:h-[500] w-[300] h-[100] col-start-4 row-end-3  object-cover" height={100} width={100} unoptimized />
                  </div>
                  <div className="grid gap-4 px-2 py-2">
                    <h2>Night club party</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore neque delectus quo natus aliquid ullam ipsa, quidem maiores, culpa, accusamus commodi. Aperiam, impedit temporibus. Voluptatibus nisi dolorem qui eveniet!Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore neque delectus quo natus aliquid ullam ipsa, quidem maiores, culpa, accusamus commodi. Aperiam, impedit temporibus. Voluptatibus nisi dolorem qui eveniet!</p>
                    <Button className="mt-2 place-self-end-safe" onClick={() => setSelectedIdex(null)}>
                      Read more
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </DialogContent>
      </Dialog>
    </>
  );
}
