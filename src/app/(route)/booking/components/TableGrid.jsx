import Table4 from "@/assets/table/table_1.png";
import Table6 from "@/assets/table/table_2.png";
import Table8 from "@/assets/table/table_3.png";
import TableCard from "./TableCard";

const tableImageMap = {
  1: Table4,
  2: Table4,
  3: Table6,
  4: Table4,
  5: Table8,
  6: Table4,
  7: Table4,
  8: Table6,
  9: Table4,
  10: Table8,
  11: Table4,
  12: Table4,
  13: Table6,
  14: Table4,
  15: Table8,
};

const TableGrid = () => {
  const tables = Array.from({ length: 15 }, (_, i) => {
    const number = i + 1;
    const img = tableImageMap[number];
    return { number, img };
  });

  return (
    <section className="grid grid-cols-5 gap-4 p-4">
      {tables.map((table) => (
        <TableCard key={table.number} src={table.img} number={table.number} />
      ))}
    </section>
  );
};

export default TableGrid;
