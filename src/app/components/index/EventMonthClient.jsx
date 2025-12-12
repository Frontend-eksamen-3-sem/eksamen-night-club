"use client";
import Title from "../Title";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SlideCard from "./SlideCard";

const EventMonthClient = ({ events }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  if (events.length < 2) return <p>Indlæser slides...</p>;

  const slides = [
    { left: events[0], right: events[1] },
    { left: events[2], right: events[3] },
    { left: events[4], right: events[5] },
  ];

  const current = slides[activeSlideIndex] || slides[0];

  return (
    <div>
      <Title>EVENTS THIS MONTH</Title>
      <AnimatePresence mode="wait">
        <motion.div key={activeSlideIndex} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} transition={{ duration: 0.4 }} className="grid md:grid-cols-2 gap-2">
          {current.left && <SlideCard event={current.left} />}
          {current.right && <SlideCard event={current.right} />}
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-center mt-4 gap-3 py-5">
        {slides.map((_, i) => (
          <a
            key={i}
            onClick={() => setActiveSlideIndex(i)}
            className={`
              w-3 h-3  cursor-pointer transition-all
              ${activeSlideIndex === i ? "bg-pink-500 scale-125" : "bg-white"}
            `}
          />
        ))}
      </div>
    </div>
  );
};
export default EventMonthClient;
