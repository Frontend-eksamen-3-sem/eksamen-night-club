"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function IndexHeroClient({ randomImg, logoImg, BottomLine }) {
  return (
    <section className="col-[full]">
      <div className="grid grid-cols-3">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="col-start-1 row-start-1 col-end-4 row-end-4 h-[800px] md:max-h-[600px] md:w-full md:overflow-hidden">
          <Image src={randomImg} alt="Header" className="w-full h-full object-cover object-center" />
        </motion.div>
        <div className="col-start-1 col-end-4 row-start-2 row-end-3 md:max-w-[900px] mx-auto">
          <motion.div initial={{ opacity: 0, rotateX: 90 }} animate={{ opacity: 1, rotateX: 0 }} transition={{ duration: 1, ease: "easeIn" }} className="mx-auto w-full" style={{ perspective: 1000 }}>
            <Image src={logoImg} alt="Logo" className="mx-auto w-full" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeInOut", delay: 1 }} className="mt-2 md:mt-4">
            <h1 className="flex justify-around md:tracking-[27.7px] tracking-[9.5px] md:pl-5 pl-2 w-full">HAVE A GOOD TIME</h1>
            <Image src={BottomLine} alt="title underline img" className="w-full md:pl-16 md:pr-16 pl-6 pr-6" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
