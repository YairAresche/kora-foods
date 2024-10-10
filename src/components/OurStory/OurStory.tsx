import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurStory = () => {
  return (
    <>
      <section className="text-gray-900 p-4 md:px-14 flex flex-col md:space-y-0 h-screen text-[14px] md:text-xl text-center !leading-tight font-semibold relative bg-our-story-mobile md:bg-our-story bg-cover bg-center">
        <div className="md:w-1/2 h-full flex flex-col items-center justify-around">
          <h1 className="italic text-8xl font-light font-pacifico">Hey!</h1>
          <h2 className="text-6xl">LAURYN HERE!</h2>
          <p className="font-medium text-xl">
            El kimchi y el gochujang son algo más que comida: son parte integral
            de mi herencia y una tradición increíble que me enorgullece mantener
            a través de Kimchuski. Nuestras recetas llevan a tu nevera los
            deliciosos sabores caseros y picantes de estos queridos alimentos
            coreanos. Más que simples aderezos o ingredientes para la cocina
            coreana, en 2012 escribí The Kimchi Cookbook para ayudarte a
            incorporar estos sabores a cualquier estilo de cocina.
          </p>
          <Link
            href="/our-story"
            className="bg-kimchuski-gray-950 text-kimchuski-gray-50 leading-3 py-4 px-6 md:py-2 md:px-8 md:text-2xl rounded-full font-semibold w-fit hover:bg-gray-50 hover:text-kimchuski-green-500 transition-colors duration-300"
          >
            NUESTRA HISTORIA
          </Link>
        </div>
      </section>
      <div className="md:hidden">
        <Image
          src="/images/our-story/our-story-after.webp"
          alt="Our Story"
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default OurStory;
