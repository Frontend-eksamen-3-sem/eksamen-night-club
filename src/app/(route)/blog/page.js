import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Footer from "../../components/Footer";
import { Suspense } from "react";

import Image from "next/image";
import Footerbg from "@/assets/bg/footerbg.jpg";
import BlogCard from "./components/BlogCard";

export default function Blog({ searchParams }) {
  return (
    <>
      <header className="grid grid-cols-subgrid col-[full] ">
        <Header />
        <section className="grid col-[full] grid-cols-subgrid">
          <Image src={Footerbg} alt="Footerbg" className="col-span-full row-span-full w-full object-cover z-0 opacity-10 h-30" />
          <div className="grid col-[content] row-start-1">
            <Hero>BLOG</Hero>
          </div>
        </section>
      </header>

      <main className="grid ">
        <Suspense fallback={<div className="p-4">Loading blog posts…</div>}>
          <BlogCardContainer searchParams={searchParams} />
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

async function BlogCardContainer({ searchParams }) {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  return <BlogCard page={page} />;
}
