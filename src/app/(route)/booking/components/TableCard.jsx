import Image from "next/image";

const TableCard = ({ src, number, onSelect, isSelected }) => {
  return (
    <button type="button" onClick={() => onSelect(number)} className={`grid grid-cols-3 grid-rows-3 cursor-pointer transition-all ${isSelected ? "opacity-100 ring-2 ring-white" : "opacity-75 hover:opacity-90"}`} aria-pressed={isSelected} aria-label={`Table ${number}`}>
      <Image src={src} alt={`Table ${number}`} className="grid col-start-1 row-start-1 col-end-4 row-end-4" />
      <div className="grid col-start-2 row-start-2 items-center justify-center">
        <h1 className="text-white">{number}</h1>
      </div>
    </button>
  );
};

export default TableCard;
