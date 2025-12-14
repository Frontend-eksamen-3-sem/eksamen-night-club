// import IndexHero from "./components/index/IndexHero";
import Header from "./components/Header";
import Welcome from "./components/index/Welcome";
import EventMonth from "./components/index/EventMonth";
import Gallery from "./components/index/Gallery";
import MusicCarousel from "./components/index/MusicCarousel";
import VideoCarousel from "./components/index/VideoCarousel";
// import Testimonials from "./components/index/Testimonials";
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
      <header className="grid grid-cols-subgrid col-[full] ">
        {/* <IndexHero /> */}
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
        {/* <Testimonials /> */}
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
