import Header from "../../components/Header";
import Hero from "../../components/Hero";
import BookingForm from "./components/BookingForm";
import Footer from "../../components/Footer";
import Image from "next/image";
import Footerbg from "@/assets/bg/footerbg.jpg";
import { Suspense } from "react";

export default function Booking() {
  return (
    <>
      <header className="grid grid-cols-subgrid col-[full] ">
        <Header />
        <section className="grid col-[full] grid-cols-subgrid">
          <Image src={Footerbg} alt="Footerbg" className="col-span-full row-span-full w-full object-cover z-0 opacity-10 h-30" />
          <div className="grid col-[content] row-start-1">
            <Hero>BOOK TABLE</Hero>
          </div>
        </section>
      </header>
      <main>
        <Suspense fallback={<div>Loading booking form...</div>}>
          <BookingForm />
        </Suspense>
      </main>
      <footer className="grid col-[full] grid-cols-subgrid">
        <Image src={Footerbg} alt="Footerbg" className="col-span-full row-span-full w-full h-full object-cover z-0 opacity-10 " />
        <div className="grid col-[content] row-start-1 justify-center">
          <Footer />
        </div>
      </footer>
    </>
  );
}
