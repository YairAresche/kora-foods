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
            Mantenemos la tradición de hacer kimchi utilizando un proceso
            auténticamente artesanal: desde la selección de los mejores chiles y
            hojuelas, hasta cortar a mano tiras de col napa y cubos de rábanos
            daikon. Mezclamos en pequeños lotes y empacamos a mano en frascos de
            vidrio. A diferencia del corte con máquinas, que trocean las tiras y
            mezclan en grandes recipientes lo que puede magullar los vegetales
            delicados, nuestro proceso artesanal distintivo, desde el principio
            hasta el final, corta los vegetales en tiras largas y trozos,
            asegurando una fermentación más equilibrada y sabores más profundos
            que se desarrollan lentamente. Esto es lo que los coreanos llaman
            “son-mat”, que significa “sabor de las manos”, y describe el cariño
            que surge al hacer comida con las manos.
          </p>
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
          <h2 className="text-3xl text-center mb-8">¿QUÉ HAY EN UN NOMBRE?</h2>
          <p>
            La tradición culinaria coreana tiene una relación importante con la
            suegra. Cuando una novia se casaba y se unía a la familia de su
            esposo, era costumbre que aprendiera las recetas de kimchi de su
            nueva familia. Como una de las habilidades culinarias más respetadas
            en cualquier hogar coreano, tradicionalmente, era habitual que la
            suegra enseñara la receta de kimchi a la novia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Different;
