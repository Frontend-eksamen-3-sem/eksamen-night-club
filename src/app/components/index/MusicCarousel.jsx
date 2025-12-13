"use client";
import Title from "../Title";
import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";


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
    name: "Echo Twin",
    image: "/assets/content-img/track2.jpg",
    thumb: "/assets/content-img/track2.jpg",
    track: "/assets/media/fashion-red-tape.mp3",
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
          className="w-full"
        >
          <CarouselContent>
            {artists.map((artist) => (
              <CarouselItem
                key={artist.id}
                className="
                  basis-full 
                  sm:basis-1/2 
                  md:basis-1/5
                "
              >
                <button
                  onClick={() => setCurrentArtist(artist)}
                  className={`w-full aspect-square overflow-hidden transition
                    ${artist.id === currentArtist.id ? "ring-2 ring-yellow-400" : "opacity-60 hover:opacity-100"}
                  `}
                >
                  <img src={artist.thumb} alt={artist.name} className="w-full h-full object-cover" />
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>

          {artists.length > 5 && (
            <>
              <CarouselPrevious className="border-white! text-white!" />
              <CarouselNext className="border-white! text-white!" />
            </>
          )}
        </Carousel>
      </section>
    </>
  );
};

export default MusicCarousel;
