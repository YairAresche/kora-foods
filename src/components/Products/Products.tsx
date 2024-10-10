import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";

export default function Products() {
  return (
    <section className="bg-white text-gray-900 p-4 md:px-14 flex flex-col md:space-y-0 h-screen text-[14px] md:text-xl !leading-tight font-semibold relative">
      {/* Jar 1 */}
      {/* <div className="relative flex items-center justify-center space-x-4"> */}
      <div className="flex flex-col md:flex-row flex-1">
        <div className="flex items-center justify-center grow md:flex-col md:justify-around space-x-4 md:space-x-0 relative md:items-start md:flex-[1]">
          <div className="text-center gap-2 flex flex-col items-center">
            <p className="md:max-w-[20ch]">
              FERMENTADO CASERO PARA UNA PROFUNDIDAD Y SABOR INIGUALABLE
            </p>
            <Image
              src="/images/arrow.webp"
              alt="Right Arrow"
              className="rotate-0 md:scale-1 md:w-12"
              width={32}
              height={32}
            />
          </div>
          {/* img jar */}
          <Image
            src="/images/jar1.png"
            alt="Kimchi Jar"
            width={100}
            height={100}
            className="md:absolute md:left-2/3 md:w-[175px]"
          />

          <div className="text-center gap-2 flex flex-col items-center">
            <p className="md:max-w-[16ch] md:order-2 ">
              HECHO CON TIRAS LARGAS DE NUESTRO MEJOR REPOLLO NAPA
            </p>
            <Image
              src="/images/arrow.webp"
              alt="Right Arrow"
              className="scale-x-[-1] rotate-0 md:rotate-180 md:order-1 md:w-12"
              width={32}
              height={32}
            />
          </div>
        </div>

        {/* Jar 2 */}
        {/* <div className="relative flex items-center justify-center space-x-4 md:space-x-0 grow"> */}
        {/* md:absolute left-1/2 translate-x-[-50%] */}
        <div className="flex items-center justify-center grow md:justify-around space-x-4 md:space-x-0 relative md:items-start md:flex-[3] md:pt-16">
          <div className="text-center gap-2 flex flex-col md:flex-row items-center md:relative">
            <p className="md:max-w-[16ch]">
              FERMENTADO EN FRÍO PARA MAYOR FRESCURA
            </p>
            <Image
              src="/images/arrow.webp"
              alt="Right Arrow"
              className="rotate-0 md:-rotate-90 md:scale-x-[-1] md:w-8 md:absolute md:left-[95%] md:top-[75%]"
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
            className="md:absolute md:top-[30%] md:left-1/2 md:translate-x-[-50%] md:w-[175px]"
          />
          <div className="text-center gap-2 md:gap-0 flex flex-col md:flex-row items-center md:relative">
            <p className="md:max-w-[23ch] md:order-2">
              TAMAÑO PEQUEÑO PERFECTO PARA PICAR O COMO ACOMPAÑAMIENTO
            </p>
            <Image
              src="/images/arrow.webp"
              alt="Right Arrow"
              className="scale-x-[-1] md:scale-x-[1] rotate-0 md:rotate-[65deg] md:absolute md:order-1 md:w-8 md:right-[100%] md:top-[75%]"
              width={32}
              height={32}
            />
          </div>
        </div>

        {/* Jar 3 */}
        {/* <div className="relative flex items-center justify-center space-x-4 md:space-x-0 grow"> */}
        <div className="flex items-center justify-center grow md:flex-col md:justify-around space-x-4 md:space-x-0 relative md:items-end md:flex-[1]">
          <div className="text-center gap-2 flex flex-col items-center">
            <p className="md:max-w-[14ch]">
              PICANTE EQUILIBRADO CON UN SABOR COMPLEJO
            </p>
            <Image
              src="/images/arrow.webp"
              alt="Right Arrow"
              className="rotate-0 md:scale-x-[-1] md:w-12"
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
            className="md:absolute md:right-2/3 md:w-[175px]"
          />
          <div className="text-center gap-2 flex flex-col items-center">
            <p className="md:max-w-[20ch] md:order-2">
              FERMENTADO EN CASA CON INGREDIENTES PUROS
            </p>
            <Image
              src="/images/arrow.webp"
              alt="Right Arrow"
              className="scale-x-[-1] md:scale-x-[1] rotate-0 md:rotate-180 md:order-1 md:w-12"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
      <Link
        href={"/"}
        className="text-center font-pacifico capitalize font-normal text-xl"
      >
        Toca un frasco para conocer más
        <Image
          src="/images/products/line.png"
          alt="line"
          height={100}
          width={100}
          className="scale-[2] md:w-auto md:scale-150 mx-auto mt-3"
        />
      </Link>
    </section>
  );
}
