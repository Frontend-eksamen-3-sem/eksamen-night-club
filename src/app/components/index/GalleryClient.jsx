"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogTitle, DialogContent } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Button from "../Button";

export default function Gallery({ images }) {
  const [open, setOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleOpen = (index) => {
    setSelectedIndex(index);
    setOpen(true);
  };

  return (
    <>
      <div className="max-h-[60vh] grid grid-cols-1 sm:grid-cols-6 sm:grid-rows-2 w-full h-full">
        <motion.div onClick={() => handleOpen(0)} initial={{ x: -140, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="sm:col-start-1 sm:col-end-3 sm:row-span-1 cursor-pointer">
          <Image src={images[0].asset.url} alt={images[0].description} className="w-full h-full object-cover" width={500} height={500} unoptimized />
        </motion.div>
        <motion.div onClick={() => handleOpen(1)} initial={{ x: -60, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55 }} className=" sm:col-start-3 sm:col-end-4 sm:row-span-1 cursor-pointer">
          <Image src={images[1].asset.url} alt={images[1].description} className="w-full h-full object-cover" width={500} height={500} unoptimized />
        </motion.div>
        <motion.div onClick={() => handleOpen(2)} initial={{ x: -120, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.65 }} className=" sm:col-start-4 sm:col-end-6 sm:row-span-1 cursor-pointer">
          <Image src={images[2].asset.url} alt={images[2].description} className="w-full h-full object-cover" width={500} height={500} unoptimized />
        </motion.div>
        <motion.div onClick={() => handleOpen(3)} initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5 }} className=" sm:col-start-6 sm:col-end-7 sm:row-span-1 cursor-pointer">
          <Image src={images[3].asset.url} alt={images[3].description} className="w-full h-full object-cover" width={500} height={500} unoptimized />
        </motion.div>
        <motion.div onClick={() => handleOpen(4)} initial={{ x: -160, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.75 }} className=" sm:col-start-1 sm:col-end-3 sm:row-span-2 cursor-pointer">
          <Image src={images[4].asset.url} alt={images[4].description} className="w-full h-full object-cover" width={500} height={500} unoptimized />
        </motion.div>
        <motion.div onClick={() => handleOpen(5)} initial={{ x: -80, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className=" sm:col-start-3 sm:col-end-5 sm:row-span-2 cursor-pointer">
          <Image src={images[5].asset.url} alt={images[5].description} className="w-full h-full object-cover" width={500} height={500} unoptimized />
        </motion.div>
        <motion.div onClick={() => handleOpen(6)} initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className=" sm:col-start-5 sm:col-end-7 sm:row-span-2 cursor-pointer">
          <Image src={images[6].asset.url} alt={images[6].description} className="w-full h-full object-cover" width={500} height={500} unoptimized />
        </motion.div>
      </div>

      {/* -- Dialog / Lightbox viewer -- */}
      <Dialog className="md:hidden" open={open} onOpenChange={setOpen}>
        <DialogTitle>Gallery Image</DialogTitle>
        <DialogContent className="bg-black border-black justify-center !max-w-[750] w-full max-h-[850] p-0">
          <Carousel opts={{ startIndex: selectedIndex }}>
            <CarouselPrevious className="z-50 text-white" />
            <CarouselNext className="z-50 text-white" />

            <CarouselContent className="max-w-[full] max-h-[700] border-none bg-black">
              {images.map((img) => (
                <CarouselItem key={img.id}>
                  <div className="overflow-auto">
                    <Image src={img.asset?.url} alt={img.description} className="w-[800] h-[400] object-cover" width={500} height={500} unoptimized />
                  </div>

                  {/* <div className="p-6 bg-black text-white">
                    <h2 className="text-xl font-bold mb-2">{img.title ?? "Gallery Image"}</h2>
                    <p className="text-sm opacity-80">{img.description}</p>
                  </div> */}
                  <div className=" grid">
                    <h2>Night club party</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore neque delectus quo natus aliquid ullam ipsa, quidem maiores, culpa, accusamus commodi. Aperiam, impedit temporibus. Voluptatibus nisi dolorem qui eveniet!Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi inventore neque delectus quo natus aliquid ullam ipsa, quidem maiores, culpa, accusamus commodi. Aperiam, impedit temporibus. Voluptatibus nisi dolorem qui eveniet!</p>
                    <Button className="mt-2  place-self-end-safe" onClick={() => setSelectedIdex(null)}>
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
