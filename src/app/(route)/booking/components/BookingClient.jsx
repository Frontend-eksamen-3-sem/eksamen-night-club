"use client";
import { useState } from "react";
import TableGrid from "./TableGrid";
import BookingForm from "./BookingForm";

export default function BookingClient() {
  const [selectedTableNumber, setSelectedTableNumber] = useState(null);

  const handleSelectTable = (num) => {
    setSelectedTableNumber(num);
  };

  return (
    <div>
      <TableGrid onSelectTable={handleSelectTable} selectedTable={selectedTableNumber} />
      <BookingForm selectedTableNumber={selectedTableNumber} />
    </div>
  );
}
