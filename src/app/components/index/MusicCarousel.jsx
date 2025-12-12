"use client";
import Title from "../Title";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
const AudioOne = "/assets/media/black-box-funky.mp3";

const MusicCarousel = () => {
  return (
    <section className="grid col-[content] pt-10">
      <div>
        <Title>NIGHT CLUB TRACK</Title>
        <AudioPlayer
          autoPlay
          src={AudioOne}
          onPlay={(e) => console.log("onPlay")}
          // other props here
        />
      </div>
    </section>
  );
};

export default MusicCarousel;
