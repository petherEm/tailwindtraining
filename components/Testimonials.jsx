import React from "react";
import Link from "next/link";

const Testimonials = () => {
  return (
    <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
      <h2 className="text-4xl font-bold text-center">
        What&apos;s Different About Manage?
      </h2>
      {/* Testimonials Container */}
      <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
        {/* Testimonial 1 */}

        <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-100 md:w-1/3">
          <img src="img/avatar-anisha.png" className="w-16 -mt-14" alt="" />
          <h5 className="text-lg font-bold">Anisha Li</h5>
          <p className="">
          &ldquo; Manage has supercharged our team's workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.&rdquo;
          </p>
        </div>

        <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-100 md:w-1/3">
          <img src="img/avatar-ali.png" className="w-16 -mt-14" alt="" />
          <h5 className="text-lg font-bold">Ali Bravo</h5>
          <p className="">
          &ldquo; We have been able to cancel so many other subscriptions since using
            Manage. There is no more cross-channel confusion and everyone is
            much more focused.&rdquo;
          </p>
        </div>

        <div className="hidden md:flex flex-col items-center p-6 space-y-6 rounded-lg bg-slate-100 md:w-1/3">
          <img src="img/avatar-richard.png" className="w-16 -mt-14" alt="" />
          <h5 className="text-lg font-bold">Richard Watts</h5>
          <p className="">
          &ldquo; Manage has supercharged our team's workflow. The ability to
            maintain visibility on larger milestones at all times keeps everyone
            motivated.&rdquo;
          </p>
        </div>
      </div>
      <div className="my-16">
        <Link href="/">
          <button
            className="p-3 px-6 pt-2 max-content text-white bg-red-500 rounded-full
             baseline hover:bg-red-300 cursor-pointer"
          >
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;
