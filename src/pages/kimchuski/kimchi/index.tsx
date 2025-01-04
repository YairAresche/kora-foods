import Differentiators from "@/components/Differentiators/Differentiators";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import ReserveReceip from "@/components/ReserveReceip/ReserveReceip";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const jars = [1, 2, 3];

const images = [
  "/images/kimchi/hakusai.WEBP",
  "/images/kimchi/jar-hippie.webp",
  "/images/kimchi/jar-pink.webp",
  "/images/kimchi/sandwich.webp",
];

const ReserveKimchi = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 2) % images.length);
    }, 7500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Head>
        <title>Kimchuski - kimchi autentico coreano en Argentina</title>
        <meta name="description" content="Kimchuski - Kimchi" />
      </Head>
      <Navbar />

      {/* main */}
      <div className="pt-36 pb-12 px-8 flex justify-around md:justify-center md:gap-10">
        <div className="text-center content-center">
          <h1 className="text-kimchuski-green-500 text-4xl md:text-8xl font-bold leading-6 md:leading-[0.8] tracking-widest md:tracking-wider">
            KIMCHI
          </h1>
          <h3 className="text-kimchuski-gray-950 text-[.5rem] md:text-xl font-bold mt-1 tracking-widest">
            EL KIMCHI QUE EMPEZÓ TODO
          </h3>
        </div>

        <div className="flex gap-1 ">
          {jars.map((_, index) => (
            <div
              key={index}
              className="relative h-[75px] w-[45px] md:w-[130px] md:h-[250px] self-center filter drop-shadow-mobileOrange md:drop-shadow-desktopOrange"
            >
              <Image
                src="/images/kimchi/jar.png"
                alt="Kimchi"
                fill
                className="object-contain brightness-125"
              />
            </div>
          ))}
        </div>
      </div>
      {/* main */}

      {/* cuadricula */}
      <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:h-screen text-kimchuski-gray-50">
        {/* Cuadro 1 */}
        <div className="flex flex-col items-center justify-center p-4 text-center bg-kimchuski-green-400 h-[50vh] md:h-auto">
          <h2 className="text-2xl max-w-[20ch] mb-2">NUESTRO KIMCHI</h2>
          <p>
            En Kimchuski ofrecemos un kimchi vegano que captura la esencia del
            kimchi tradicional coreano, elaborado artesanalmente en la provincia
            de Mendoza. Nuestro compromiso es garantizar un producto de
            excelencia mediante la selección de materia prima de la más alta
            calidad.
          </p>
          <p>
            Elaborado a base de hakusai como ingrediente principal, combinado
            con ají gochugaru —el auténtico ají coreano—, nuestro kimchi
            incorpora una variedad de vegetales que se integran en un proceso
            cuidado y artesanal.
          </p>
          {/* <p>
            En Kimchuski no hacemos concesiones en cuanto a calidad. Trabajamos
            constantemente para perfeccionar y escalar nuestro producto con
            profesionalismo, manteniendo siempre el equilibrio entre sabor,
            salud y tradición. Nuestra misión es llevar este alimento nutritivo
            y delicioso a cada rincón de Argentina, brindando una experiencia
            auténtica y memorable.
          </p> */}
        </div>
        {/* Cuadro 2 */}
        <div className="flex items-center justify-center">
          <div className="relative">
            <Image
              src={images[currentIndex]}
              alt={`Imagen ${currentIndex + 1}`}
              className="object-cover w-screen h-[50vh] md:w-[50vw] md:h-[50vh]"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* Cuadro 3 */}
        <div className="flex items-center justify-center order-2 md:order-1">
          <div className="relative">
            <Image
              src={images[(currentIndex + 1) % images.length]}
              alt={`Imagen ${((currentIndex + 1) % images.length) + 1}`}
              className="object-cover w-screen h-[50vh] md:w-[50vw] md:h-[50vh]"
              width={500}
              height={500}
            />
          </div>
        </div>
        {/* Cuadro 4 */}
        <div className="flex flex-col items-center justify-center p-4 text-center bg-kimchuski-orange-400 h-[50vh] md:h-auto order-1 md:order-2">
          <h2 className="text-2xl max-w-[26ch] mb-2">
            {/* Producto 100% libre de conservantes. KIMCHI VEGANO. */}
            PRODUCTO DE CALIDAD
          </h2>
          {/* <p>
            Nuestro kimchi Cortado a la Mesa es un homenaje al kimchi Mak, que
            se refiere a un corte cuadrado de aproximadamente dos pulgadas de
            tamaño. El corte permite una fermentación más rápida, ya que la
            forma de las verduras juega un papel en la duración del tiempo de
            fermentación. La receta basada en plantas utiliza una salsa de
            kimchi fresca y brillante, que resulta en notas ácidas, saladas y
            casi cítricas.
          </p> */}
          <div className="">
            <p>
              En Kimchuski no hacemos concesiones en cuanto a calidad.
              Trabajamos constantemente para perfeccionar y escalar nuestro
              producto con profesionalismo, manteniendo siempre el equilibrio
              entre sabor, salud y tradición. Nuestra misión es llevar este
              alimento nutritivo y delicioso a cada rincón de Argentina,
              brindando una experiencia auténtica y memorable.
            </p>
            <br />
            <p className="italic">Producto 100% libre de conservantes.</p>
          </div>
        </div>
      </div>
      {/* cuadricula */}

      <Differentiators />

      {/* recipes */}
      <ReserveReceip />
      {/* recipes */}

      <Footer />
    </div>
  );
};

export default ReserveKimchi;
