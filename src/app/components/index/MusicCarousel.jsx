"use client";
import Title from "../Title";
import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { FaRegPlayCircle } from "react-icons/fa";

const artists = [
  {
    id: 1,
    name: "DJ Nova",
    image: "/assets/content-img/track_thumb.jpg",
    thumb: "/assets/content-img/track_thumb.jpg",
    track: "/assets/media/black-box-funky.mp3",
  },
  {
    id: 2,
    name: "Luna Pulse",
    image: "/assets/content-img/track1.jpg",
    thumb: "/assets/content-img/track1.jpg",
    track: "/assets/media/euphoria.mp3",
  },
  {
    id: 3,
    name: "Echo Twin",
    image: "/assets/content-img/track2.jpg",
    thumb: "/assets/content-img/track2.jpg",
    track: "/assets/media/fashion-red-tape.mp3",
  },
  {
    id: 4,
    name: "DJ Nova",
    image: "/assets/content-img/track_thumb.jpg",
    thumb: "/assets/content-img/track_thumb.jpg",
    track: "/assets/media/black-box-funky.mp3",
  },
  {
    id: 5,
    name: "Luna Pulse",
    image: "/assets/content-img/track1.jpg",
    thumb: "/assets/content-img/track1.jpg",
    track: "/assets/media/euphoria.mp3",
  },
  {
    id: 6,
    name: "Echo Twin",
    image: "/assets/content-img/track2.jpg",
    thumb: "/assets/content-img/track2.jpg",
    track: "/assets/media/fashion-red-tape.mp3",
  },
  {
    id: 7,
    name: "DJ Nova",
    image: "/assets/content-img/track_thumb.jpg",
    thumb: "/assets/content-img/track_thumb.jpg",
    track: "/assets/media/black-box-funky.mp3",
  },
];

const MusicCarousel = () => {
  const [currentArtist, setCurrentArtist] = useState(artists[0]);

  return (
    <>
      <Title>NIGHT CLUB TRACK</Title>

      <section className="grid col-[content] gap-6 bg-black">
        <div className="grid md:grid-cols-[auto_1fr] gap-6 items-center">
          <div className="hidden md:block aspect-square w-70 overflow-hidden">
            <img src={currentArtist.image} alt={currentArtist.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid gap-3">
            <h2 className="text-white text-2xl font-medium">{currentArtist.name}</h2>

            <div className="md:w-[800px] max-w-full">
              <AudioPlayer src={currentArtist.track} autoPlayAfterSrcChange />
            </div>
          </div>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="grid gap-5 md:w-full "
        >
          <CarouselContent>
            {artists.map((artist) => {
              const isActive = artist.id === currentArtist.id;

              return (
                <CarouselItem
                  key={artist.id}
                  className="
                  basis-full 
                  sm:basis-1/2 
                  md:basis-1/5
                "
                >
                  <button onClick={() => setCurrentArtist(artist)} className="grid w-full aspect-square ">
                    <div className="grid row-start-1 col-start-1 w-full h-full overflow-hidden">
                      <img src={artist.thumb} alt={artist.name} className="row-start-1 col-start-1 col-end-4 row-end-5 w-full h-full object-cover z-0" />
                      <motion.div className="col-start-1 row-start-1 col-end-4 row-end-5 w-0 h-0 border-l-60 border-l-accent border-b-60 border-b-transparent z-20 " initial={{ x: -80, y: -80, opacity: 0 }} animate={isActive ? { x: 0, y: 0, opacity: 1 } : { x: -80, y: -80, opacity: 0 }} transition={{ duration: 0.45, ease: "easeOut" }} />
                      <motion.div className="col-start-1 row-start-1 col-end-4 row-end-5 w-0 h-0 border-r-60 border-r-accent border-t-60 border-t-transparent justify-self-end self-end z-20" initial={{ x: 80, y: 80, opacity: 0 }} animate={isActive ? { x: 0, y: 0, opacity: 1 } : { x: 80, y: 80, opacity: 0 }} transition={{ duration: 0.45, ease: "easeOut" }} />
                      <motion.div className="grid col-start-2 row-start-2 z-10 justify-center" initial={{ opacity: 0 }} animate={isActive ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.45, ease: "easeOut" }}>
                        <FaRegPlayCircle fill="var(--pink)" className="w-10 h-10" />
                      </motion.div>
                      <motion.div className="bg-black py-2 px-3 col-start-1 col-end-4 row-start-4 z-10 text-white" initial={{ y: 100, opacity: 0 }} animate={isActive ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }} transition={{ duration: 0.45, ease: "easeOut" }}>
                        {artist.name}
                      </motion.div>
                    </div>
                  </button>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          {artists.length > 5 && (
            <div className="grid grid-cols-2 justify-items-center md:block">
              <CarouselPrevious
                className=" 
        static!
        transform-none!
        translate-y-0!
        top-auto!
        left-auto!
        md:absolute!
        md:top-1/2!
        md:-left-12!
        md:-translate-y-1/2!
        border-white! text-white! 
      "
              />

              <CarouselNext
                className="
        static! 
        transform-none!
        translate-y-0!
        top-auto!
        left-auto!
        md:absolute!
        md:top-1/2!
        md:-left-12!
        md:-translate-y-1/2!
        border-white! text-white!
      "
              />
            </div>
          )}
        </Carousel>
      </section>
    </>
  );
};

export default MusicCarousel;
