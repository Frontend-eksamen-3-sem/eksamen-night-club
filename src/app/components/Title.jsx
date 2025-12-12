import Image from "next/image";
import BottomLine from "@/assets/bottom_line.png";
const Title = ({ children, className = "" }) => {
  return (
    <div className={`col-[content] w-full max-w-md mx-auto flex flex-col items-center mt-14 mb-8 ${className}`}>
      <h1 className="w-full text-center">{children}</h1>
      <div className="w-full max-w-50 mx-auto mt-3">
        <Image src={BottomLine} alt="title underline img" className="w-full" />
      </div>
    </div>
  );
};

export default Title;
