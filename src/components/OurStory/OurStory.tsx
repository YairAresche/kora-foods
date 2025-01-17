import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurStory = () => {
  return (
    <>
      <section className="text-gray-900 flex flex-col md:flex-row md:space-y-0 h-screen w-full text-[14px] md:text-xl text-center !leading-tight font-semibold relative bg-cover bg-center">
        <div className="w-full md:w-[55%] h-full bg-our-story-green bg-cover bg-center flex flex-col items-center justify-evenly text-center p-8">
          <h2 className="text-4xl 2xl:text-5xl 3xl:text-6xl 3xl:max-w-[26ch]">
            AGRADECIMIENTO A TODAS LAS ABUELAS Y MADRES!
          </h2>
          <h3 className="text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl italic lg:max-w-[30ch] xl:max-w-[34ch]">
            El KIMCHI no es una técnica de fermentación sino más bien una
            receta.
          </h3>
          <p className="font-medium text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">
            Esa es la diferencia entre el Kimchi y el resto de los fermentos, su
            bellísima historia. La receta tradicional de cada techo, la receta
            del barrio esperando a quienes volvían de la milicia y el hambre.
            Fermentaban en verano para consumirlo en los helados inviernos, el
            kimchi tenía que estar entre todos los seres queridos. El Kimchi es
            amor.
          </p>
          <Link
            href="/kimchuski/nosotros"
            className="bg-kimchuski-gray-950 text-kimchuski-gray-50 leading-3 py-4 px-6 md:py-2 md:px-8 md:text-2xl 2xl:text-3xl rounded-full font-semibold w-fit hover:bg-gray-50 hover:text-kimchuski-green-500 transition-colors duration-300"
          >
            NUESTRA HISTORIA
          </Link>
        </div>

        <div className="hidden md:block w-full md:w-[45%] h-full bg-none bg-cover bg-center md:bg-our-story-ongi"></div>
      </section>
      <div className="md:hidden">
        <Image
          src="/images/our-story/ongi.jpeg"
          alt="Our Story"
          width={500}
          height={500}
        />
      </div>
    </>
  );
};

export default OurStory;
