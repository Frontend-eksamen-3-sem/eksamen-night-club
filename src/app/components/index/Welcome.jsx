import Title from "../Title";
import Pic1 from "@/assets/content-img/thumb1.jpg";
import Pic2 from "@/assets/content-img/reastaurant_1.jpg";
import Pic3 from "@/assets/content-img/thumb2.jpg";
import WelcomeImageText from "../index/WelcomeImageText";
import { PiCheersLight, PiCallBell } from "react-icons/pi";
import SpecialIcon from "@/assets/icon/favicon.png";
import Image from "next/image";

const Welcome = () => {
  return (
    <section className="col-[full] grid grid-cols-subgrid">
      <Title>WELCOME IN NIGHTCLUB</Title>
      <div className="col-[content] grid md:grid-cols-3 justify-items-center md:justify-items-stretch md:gap-4">
        <WelcomeImageText src={Pic1} alt="welcome picture 1" title="NIGHT CLUB" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non rutrum felis. Pell blandit neque. Cras venenatis orci ut massa efficitur, eget pretium nulla blandit. Quisque sodales suscipit convallis. Ut feugiat iaculis est, a feugiat erat." icon={<Image src={SpecialIcon} alt="icon" className="w-8 h-8" />} />
        <WelcomeImageText src={Pic2} alt="welcome picture 2" title="RESTAURANT" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non rutrum felis. Pell blandit neque. Cras venenatis orci ut massa efficitur, eget pretium nulla blandit. Quisque sodales suscipit convallis. Ut feugiat iaculis est, a feugiat erat." icon={<PiCallBell className="w-8 h-8" style={{ color: "var(--pink)" }} />} />
        <WelcomeImageText src={Pic3} alt="welcome picture 3" title="BAR" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non rutrum felis. Pell blandit neque. Cras venenatis orci ut massa efficitur, eget pretium nulla blandit. Quisque sodales suscipit convallis. Ut feugiat iaculis est, a feugiat erat." icon={<PiCheersLight className="w-8 h-8" style={{ color: "var(--pink)" }} />} />
      </div>
    </section>
  );
};

export default Welcome;
