import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-slate-800 flex flex-col-reverse justify-between lg:px-24 md:px-12 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
      <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
        <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
        </div>
        <div>
          <img src="img/logo-white.svg" className="h-8" alt="" />
        </div>
        <div className="flex justify-center space-x-4">
          <Link href="/">
            <img src="img/icon-facebook.svg" alt="" className="h-8" />
          </Link>
          <Link href="/">
            <img src="img/icon-youtube.svg" alt="" className="h-8" />
          </Link>
          <Link href="/">
            <img src="img/icon-twitter.svg" alt="" className="h-8" />
          </Link>
          <Link href="/">
            <img src="img/icon-pinterest.svg" alt="" className="h-8" />
          </Link>
          <Link href="/">
            <img src="img/icon-instagram.svg" alt="" className="h-8" />
          </Link>
        </div>
      </div>
      <div className="flex justify-around space-x-32">
        <div className="flex flex-col space-y-3 text-white">
          <li className="list-none hover:text-red-500">
            <Link href="/">Home</Link>
          </li>
          <li className="list-none hover:text-red-500">
            <Link href="/">Pricing</Link>
          </li>
          <li className="list-none hover:text-red-500">
            <Link href="/">Products</Link>
          </li>
          <li className="list-none hover:text-red-500">
            <Link href="/">About</Link>
          </li>
        </div>
        <div className="flex flex-col space-y-3 text-white">
          <li className="list-none hover:text-red-500">
            <Link href="/">Careers</Link>
          </li>
          <li className="list-none hover:text-red-500">
            <Link href="/">Community</Link>
          </li>
          <li className="list-none hover:text-red-500">
            <Link href="/">Privacy Policy</Link>
          </li>
          <li className="list-none hover:text-red-500">
            <Link href="/">About</Link>
          </li>
        </div>
      </div>
      {/* Input Container */}

      <div className="flex flex-col justify-between">
        <form action="">
          <div className="flex space-x-3">
            <input
              type="text"
              className="flex-1 px-4 py-2 rounded-full focus:outline-none"
              placeholder="Updates in your inbox"
            />
            <button className="px-6 py-2 text-white rounded-full bg-red-500 hover:bg-red-300 focus:outline-none">Go</button>
          </div>
        </form>
        <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
        </div>

      </div>
    </div>
  );
};

export default Footer;
