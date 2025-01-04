import React from "react";
import Navbar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const BenefitsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-36 pb-12 px-4 md:px-8">
        <h1 className="text-5xl font-bold mb-8 text-center">
          Kimchi y sus Beneficios para la Salud Intestinal
        </h1>
        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg leading-relaxed text-gray-700 text-center">
            El kimchi, un alimento fermentado tradicional coreano, es una fuente
            rica en probióticos naturales que benefician la salud intestinal.
            Estos microorganismos vivos ayudan a mantener el equilibrio de la
            microbiota intestinal, que es el conjunto de bacterias y otros
            microorganismos que viven en nuestro sistema digestivo.
          </p>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Microbiota y Macrobiota Intestinal
            </h2>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>
                <strong>Microbiota Intestinal:</strong> Es esencial para la
                digestión, la absorción de nutrientes y la protección contra
                patógenos. Un desequilibrio en esta microbiota puede llevar a
                problemas como inflamación, alergias o enfermedades digestivas.
              </li>
              <li>
                <strong>Macrobiota Intestinal:</strong> Aunque el término es
                menos común, se refiere al equilibrio general de organismos
                dentro del sistema digestivo, incluido el impacto de los
                alimentos fermentados.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Probióticos en el Kimchi
            </h2>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>
                Durante el proceso de fermentación, el kimchi desarrolla
                bacterias beneficiosas como <em>Lactobacillus</em> y{" "}
                <em>Bifidobacterium</em>, conocidas por:
              </li>
              <ul className="ml-5 list-disc space-y-2">
                <li>Mejorar la digestión.</li>
                <li>Fortalecer el sistema inmunológico.</li>
                <li>Reducir inflamaciones intestinales.</li>
              </ul>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Otros Beneficios del Kimchi
            </h2>
            <ul className="space-y-3 list-disc list-inside text-gray-700">
              <li>
                Rico en vitaminas A, C y K, esenciales para la salud general.
              </li>
              <li>Contiene antioxidantes que combaten el daño celular.</li>
              <li>Bajo en calorías, ideal para dietas balanceadas.</li>
            </ul>
          </div>

          <p className="text-lg leading-relaxed text-gray-700 italic">
            Incluir kimchi regularmente en la dieta puede ser un apoyo natural
            para mejorar la salud digestiva y fortalecer el bienestar general.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BenefitsPage;
