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

export default function Home() {
  return (
    <>
      <header className="grid col-[full]">
        {/* <IndexHero /> */}
        <Header />
      </header>
      <main className="grid">
        <Welcome />
        <EventMonth />
        <Gallery />
        <MusicCarousel />
        <VideoCarousel />
        {/* <Testimonials /> */}
        <RecentBlog />
        {/* <EmailForm /> */}
        <Button>READ MORE</Button>
        <Footer />
      </main>

      <footer className="grid "></footer>

      {/* <foote className="col-[full] grid">
   
      </footer> */}
    </>
  );
}
