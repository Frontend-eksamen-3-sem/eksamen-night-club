import Title from "../Title";
import Image from "next/image";
import Gallery1 from "@/assets/content-img/gallery1_big.jpg";
import Gallery2 from "@/assets/content-img/gallery2_big.jpg";
import Gallery3 from "@/assets/content-img/gallery3_big.jpg";
import Gallery4 from "@/assets/content-img/gallery4_big.jpg";
import Gallery5 from "@/assets/content-img/gallery5_big.jpg";
import Gallery6 from "@/assets/content-img/gallery6_big.jpg";
import Gallery7 from "@/assets/content-img/gallery7_big.jpg";

const Gallery = () => {
  return (
    <div className="col-[full] ">
      <Title>NIGHT CLUB GALLERY</Title>
      <div className="grid grid-cols-6 grid-rows-2 items-stretch">
        <Image className="col-start-1 col-end-3 row-span-1 h-full w-full object-cover" src={Gallery1} alt="Gallery Image 1" />
        <Image className="col-start-3 col-end-4 row-span-1 h-full w-full object-cover" src={Gallery2} alt="Gallery Image 2" />
        <Image className="col-start-4 col-end-6 row-span-1 h-full w-full object-cover" src={Gallery3} alt="Gallery Image 3" />
        <Image className="col-start-6 col-end-7 row-span-1 h-full w-full object-cover" src={Gallery4} alt="Gallery Image 4" />
        <Image className="col-start-1 col-end-3 row-span-2 h-full w-full object-cover" src={Gallery5} alt="Gallery Image 5" />
        <Image className="col-start-3 col-end-5 row-span-2 h-full w-full object-cover" src={Gallery6} alt="Gallery Image 6" />
        <Image className="col-start-5 col-end-7 row-span-2 h-full w-full object-cover" src={Gallery7} alt="Gallery Image 7" />
      </div>
    </div>
  );
};

export default Gallery;
