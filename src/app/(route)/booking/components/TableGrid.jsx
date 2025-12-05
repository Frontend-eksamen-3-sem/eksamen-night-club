import Table4 from "@/assets/table/table_1.png";
import Table6 from "@/assets/table/table_2.png";
import Table8 from "@/assets/table/table_3.png";
import TableCard from "./TableCard";

const TableGrid = () => {
  return (
    <section className="grid grid-cols-5 gap-4 p-4">
      <TableCard src={Table4} number={1} />
      <TableCard src={Table4} number={2} />
      <TableCard src={Table6} number={3} />
      <TableCard src={Table4} number={4} />
      <TableCard src={Table8} number={5} />
      <TableCard src={Table4} number={6} />
      <TableCard src={Table4} number={7} />
      <TableCard src={Table6} number={8} />
      <TableCard src={Table4} number={9} />
      <TableCard src={Table8} number={10} />
      <TableCard src={Table4} number={11} />
      <TableCard src={Table4} number={12} />
      <TableCard src={Table6} number={13} />
      <TableCard src={Table4} number={14} />
      <TableCard src={Table8} number={15} />
    </section>
  );
};

export default TableGrid;
