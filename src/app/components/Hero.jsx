import Image from "next/image";
import BottomLine from "@/assets/bottom_line.png";

const Hero = ({ children, className = "" }) => {
  return (
    <div className={`w-full max-w-md mx-auto mt-8 ${className}`}>
      <h1 className="w-full text-center">{children}</h1>
      <div className="w-full max-w-50 mx-auto mt-3">
        <Image src={BottomLine} alt="title underline img" />
      </div>
    </div>
  );
};

export default Hero;
