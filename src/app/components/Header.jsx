"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

const Header = () => {
  const [isSelect, setIsSelect] = useState(false);

  return (
    <section className="grid grid-cols-subgrid col-[full] border-t-2 border-b-2 border-accent font-semibold cursor-pointer top-0 capitalize bg-black text-white sticky p-4 ">
      <div className="grid col-[content]">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <Image src="/assets/Logo.png" alt="Logo" width={150} height={150} />
            </Link>
          </div>

          <nav className=" hidden  md:flex  ">
            <ul className="flex gap-5 list-none w-full justify-between">
              <li className="hover:text-accent">
                <Link href="/blog">HOME</Link>
              </li>
              <li className="hover:text-accent">
                <Link href="/blog">BLOG</Link>
              </li>
              <li className="hover:text-accent">
                <Link href="/booking">BOOK TABLE</Link>
              </li>
              <li className="hover:text-accent">
                <Link href="/contact">CONTACT US</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* <div className="flex justify-between items-center">
          <div className="md:hidden flex flex-col gap-1.5 cursor-pointer" onClick={() => setIsSelect(!isSelect)}>
            <div className="w-8 h-[3px] bg-white"></div>
            <div className="w-8 h-[3px] bg-white"></div>
            <div className="w-8 h-[3px] bg-white"></div>
          </div> */}

        {/* Mobile menu */}
        {/* {isSelect && (
            <div className="md:hidden absolute top-20 right-4 bg-black p-6 rounded-lg shadow-lg z-50">
              <ul className="flex flex-col gap-4 text-lg">
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
        </div> */}
      </div>
    </section>
  );
};

export default Header;
