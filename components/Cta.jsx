import React from "react";

const Cta = () => {
  return (
    <div className="bg-red-400">
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* Heading */}

        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today.
        </h2>
        <button className="p-3 px-6 pt-2 text-red-600 font-bold bg-white rounded-full shadow-2xl baseline hover:bg-gray-800 cursor-pointer">Get Started</button>
      </div>
    </div>
  );
};

export default Cta;
