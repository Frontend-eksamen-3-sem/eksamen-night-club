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
      <div className="flex">
        <Image src={Gallery1} alt="Gallery Image 1" width={500} height={500} />
        <Image src={Gallery2} alt="Gallery Image 2" width={500} height={500} />
        <Image src={Gallery3} alt="Gallery Image 3" width={500} height={500} />
        <Image src={Gallery4} alt="Gallery Image 4" width={500} height={500} />
        <Image src={Gallery5} alt="Gallery Image 5" width={500} height={500} />
        <Image src={Gallery6} alt="Gallery Image 6" width={500} height={500} />
        <Image src={Gallery7} alt="Gallery Image 7" width={500} height={500} />
      </div>
    </div>
  );
};

export default Gallery;
