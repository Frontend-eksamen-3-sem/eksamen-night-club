import TestimonialsClient from "./TestimonialsClient";
import Title from "../Title";

export default async function Testimonials() {
  const response = await fetch("http://localhost:4000/testimonials");
  const testimonials = await response.json();

  return (
    <section className="col-[content] mt-10">
      <TestimonialsClient testimonials={testimonials} />
    </section>
  );
}
