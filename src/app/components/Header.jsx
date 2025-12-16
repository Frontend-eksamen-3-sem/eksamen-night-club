"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import BottomLine from "@/assets/bottom_line2.png";
import Logo from "@/assets/icon/Logo_main.svg";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isSelect, setIsSelect] = useState(false);

  const currentPath = usePathname();

  return (
    <section className="grid grid-cols-subgrid col-[full] border-t-2 border-b-2 border-accent font-semibold capitalize bg-black items-center h-15 text-text ">
      <div className="col-start-1 row-start-1 self-start w-0 h-0 border-l-accent border-l-25 border-b-25 border-b-transparent md:border-l-30 md:border-b-30 " />
      <div className="col-start-4 row-end-2 self-end w-0 h-0 border-r-25 border-r-accent border-t-25 border-t-transparent justify-self-end md:border-r-30 md:border-t-30" />

      <div className="grid col-[content]">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <Image src={Logo} alt="Logo" className="w-auto h-auto object-cover" width={100} height={100} unoptimized />
            </Link>
          </div>

          {/* Burger menu */}
          <div className="md:hidden flex flex-col gap-1.5 cursor-pointer" onClick={() => setIsSelect(!isSelect)}>
            <div className="w-8 h-[3px] bg-text"></div>
            <div className="w-8 h-[3px] bg-text"></div>
            <div className="w-8 h-[3px] bg-text"></div>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex">
            <ul className="flex gap-12 list-none justify-between">
              <li className={`flex flex-col items-center ${currentPath === "/" ? "text-accent" : "hover:text-accent"}`}>
                <Link href="/">HOME</Link>
                <div className=" flex items-center">{currentPath === "/" && <Image src={BottomLine} width={50} height={6} alt="active" unoptimized />}</div>
              </li>

              <li className={`flex flex-col items-center ${currentPath === "/blog" ? "text-accent" : "hover:text-accent"}`}>
                <Link href="/blog">BLOG</Link>
                <div className="flex items-center">{currentPath === "/blog" && <Image src={BottomLine} width={50} height={6} alt="active" unoptimized />}</div>
              </li>

              <li className={`flex flex-col items-center ${currentPath === "/booking" ? "text-accent" : "hover:text-accent"}`}>
                <Link href="/booking">BOOK TABLE</Link>
                <div className=" flex items-center">{currentPath === "/booking" && <Image src={BottomLine} width={50} height={6} alt="active" unoptimized />}</div>
              </li>
              <li className={`flex flex-col items-center ${currentPath === "/contact" ? "text-accent" : "hover:text-accent"}`}>
                <Link href="/contact">CONTACT US</Link>
                <div className=" flex items-center">{currentPath === "/contact" && <Image src={BottomLine} width={50} height={6} alt="active" unoptimized />}</div>
              </li>
            </ul>
          </nav>
        </div>

        {/* Burger menu */}
        {isSelect && (
          <div className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex flex-col p-12">
            <div className="flex justify-end">
              <button className="text-text" onClick={() => setIsSelect(false)}>
                <IoMdClose size={40} />
              </button>
            </div>
            <ul className="flex flex-col justify-center items-center gap-10 text-lg mt-50">
              <li className={`${currentPath === "/" ? "text-accent" : "text-text"}`} onClick={() => setIsSelect(false)}>
                <Link href="/">HOME</Link>
              </li>
              <li className={`${currentPath === "/blog" ? "text-accent" : "text-text"}`} onClick={() => setIsSelect(false)}>
                <Link href="/blog">BLOG</Link>
              </li>
              <li className={`${currentPath === "/booking" ? "text-accent" : "text-text"}`} onClick={() => setIsSelect(false)}>
                <Link href="/booking">BOOK TABLE</Link>
              </li>
              <li className={`${currentPath === "/contact" ? "text-accent" : "text-text"}`} onClick={() => setIsSelect(false)}>
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
