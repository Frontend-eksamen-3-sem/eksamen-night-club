// import IndexHero from "./components/index/IndexHero";
import Header from "./components/Header";
// import Welcome from "./components/index/Welcome";
// import EventMonth from "./components/index/EventMonth";
// import Gallery from "./components/index/Gallery";
// import MusicCarousel from "./components/index/MusicCarousel";
// import VideoCarousel from "./components/index/VideoCarousel";
// import Testimonials from "./components/index/Testimonials";
// import RecentBlog from "./components/index/RecentBlog";
// import EmailForm from "./components/index/EmailForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="">
      <main className="">
        {/* <IndexHero /> */}
        <Header />
        {/* <Welcome />
        <EventMonth />
        <Gallery />
        <MusicCarousel />
        <VideoCarousel />
        <Testimonials />
        <RecentBlog />
        <EmailForm /> */}
        <Footer />
      </main>
    </div>
  );
}
