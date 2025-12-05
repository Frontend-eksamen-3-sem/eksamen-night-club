import Image from "next/image";
import BottomLine from "@/assets/bottom_line2.png";
const Title = ({ children, className = "" }) => {
  return (
    <div className={`w-full grid col-[content] ${className}`}>
      <h1 className="w-full text-center">{children}</h1>
      <Image src={BottomLine} alt="title underline img" className="mx-auto mt-3" />
    </div>
  );
};

export default Title;
