"use client";
import Title from "../Title";
import AudioPlayer from "react-h5-audio-player";
// import "react-h5-audio-player/lib/styles.css";
import { useState } from "react";

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
  // {
  //   id: 6,
  //   name: "Echo Twin",
  //   image: "/assets/content-img/track2.jpg",
  //   thumb: "/assets/content-img/track2.jpg",
  //   track: "/assets/media/fashion-red-tape.mp3",
  // },
];

const MusicCarousel = () => {
  const [currentArtist, setCurrentArtist] = useState(artists[0]);
  return (
    <>
      <Title>NIGHT CLUB TRACK</Title>
      <section className="grid col-[content]">
        <div
          className="grid grid-cols-1 
      grid-rows-[1fr_auto_auto] 
    
      gap-2 bg-black "
        >
          <div className="flex gap-5">
            <div className="aspect-square  w-70 overflow-hidden ">
              <img src={currentArtist.image} alt={currentArtist.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col justify-center gap-2">
              <h2 className="text-white text-2xl font-medium">{currentArtist.name}</h2>
              <div className="w-[800px] max-w-full">
                <AudioPlayer src={currentArtist.track} autoPlayAfterSrcChange />
              </div>
            </div>
          </div>

          <div className="grid gap-4 row-start-2 col-start-1 col-end-3">
            <div className="flex gap-2 ">
              {artists.map((artist) => (
                <button
                  key={artist.id}
                  onClick={() => setCurrentArtist(artist)}
                  className={`w-50 h-50 overflow-hidden transition
              ${artist.id === currentArtist.id ? "ring-2 ring-yellow-400" : "opacity-60 hover:opacity-100"}
            `}
                >
                  <img src={artist.thumb} alt={artist.name} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MusicCarousel;
