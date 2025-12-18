"use client";
import Title from "../Title";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideCard from "./SlideCard";

const EventMonthClient = ({ events }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const slides = [
    [events[0], events[1]],
    [events[2], events[3]],
    [events[4], events[5]],
  ]; 

  return (
    <div>
      <Title>EVENTS THIS MONTH</Title>
      <AnimatePresence mode="wait">
        <motion.div key={activeSlideIndex} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }} className="grid gap-2 md:grid-cols-2">
          <div className="md:hidden">
            <SlideCard event={events[activeSlideIndex]} />
          </div>
          <div className="hidden md:contents">{slides[activeSlideIndex]?.map((event, index) => event && <SlideCard key={index} event={event} />)}</div>
        </motion.div>
      </AnimatePresence>

      <div className="flex md:hidden justify-center gap-3 mt-4 py-5">
        {events.map((slide, index) => (
          <a
            key={index}
            onClick={() => setActiveSlideIndex(index)}
            className={` w-3 h-3  cursor-pointer transition-all
       ${activeSlideIndex === index ? "bg-accent scale-125" : "bg-white"}
     `}
          />
        ))}
      </div>

      <div className="hidden md:flex justify-center gap-3 mt-4 py-5">
        {slides.map((slide, index) => (
          <a
            key={index}
            onClick={() => setActiveSlideIndex(index)}
            className={` w-3 h-3  cursor-pointer transition-all
       ${activeSlideIndex === index ? "bg-accent scale-125" : "bg-white"}
     `}
          />
        ))}
      </div>
    </div>
  );
};
export default EventMonthClient;
