import Image from "next/image";

const TableCard = ({ src, number }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3 w-[120px] h-[120px]">
      <Image src={src} alt={`Table ${number}`} className="grid col-span-3 row-span-3" />

      <div className="grid col-start-2 row-start-2  items-center justify-center">
        <span className="text-white text-xl font-bold">{number}</span>
      </div>
    </div>
  );
};

export default TableCard;
