import Image from "next/image";
import BottomLine from "@/assets/bottom_line.png";
const Title = ({ children, className = "" }) => {
  return (
    <div className={`col-[content] w-full max-w-md mx-auto flex flex-col items-center ${className}`}>
      <h1 className="w-fit text-center">{children}</h1>
      <Image src={BottomLine} alt="title underline img" className="w-full" />
    </div>
  );
};

export default Title;
