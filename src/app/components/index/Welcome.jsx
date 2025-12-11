import Title from "../Title";
import Pic1 from "@/assets/content-img/thumb1.jpg";
import Pic2 from "@/assets/content-img/reastaurant_1.jpg";
import Pic3 from "@/assets/content-img/thumb2.jpg";
import ImageText from "../index/WelcomeImageText";
import { PiCheersLight, PiCallBell } from "react-icons/pi";
import SpecialIcon from "@/assets/icon/favicon.png";
import Image from "next/image";

const Welcome = () => {
  return (
    <section className="col-[content]">
      <Title>WELCOME IN NIGHTCLUB</Title>
      <div className="grid md:grid-cols-3 gap-4">
        <ImageText src={Pic1} alt="welcome picture 1" title="Overskrift 1" text="Kort beskrivelse 1" icon={<Image src={SpecialIcon} alt="icon" className="w-8 h-8" />} />
        <ImageText src={Pic2} alt="welcome picture 2" title="Overskrift 2" text="Kort beskrivelse 2" icon={<PiCallBell className="w-8 h-8" style={{ color: "var(--pink)" }} />} />
        <ImageText src={Pic3} alt="welcome picture 3" title="Overskrift 3" text="Kort beskrivelse 3" icon={<PiCheersLight className="w-8 h-8" style={{ color: "var(--pink)" }} />} />
      </div>
    </section>
  );
};

export default Welcome;
