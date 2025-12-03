import Image from "next/image";
import BottomLine from ""
const Title = ({ children, className = "" }) => {
  return (
    <div className={`w-full ${className}`}>
      <h1 className="w-full text-center">{children}</h1>
      <Image src={BottomLine} alt="title underline img" className="mx-auto mt-3" />
    </div>
  );
};

export default Title;
