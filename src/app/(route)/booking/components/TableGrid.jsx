import Table4 from "@/assets/table/table_1.png";
import Table6 from "@/assets/table/table_2.png";
import Table8 from "@/assets/table/table_3.png";
import TableCard from "./TableCard";

const TableGrid = ({ onSelectTable, selectedTable }) => {
  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      <TableCard src={Table4} number={1} onSelect={onSelectTable} isSelected={selectedTable === 1} />
      <TableCard src={Table4} number={2} onSelect={onSelectTable} isSelected={selectedTable === 2} />
      <TableCard src={Table6} number={3} onSelect={onSelectTable} isSelected={selectedTable === 3} />
      <TableCard src={Table4} number={4} onSelect={onSelectTable} isSelected={selectedTable === 4} />
      <TableCard src={Table8} number={5} onSelect={onSelectTable} isSelected={selectedTable === 5} />
      <TableCard src={Table4} number={6} onSelect={onSelectTable} isSelected={selectedTable === 6} />
      <TableCard src={Table4} number={7} onSelect={onSelectTable} isSelected={selectedTable === 7} />
      <TableCard src={Table6} number={8} onSelect={onSelectTable} isSelected={selectedTable === 8} />
      <TableCard src={Table4} number={9} onSelect={onSelectTable} isSelected={selectedTable === 9} />
      <TableCard src={Table8} number={10} onSelect={onSelectTable} isSelected={selectedTable === 10} />
      <TableCard src={Table4} number={11} onSelect={onSelectTable} isSelected={selectedTable === 11} />
      <TableCard src={Table4} number={12} onSelect={onSelectTable} isSelected={selectedTable === 12} />
      <TableCard src={Table6} number={13} onSelect={onSelectTable} isSelected={selectedTable === 13} />
      <TableCard src={Table4} number={14} onSelect={onSelectTable} isSelected={selectedTable === 14} />
      <TableCard src={Table8} number={15} onSelect={onSelectTable} isSelected={selectedTable === 15} />
    </div>
  );
};

export default TableGrid;
