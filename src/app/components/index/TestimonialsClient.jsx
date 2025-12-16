"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import TestimonialsCard from "./TestimonialsCard";

export default function TestimonialsClient({ testimonials = [] }) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!testimonials.length) return <div>Loading...</div>;

  const handleDotClick = (i) => {
    if (i === active) return;
    setDirection(i > active ? 1 : -1);
    setActive(i);
  };

  return (
    <div className="flex flex-col items-center relative min-h-[350px]">
      <motion.div key={active} custom={direction} initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }} transition={{ duration: 0.4 }} className="w-full">
        <TestimonialsCard {...testimonials[active]} />
      </motion.div>

      <div className="flex justify-center mt-4 gap-3 z-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className="w-3 h-3 cursor-pointer"
            aria-label={`Show testimonial ${i + 1}`}
            type="button"
            style={{
              backgroundColor: active === i ? "var(--pink)" : "white",
            }}
          />
        ))}
      </div>
    </div>
  );
}
