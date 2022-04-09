import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt2">
          <img src="img/logo.svg" alt="" />
        </div>
        {/* Menu Items */}
        <div className="hidden md:flex space-x-6">
          <Link href="/">
            <span className="hover:text-violet-800 cursor-pointer">
              Pricing
            </span>
          </Link>
          <Link href="/">
            <span className="hover:text-violet-800 cursor-pointer">
              Products
            </span>
          </Link>
          <Link href="/">
            <span className="hover:text-violet-800 cursor-pointer">
              Careers
            </span>
          </Link>
          <Link href="/">
            <span className="hover:text-violet-800 cursor-pointer">
              About Us
            </span>
          </Link>
          <Link href="/">
            <span className="hover:text-violet-800 cursor-pointer">
              Contact
            </span>
          </Link>
        </div>
        <Link href="/">
          <button
            className="hidden md:block p-3 px-6 pt-2 text-white bg-red-500 rounded-full
             baseline hover:bg-red-300 cursor-pointer"
          >
            Get Started
          </button>
        </Link>

        {/* Hamburger Icon */}

        <button
          onClick={() => setOpen((prev) => !prev)}
          className={"hamburger md:hidden focus:outline-none " + (open ? 'open' : 'block')}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <div className={"absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md " + (open ? '' : 'hidden')}>
          <Link href="/">Pricing</Link>
          <Link href="/">Product</Link>
          <Link href="/">About Us</Link>
          <Link href="/">Careers</Link>
          <Link href="/">Community</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
