import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <section className="bg-white p-4 flex flex-col items-center space-y-8 h-screen text-[14px] leading-tight font-semibold">
      {/* Jar 1 */}
      <div className="relative flex items-center justify-center space-x-4">
        {/* Left text */}
        <div className="text-center text-gray-700 gap-2 flex flex-col items-center">
          <p className=" ">
            FERMENTADO CASERO PARA UNA PROFUNDIDAD Y SABOR INIGUALABLE
          </p>
          <Image
            src="/images/arrow.webp"
            alt="Right Arrow"
            className="rotate-0"
            width={32}
            height={32}
          />
        </div>
        <Image
          src="/images/jar1.png"
          alt="Kimchi Jar"
          width={100}
          height={100}
        />

        {/* Right text */}
        <div className="text-center text-gray-700 gap-2 flex flex-col items-center">
          <p className=" ">
            HECHO CON TIRAS LARGAS DE NUESTRO MEJOR REPOLLO NAPA
          </p>
          <Image
            src="/images/arrow.webp"
            alt="Right Arrow"
            className="scale-x-[-1] rotate-0"
            width={32}
            height={32}
          />
        </div>
      </div>

      {/* Jar 2 */}
      <div className="relative flex items-center justify-center space-x-4">
        {/* Left text */}
        <div className="text-center text-gray-700 gap-2 flex flex-col items-center">
          <p className=" ">FERMENTADO EN FRÍO PARA MAYOR FRESCURA</p>
          <Image
            src="/images/arrow.webp"
            alt="Right Arrow"
            className="rotate-0"
            width={32}
            height={32}
          />
        </div>
        {/* img jar */}
        <Image
          src="/images/jar2.png"
          alt="Kimchi Jar"
          width={100}
          height={100}
        />
        {/* Right text */}
        <div className="text-center text-gray-700 gap-2 flex flex-col items-center">
          <p className=" ">
            TAMAÑO PEQUEÑO PERFECTO PARA PICAR O COMO ACOMPAÑAMIENTO
          </p>
          <Image
            src="/images/arrow.webp"
            alt="Right Arrow"
            className="scale-x-[-1] rotate-0"
            width={32}
            height={32}
          />
        </div>
      </div>

      {/* Jar 3 */}
      <div className="relative flex items-center justify-center space-x-4">
        {/* Left text */}
        <div className="text-center text-gray-700 gap-2 flex flex-col items-center">
          <p className=" ">PICANTE EQUILIBRADO CON UN SABOR COMPLEJO</p>
          <Image
            src="/images/arrow.webp"
            alt="Right Arrow"
            className="rotate-0"
            width={32}
            height={32}
          />
        </div>
        {/* img jar */}
        <Image
          src="/images/jar3.png"
          alt="Kimchi Jar"
          width={100}
          height={100}
        />
        {/* Right text */}
        <div className="text-center text-gray-700 gap-2 flex flex-col items-center">
          <p className=" ">FERMENTADO EN CASA CON INGREDIENTES PUROS</p>
          <Image
            src="/images/arrow.webp"
            alt="Right Arrow"
            className="scale-x-[-1] rotate-0"
            width={32}
            height={32}
          />
        </div>
      </div>
      <Link
        href={"/"}
        className=" font-pacifico capitalize font-normal text-2xl"
      >
        Click a jar to learn more
        <Image
          src="/images/products/line.png"
          alt="line"
          height={100}
          width={100}
          className="w-3/5 mx-auto mt-3"
        />
      </Link>
    </section>
  );
}
