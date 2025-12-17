"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import headerImg1 from "@/assets/bg/header_bg_1.jpg";
import headerImg2 from "@/assets/bg/header_bg_2.jpg";

const images = [headerImg1, headerImg2];

export default function IndexHeroClient({ logoImg, BottomLine, imgIndex }) {
  const randomImg = images[imgIndex];

  return (
    <section className="col-[full]">
      <div className="grid grid-cols-3">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="col-start-1 row-start-1 col-end-4 row-end-4 h-[700px] md:max-h-[600px] relative">
          <Image src={randomImg} alt="Header" fill className="object-cover object-center" priority />
        </motion.div>
        <div className="col-start-1 col-end-4 row-start-2 row-end-3 md:max-w-[900px] mx-auto z-10">
          <motion.div initial={{ opacity: 0, rotateX: 90 }} animate={{ opacity: 1, rotateX: 0 }} transition={{ duration: 1, ease: "easeIn" }} className="mx-auto w-full" style={{ perspective: 1000 }}>
            <Image src={logoImg} alt="Logo" className="mx-auto w-full" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut", delay: 1 }} className="mt-2 md:mt-4">
            <h1 className="flex justify-around md:tracking-[27.7px] tracking-[7.5px] md:pl-5 pl-1 w-full">HAVE A GOOD TIME</h1>
            <Image src={BottomLine} alt="title underline img" className="w-full md:pl-16 md:pr-16 pl-6 pr-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
