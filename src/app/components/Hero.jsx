import Image from "next/image";
import BottomLine from "@/assets/bottom_line.png";

const Hero = ({ children, className = "" }) => {
  return (
    <div className={`w-full ${className}`}>
      <h1 className="w-full text-center">{children}</h1>
      <Image src={BottomLine} alt="title underline img" className="mx-auto mt-3" />
    </div>
  );
};

export default Hero;
