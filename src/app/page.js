import IndexHero from "./components/index/IndexHero";
import Testimonials from "./components/index/Testimonials";
import Header from "./components/Header";
import Welcome from "./components/index/Welcome";
import EventMonth from "./components/index/EventMonth";
import Gallery from "./components/index/Gallery";
import MusicCarousel from "./components/index/MusicCarousel";
import VideoCarousel from "./components/index/VideoCarousel";
import RecentBlog from "./components/index/RecentBlog";
// import EmailForm from "./components/index/EmailForm";
import Button from "./components/Button";
import Footer from "./components/Footer";
import { Suspense } from "react";

import Image from "next/image";
import Footerbg from "@/assets/bg/footerbg.jpg";

export default function Home() {
  return (
    <>
      <section className="grid col-[full] grid-cols-subgrid">
        <IndexHero />
      </section>
      <header className="grid grid-cols-subgrid col-[full] sticky top-0 z-50">
        <Header />
      </header>

      <main>
        <Welcome />
        <Suspense fallback={<div className="p-4">Loading events…</div>}>
          <EventMonth />
        </Suspense>
        <Gallery />
        <MusicCarousel />
        <VideoCarousel />
        <Suspense fallback={<div className="p-4">Loading testimonials…</div>}>
          <section className="grid col-[full] grid-cols-subgrid">
            <Image src={Footerbg} alt="Footerbg" className="col-span-full row-span-full w-full object-cover z-0 opacity-10 h-120" />
            <div className="col-[content] row-start-1">
              <Testimonials />
            </div>
          </section>
        </Suspense>
        <RecentBlog />
        {/* <EmailForm /> */}
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
