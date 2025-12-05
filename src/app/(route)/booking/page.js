import Header from "../../components/Header";
import Hero from "../../components/Hero";
import TableGrid from "./components/TableGrid";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

export default function Booking() {
  return (
    <div className="">
      <main className="">
        <Header />
        <Hero>BOOK TABLE</Hero>
        <Button>RESERVE</Button>
        <TableGrid />
        <Footer />
      </main>
    </div>
  );
}
