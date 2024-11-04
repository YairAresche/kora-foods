import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8 md:gap-4 w-full h-auto pt-24 md:pt-36 md:px-10 xl:text-lg mb-6">
      {/* Cuadrado 1: Título y texto (arriba izquierda en pantallas grandes) */}
      <div className="flex justify-center items-center order-2 md:order-1">
        <div className="xl:xl:space-y-4 px-8 md:px-0">
          <h2 className="xl:text-3xl text-2xl text-center mb-1 xl:mb-8">
            NUESTRA MISIÓN
          </h2>
          <p>
            Comenzamos en KIMCHUSKI con la misión de compartir un kimchi
            delicioso, auténtico y artesanal, elaborado en pequeños lotes con
            los mejores ingredientes naturales. Como amante de la comida y el
            vino, la fundadora Lauryn Chun se inspiró en la belleza de la
            tradición artesanal de Corea de preparar kimchi, un alimento
            apreciado que merece estar entre las tradiciones de alimentos
            fermentados como el vino, el queso y la cerveza.
          </p>
          <p>
            Nuestro primer kimchi fue lanzado en 2009 con el original
            &quot;House,&quot; basado en una receta familiar muy querida del
            restaurante de la familia de su madre, KIMCHUSKI House (Jang Mo
            Jip), fundado en 1989 en Garden Grove, California. ¡Sigue siendo
            nuestro más vendido!
          </p>
          <p>
            En 2012, Lauryn publicó{" "}
            <span className="text-kimchuski-green-400">
              The Kimchi Cookbook: 60 Modern and Traditional Ways to Make and
              Cook Kimchi
            </span>{" "}
            para compartir la historia de la tradición de hacer kimchi con
            recetas modernas y mostrar su versatilidad a más cocineros caseros.
          </p>
        </div>
      </div>

      {/* Cuadrado 2: Imagen o video (arriba derecha en pantallas grandes) */}
      <div className="flex justify-center items-center order-1 md:order-2">
        {/* Imagen o video */}
        <Image
          src="/images/about-us/row1.jpeg"
          alt="Imagen 1"
          className="w-full h-auto"
          width={1000}
          height={1000}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Cuadrado 3: Imagen (abajo izquierda en pantallas grandes) */}
      <div className="flex justify-center items-center order-3 md:order-3">
        <Image
          src="/images/about-us/row2.jpg"
          alt="Imagen 2"
          className="w-full h-auto"
          width={1000}
          height={1000}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Cuadrado 4: Título y texto (abajo derecha en pantallas grandes) */}
      <div className="flex justify-center items-center order-4 md:order-4">
        <div className="xl:space-y-4 px-8 md:px-0">
          <h2 className="xl:text-3xl text-2xl text-center mb-1 xl:mb-8">
            NUESTROS SABORES
          </h2>

          <p>
            El Gochujang de KIMCHUSKI se lanzó en 2014, la pasta y salsa de
            chile fermentado más popular que captura los sabores auténticos de
            la despensa coreana. El perfil de sabor único del gochujang proviene
            de la fermentación, que resalta el sabor umami y el calor moderado
            de la especia del chile. A muchos les encanta el nuestro porque
            contiene ingredientes puros, sin MSG ni jarabe de maíz.
          </p>
          <p>
            Ninguna despensa está completa sin Gochugaru, hojuelas de chile
            coreano que aportan una profundidad de sabores terrosos y cálidos
            con un nivel de picante medio, y pueden usarse en platos cotidianos,
            no solo para hacer kimchi. Como símbolo de calidad, las hojuelas de
            gochugaru de KIMCHUSKI no contienen semillas, lo que permite que
            brille el sabor afrutado completo de la pulpa del chile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
