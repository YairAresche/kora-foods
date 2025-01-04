import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-8 md:gap-4 w-full h-auto pt-24 md:pt-36 md:px-10 xl:text-lg mb-6">
      {/* Cuadrado 1: Título y texto (arriba izquierda en pantallas grandes) */}
      <div className="flex justify-center items-center order-2 md:order-1">
        <div className="xl:xl:space-y-4 px-8 md:px-0">
          <h2 className="xl:text-3xl text-2xl text-center mb-1 xl:mb-8">
            MISIÓN DE KIMCHUSKI
          </h2>
          <p>
            Nuestra misión en Kimchuski es llevar a cada rincón del país un
            kimchi auténtico, saludable y de calidad superior. Nos enfocamos en
            escalar un producto natural, sin conservantes, que respete las
            tradiciones coreanas mientras se adapta a las necesidades del
            mercado local. Queremos ser el referente en alimentos fermentados,
            promoviendo hábitos alimenticios beneficiosos a través de un
            producto vegano, libre de gluten y certificado, que fomente el
            bienestar y el disfrute culinario en cada mesa.
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
            EL SABOR DE KIMCHUSKI
          </h2>
          <p>
            Kimchuski ofrece un sabor auténtico y equilibrado que combina la
            tradición coreana con la frescura de ingredientes seleccionados. Su
            perfil único mezcla un toque picante, notas umami y la acidez
            característica de la fermentación, creando una experiencia
            gastronómica vibrante y saludable. Perfecto para quienes buscan
            intensidad y frescura en cada bocado, nuestro kimchi se adapta a
            diversas preparaciones, desde platos tradicionales hasta fusiones
            modernas. Es el equilibrio perfecto entre sabor y bienestar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
