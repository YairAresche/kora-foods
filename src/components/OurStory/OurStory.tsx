import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurStory = () => {
  return (
    <>
      <section className="text-gray-900 p-4 md:px-14 flex flex-col md:space-y-0 h-screen text-[14px] md:text-xl text-center !leading-tight font-semibold relative bg-our-story-mobile md:bg-our-story bg-cover bg-center">
        <div className="md:w-1/2 h-full flex flex-col items-center justify-evenly">
          {/* <h1 className="italic text-8xl font-light font-pacifico">Hey!</h1> */}
          <h2 className="text-5xl">
            AGRADECIMIENTO A TODAS LAS ABUELAS Y MADRES!
          </h2>
          <h3 className="text-2xl italic">
            El KIMCHI no es una técnica de fermentación sino más bien una
            receta.
          </h3>
          <p className="font-medium text-xl">
            Esa es la diferencia entre el Kimchi y el resto de los fermentos, su
            bellisima historia. La receta tradicional de cada techo, la receta
            del barrio esperando a quienes volvían de la milicia y el hambre.
            Fermentaban en verano para consumirlo en los helados inviernos, el
            kimchi tenía que estar entre todos los seres queridos. El Kimchi es
            amor.
          </p>
          <Link
            href="/kimchuski/nosotros"
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
