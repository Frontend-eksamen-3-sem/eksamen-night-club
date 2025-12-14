import Image from "next/image";
import { FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { BiLogoSnapchat } from "react-icons/bi";
import TestimonialFallback from "@/assets/content-img/blog_full1.jpg";

const TestimonialsCard = ({ name, content, asset, facebook, twitter }) => (
  <div className="p-6 w-full max-w-[830px] mx-auto flex flex-col items-center">
    <Image src={asset?.url || TestimonialFallback} alt={name} width={200} height={200} unoptimized className="w-32 h-32  mb-4" />
    <h2 className="pt-2">{name}</h2>
    <p className="text-center pt-4 pb-6">{content}</p>
    <div className="flex gap-2 justify-center">
      <a href={facebook} target="_blank" rel="noopener noreferrer" className="border border-white w-10 h-10 flex items-center justify-center">
        <TiSocialFacebook color="white" />
      </a>
      <a href={twitter} target="_blank" rel="noopener noreferrer" className="border border-white w-10 h-10 flex items-center justify-center">
        <FaTwitter color="white" />
      </a>
      <a href="/" className="border border-white w-10 h-10 flex items-center justify-center">
        <BiLogoSnapchat color="white" />
      </a>
    </div>
  </div>
);

export default TestimonialsCard;
