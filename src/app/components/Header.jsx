import Image from "next/image";
import Link from "next/link";

// import { useState } from "react";

const Header = () => {
  // const [isSelect, setIsSelect] = useState(false);

  return (
    <section className="grid grid-cols-subgrid col-[full] justify-between font-semibold cursor-pointer sticky p-4">
      <div className="grid col-[content] gap-4">
        <div className="flex gap-10 mt-5  items-center">
          <div>
            <Link href="/">
              <Image src="/assets/Logo.png" alt="Logo" width={150} height={150} />
            </Link>
          </div>

          <nav className="hidden md:flex gap-10 items-center">
            <ul className="flex list-none">
              <li>
                <Link href="/">Blog</Link>
              </li>
              <li>
                <Link href="/">Book Table</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
              <li>
                <Link href="/">Log In</Link>
              </li>
            </ul>
          </nav>

          <div>
            <div className="w-100% bg-white"></div>
            <div className="w-100% bg-white"></div>
            <div className="w-100% bg-white"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
