import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Button from "../../components/Button";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="">
      <header className="grid grid-cols-subgrid col-[full] ">
        <Header />
        <section className="grid col-[full] grid-cols-subgrid">
          <Image src={Footerbg} alt="Footerbg" className="col-span-full row-span-full w-full object-cover z-0 opacity-10 h-30" />
          <div className="grid col-[content] row-start-1">
            <Hero>CONTACT US</Hero>
          </div>
        </section>
      </header>
      <main className="">
        <Button>SEND</Button>
      </main>
      <footer className="grid col-[full] grid-cols-subgrid">
        <Image src={Footerbg} alt="Footerbg" className="col-span-full row-span-full w-full h-full object-cover z-0 opacity-10 " />
        <div className="grid col-[content] row-start-1">
          <Footer />
        </div>
      </footer>
    </div>
  );
}
