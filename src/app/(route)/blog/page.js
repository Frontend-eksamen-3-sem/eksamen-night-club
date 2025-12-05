import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import TextCom from "./components/TextCom";

import Image from "next/image";
import Footerbg from "@/assets/bg/footerbg.jpg";
import BlogCard from "./components/BlogCard";


export default function Blog() {
  return (
    <>
      <header className="grid grid-cols-subgrid col-[full] ">
        {/* <IndexHero /> */}

        <Header />
      </header>

      <main className="grid col-[content]">
        <Hero>BLOG</Hero>
        {/* <Button>READ MORE</Button> */}
        <BlogCard />
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
