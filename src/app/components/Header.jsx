"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import BottomLine from "@/assets/bottom_line2.png";
import Logo from "@/assets/Logo.png";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isSelect, setIsSelect] = useState(false);

  const currentPath = usePathname();

  return (
    <section className="grid grid-cols-subgrid col-[full] border-t-2 border-b-2 border-accent font-semibold capitalize bg-black items-center text-white sticky  ">
      <div className="col-start-1 row-start-1 self-start w-0 h-0 border-l-accent border-l-25 border-b-25 border-b-transparent md:border-l-30 md:border-b-30 " />
      <div className="col-start-4 row-end-2 self-end w-0 h-0 border-r-25 border-r-accent border-t-25 border-t-transparent justify-self-end md:border-r-30 md:border-t-30" />

      <div className="grid col-[content] h-15">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <Image src={Logo} alt="Logo" width={150} height={150} />
            </Link>
          </div>

          {/* Burger menu */}
          <div className="md:hidden flex flex-col gap-1.5 cursor-pointer" onClick={() => setIsSelect(!isSelect)}>
            <div className="w-8 h-[3px] bg-white"></div>
            <div className="w-8 h-[3px] bg-white"></div>
            <div className="w-8 h-[3px] bg-white"></div>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex">
            <ul className="flex gap-8 list-none w-full justify-between">
              <li className={`flex w-[110] flex-col items-center ${currentPath === "/" ? "text-accent" : "hover:text-accent"}`}>
                <Link href="/">HOME</Link>
                <div className=" flex items-center">{currentPath === "/" && <Image src={BottomLine} width={100} height={6} alt="active" />}</div>
              </li>

              <li className={`flex w-[110] flex-col items-center ${currentPath === "/blog" ? "text-accent" : "hover:text-accent"}`}>
                <Link href="/blog">BLOG</Link>
                <div className="flex items-center">{currentPath === "/blog" && <Image src={BottomLine} width={100} height={6} alt="active" />}</div>
              </li>

              <li className={`flex w-[110] flex-col ml-4 mr-8 items-center ${currentPath === "/booking" ? "text-accent" : "hover:text-accent"}`}>
                <Link href="/booking">BOOK TABLE</Link>
                <div className=" flex items-center">{currentPath === "/booking" && <Image src={BottomLine} width={100} height={6} alt="active" />}</div>
              </li>
              <li className={`flex w-[110] flex-col  items-center ${currentPath === "/contact" ? "text-accent" : "hover:text-accent"}`}>
                <Link href="/contact">CONTACT US</Link>
                <div className=" flex items-center">{currentPath === "/contact" && <Image src={BottomLine} width={100} height={6} alt="active" />}</div>
              </li>
            </ul>
          </nav>
        </div>

        {/* Overlay menu */}
        {isSelect && (
          <div className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex flex-col pt-4 pr-4">
            <div className="flex justify-end">
              <button className=" text-white " onClick={() => setIsSelect(false)}>
                <IoMdClose size={40} />
              </button>
            </div>
            <ul className="flex flex-col justify-center items-center gap-10 text-lg mt-50">
              <li className="hover:text-accent" onClick={() => setIsSelect(false)}>
                <Link href="/blog">HOME</Link>
              </li>
              <li className="hover:text-accent" onClick={() => setIsSelect(false)}>
                <Link href="/blog">BLOG</Link>
              </li>
              <li className="hover:text-accent" onClick={() => setIsSelect(false)}>
                <Link href="/booking">BOOK TABLE</Link>
              </li>
              <li className="hover:text-accent" onClick={() => setIsSelect(false)}>
                <Link href="/contact">CONTACT US</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default Header;
