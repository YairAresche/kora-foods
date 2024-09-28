import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section
      className={`relative bg-cover bg-center flex flex-grow h-full bg-[url('/images/hero/hero-mobile.png')] md:bg-[url('/images/hero/hero.png')]`}
    >
      {/* <div className="container ml-4 md:ml-32 flex flex-col text-kimchuski-gray-50  justify-center"> */}
      <div className="container flex flex-col justify-center mx-auto w-5/6  md:ml-32">
        <h2 className="md:text-3xl font-bold tracking-wider text-xl text-kimchuski-gray-50">
          FERMENTED FOR HEALTH & FLAVOR
        </h2>
        <h1 className="md:text-8xl text-[40px] font-semibold mt-4 text-[#231f20] leading-10 md:!leading-[0.8] tracking-wider text-shadow-custom max-w-[14ch] md:max-w-[16ch]">
          THE KIMCHI THAT STARTED IT ALL
        </h1>

        <Link
          href="/find-us"
          className="mt-8 bg-kimchuski-green-500 leading-3 py-4 px-10 md:py-5 md:px-16 md:text-3xl rounded-full font-semibold w-fit text-kimchuski-gray-50 hover:bg-green-900 transition-colors duration-300"
        >
          Find Us Near You
        </Link>
      </div>
    </section>
  );
};

export default Hero;
