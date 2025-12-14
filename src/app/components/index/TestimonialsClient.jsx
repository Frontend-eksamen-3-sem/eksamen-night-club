"use client";
import { useState } from "react";
import TestimonialsCard from "./TestimonialsCard";

export default function TestimonialsClient({ testimonials = [] }) {
  const [active, setActive] = useState(0);

  if (!testimonials.length) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center">
      <TestimonialsCard {...testimonials[active]} />
      <div className="flex justify-center mt-4 gap-3 z-10">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`
              w-3 h-3 cursor-pointer
            `}
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
