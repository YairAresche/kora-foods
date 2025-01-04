import Image from "next/image";
import React from "react";

const Different = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 w-full h-auto mt-4 md:mt-10 gap-y-0 md:gap-y-10 text-lg xl:text-2xl">
      {/* Cuadrado 1: Título y texto (arriba izquierda en pantallas grandes) */}
      <div className="flex justify-center items-center order-2 md:order-1 bg-kimchuski-green-400 md:h-screen">
        <div className="space-y-4 text-white px-4 md:px-8 py-8">
          <h2 className="text-center mb-8 text-3xl max-w-[38ch] place-self-center">
            ¿QUÉ HACE QUE NUESTRO KIMCHI SEA DIFERENTE?
          </h2>
          <p>
            Kimchuski se destaca por ser el primer kimchi auténtico coreano en
            Argentina certificado por Sifega, garantizando calidad, seguridad y
            libre circulación. A diferencia de otros, nuestro kimchi es 100%
            natural, sin conservantes ni aditivos, y está elaborado con recetas
            tradicionales que respetan el proceso de fermentación original.
          </p>
          <p>
            Además, es vegano, libre de gluten y tiene 6 meses de vida útil
            gracias a su cuidadosa preparación excelente materia prima en
            Guaymallen, Mendoza. Cada frasco no solo ofrece un sabor
            incomparable, sino también beneficios probióticos que apoyan la
            salud intestinal, haciendo de Kimchuski un producto único en el
            mercado.
          </p>
          {/* <p>
            Kimchuski propone la elaboración de un producto sano y rico dentro
            del mercado alimenticio nacional.
          </p>
          <p>
            Un kimchi vegano con una receta ancestral coreana, desde la
            selección de una materia prima excelente hasta la distribución en
            frío para una buena fermentación.
          </p>
          <p>
            Somos la primer compañía en toda latinoamerica en lograr un kimchi
            aprobado legalmente para su distribución respetando la filosofía
            coreana por dicho alimento.
          </p> */}
        </div>
      </div>

      {/* Cuadrado 2: Imagen o video (arriba derecha en pantallas grandes) */}
      <div className="flex justify-center items-center order-1 md:order-2 md:h-screen">
        {/* Imagen o video */}
        <Image
          src="/images/about-us/row3.jpeg"
          alt="Imagen 1"
          className="w-full h-auto md:h-full"
          width={1000}
          height={1000}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Cuadrado 3: Imagen (abajo izquierda en pantallas grandes) */}
      <div className="flex justify-center items-center order-3 md:order-3 md:h-screen">
        <Image
          src="/images/about-us/row4.jpg"
          alt="Imagen 2"
          className="w-full h-auto md:h-full"
          width={1000}
          height={1000}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Cuadrado 4: Título y texto (abajo derecha en pantallas grandes) */}
      <div className="flex justify-center items-center order-4 md:order-4 bg-kimchuski-orange-400 ">
        <div className="space-y-4 text-white px-4 md:px-8 py-8">
          <h2 className="text-3xl text-center mb-8">
            ¿CUAL ES EL AJI QUE USAMOS?
          </h2>
          <p>
            Respetamos los ingredientes autóctonos del kimchi usando el aji
            gochugaru como principal ingrediente para el picor. Un picante dulce
            que se caracteriza por su color y textura.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Different;
