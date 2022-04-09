import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0">
      {/* Left Item */}
      <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
        <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">
          Bring everyone together to build better products
        </h1>
        <p className="max-w-sm text-center text-slate-800 md:text-left">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>

        <div className="flex justify-center md:justify-start">
          <Link href="/">
            <button
              className="p-3 px-6 pt-2 text-white bg-red-500 rounded-full
             baseline hover:bg-red-300 cursor-pointer"
            >
              Get Started
            </button>
          </Link>
        </div>
      </div>

      {/* Right Item */}

      <div className="md:w-1/2">
          <img src="img/illustration-intro.svg" alt="" />
      </div>
    </div>
  );
};

export default Hero;
