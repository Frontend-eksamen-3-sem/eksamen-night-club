import Title from "../Title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const video = [
  {
    id: 1,
    video: "/assets/media/video-dj-crowd1.mp4",
  },
  {
    id: 2,
    video: "/assets/media/video-crowd.mp4",
  },
  {
    id: 3,
    video: "/assets/media/video-dj-crowd-2.mp4",
  },
];

const videos = video.slice(-2);

const VideoCarousel = () => {
  return (
    <>
      <section className="col-[content] mb-8 mt-8">
        <Title>LATEST VIDEO</Title>
        <div className="flex justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-[70vw] relative"
          >
            <CarouselContent>
              {videos.map((video) => (
                <CarouselItem key={video.id}>
                  <video src={video.video} autoPlay muted loop playsInline className="w-full h-full" />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-4 flex justify-center gap-4">
              <CarouselPrevious className="static !translate-y-0 !text-text" />
              <CarouselNext className="static !translate-y-0 !text-text" />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default VideoCarousel;
