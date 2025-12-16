import Image from "next/image";
import { Suspense } from "react";
import { FaTwitter } from "react-icons/fa";
import Logo from "@/assets/icon/Logo_main.svg";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiLogoSnapchat } from "react-icons/bi";
import Link from "next/link";

const Footer = async () => {
  return (
    <Suspense fallback={<div className="p-4">Loading categories…</div>}>
      <section className="grid grid-cols-subgrid grid-rows-subgrid col-[content] bg-black my-10">
        <div className="grid z-10 gap-4 md:col-[content] content-center text-center md:text-left justify-items-center md:justify-items-stretch">
          <div className="grid md:col-1 md:row-start-1 md:row-end-5 md:mr-25 content-center gap-5 justify-items-center md:justify-items-start">
            <Image src={Logo} alt="Logo" width={150} height={150} className="mb-4" />
            <div className="">
              <h3 className="uppercase">Location</h3>
              <p>
                Kompagnistræde 278 <br />
                1265 Købehavn K
              </p>
            </div>

            <div>
              <h3 className="uppercase">Opening Hours</h3>
              <p>
                WED - THU: 10:30 PM TO 3 AM <br /> SAT - SUN: 11 PM TO 5 AM
              </p>
            </div>
          </div>
          <FetchFooter />

          <div className="hidden md:grid  md:col-start-3 md:not-first:col-end-4 gap-4">
            <h3>RECENT TWEETS</h3>
            <div className="flex gap-2">
              <FaTwitter color="#ff2a70" width={50} height={50} className="w-20" />
              <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora obcaecati possimus </p>
                <h4>5 hours ago</h4>
              </div>
            </div>
            <div className="flex gap-2">
              <FaTwitter color="#ff2a70" width={50} height={50} className="w-20" />
              <div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus vitae id earum architecto</p>
                <h4>5 hours ago</h4>
              </div>
            </div>
          </div>
          <section className="md:col-span-3 mt-4">
            <div className="flex flex-col gap-4 md:flex-row items-center md:w-full content-center text-center md:text-left">
              <p className="flex-1 text-center md:text-left">Night Club PSD Template - All Rights Reserved</p>

              <div className="text-center">
                <p>Stay Connected With Us</p>
                <div className="flex gap-2 justify-center">
                  <a href="/" className="border border-white w-10 h-10 flex items-center justify-center hover:opacity-90">
                    <TiSocialFacebook color="white" />
                  </a>
                  <a href="/" className="border border-white w-10 h-10 flex items-center justify-center hover:opacity-90">
                    <BiLogoSnapchat color="white" />
                  </a>
                  <a href="/" className="border border-white w-10 h-10 flex items-center justify-center hover:opacity-90">
                    <AiOutlineInstagram color="white" />
                  </a>
                </div>
              </div>
              <p className="flex-1 text-right ">Copyright © NightClub</p>
            </div>
          </section>
        </div>
      </section>
    </Suspense>
  );
};

export default Footer;

const FetchFooter = async () => {
  "use server";
  const response = await fetch("http://localhost:4000/blogposts");
  const posts = await response.json();

  const recent = posts.slice(0, 2);

  return (
    <div className=" hidden md:grid  md:col-2 md:row-start-1 md:row-end-5 gap-2">
      <h3 className="text-accent">RECENT POSTS</h3>

      {recent.map((post) => (
        <Link href={`/blog/${post.id}`} key={post.id}>
          <div className="flex gap-4">
            <Image src={post.asset?.url} alt={post.title} width={50} height={50} unoptimized className="w-20 h-20 object-cover" />
            <div>
              <p>{post.content?.slice(0, 100)}…</p>
              <h4>April 17 2018 {post.date}</h4> {/* dato findes ikke i api*/}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
