import Image from "next/image";

const TableCard = ({ src, number }) => {
  return (
    <div className="grid grid-cols-3 grid-rows-3">
      <Image src={src} alt={`Table ${number}`} className="grid col-start-1 row-start-1 col-end-4 row-end-4" />
      <div className="grid col-start-2 row-start-2 items-center justify-center">
        <h1>{number}</h1>
      </div>
    </div>
  );
};

export default TableCard;
