import Title from "../Title";
import Image from "next/image";
import Pic1 from "@/assets/content-img/thumb1.jpg";
import Pic2 from "@/assets/content-img/reastaurant_1.jpg";
import Pic3 from "@/assets/content-img/thumb2.jpg";

const Welcome = () => {
  return (
    <section className="col-[content]">
      <Title>WELCOME IN NIGHTCLUB</Title>
      <div className="grid md:grid-cols-3 gap-4">
        <Image src={Pic1} alt="welcome picture 1" title="Overskrift 1" text="Kort beskrivelse 1" />
        <Image src={Pic2} alt="welcome picture 2" title="Overskrift 2" text="Kort beskrivelse 2" />
        <Image src={Pic3} alt="welcome picture 3" title="Overskrift 3" text="Kort beskrivelse 3" />
      </div>
    </section>
  );
};

export default Welcome;
// ...existing code...
