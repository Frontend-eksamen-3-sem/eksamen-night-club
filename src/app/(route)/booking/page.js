"use client";
import { useState } from "react";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import TableGrid from "./components/TableGrid";
import Footer from "../../components/Footer";
import Image from "next/image";
import Footerbg from "@/assets/bg/footerbg.jpg";
import BookingForm from "./components/BookingForm";

export default function Booking() {
  const [selectedTableNumber, setSelectedTableNumber] = useState(null);
  return (
    <>
      <header className="grid grid-cols-subgrid col-[full] ">
        {/* <IndexHero /> */}

        <Header />
      </header>
      <main className="grid col-[content]">
        <Hero>BOOK TABLE</Hero>
        <TableGrid onSelectTable={setSelectedTableNumber} selectedTable={selectedTableNumber} />
        <BookingForm selectedTableNumber={selectedTableNumber} />
      </main>
      <footer className="grid col-[full] grid-cols-subgrid">
        <Image src={Footerbg} alt="Footerbg" className="col-span-full row-span-full w-full h-full object-cover z-0 opacity-10 " />
        <div className="grid col-[content] row-start-1">
          <Footer />
        </div>
      </footer>
    </>
  );
}
