import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";

export default function Products() {
  return (
    <section className="bg-white text-gray-900 px-4 md:px-14 flex flex-col justify-around h-screen text-[14px] md:text-xl !leading-tight font-semibold">
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center justify-center grow md:flex-col md:justify-around space-x-4 md:space-x-0 relative md:items-end">
          <div className="text-center gap-2 flex flex-col items-center md:items-end relative">
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
            <Image
              src="/images/products/img3.svg"
              alt="effect"
              width={20}
              height={20}
              className="absolute left-2 md:left-auto md:right-[200px] bottom-10"
            />
            <Image
              src="/images/products/img4.svg"
              alt="effect"
              width={20}
              height={20}
              className="absolute bottom-[104px] md:bottom-[120px] right-1 md:left-[200px]"
            />
            <Image
              src="/images/products/img2.svg"
              alt="effect"
              width={10}
              height={10}
              className="absolute right-1/4 md:right-0 bottom-1/4"
            />
          </div>

          <div className="text-center gap-2 flex flex-col items-center md:items-end relative">
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
            <Image
              src="/images/products/img1.svg"
              alt="effect"
              width={50}
              height={50}
              className="absolute bottom-[100px] md:bottom-[50px] right-0 md:right-[200px]"
            />
          </div>
        </div>
        {/* img jar */}
        <div className="relative w-[200px] h-[200px] md:w-[350px] md:h-[350px] self-center filter drop-shadow-mobile md:drop-shadow-desktop">
          <Image
            src="/images/description/jar.png"
            alt="Kimchi Jar"
            fill
            className="object-contain rotate-6"
          />
        </div>
        {/* img jar */}

        <div className="flex items-center justify-center grow md:flex-col md:justify-around space-x-4 md:space-x-0 relative md:items-start">
          <div className="text-center gap-2 flex flex-col items-center md:items-start relative">
            <Image
              src="/images/arrow.webp"
              alt="Right Arrow"
              className="rotate-180 scale-x-[-1] md:rotate-0 md:scale-1 md:w-12 md:order-2"
              width={32}
              height={32}
            />
            <p className="md:max-w-[20ch] md:order-1">
              FERMENTADO CASERO PARA UNA PROFUNDIDAD Y SABOR INIGUALABLE
            </p>
            <Image
              src="/images/products/img5.svg"
              alt="effect"
              width={20}
              height={20}
              className="absolute bottom-0 md:bottom-auto left-4 md:left-auto md:right-[200px]"
            />
            <Image
              src="/images/products/img9.svg"
              alt="effect"
              width={50}
              height={50}
              className="absolute top-[80px] md:top-[60px] right-0 md:right-auto md:left-[180px]"
            />
          </div>

          <div className="text-center gap-2 flex flex-col items-center md:items-start relative">
            <Image
              src="/images/products/img6.svg"
              alt="effect"
              width={100}
              height={100}
              className="absolute bottom-[120px] md:bottom-auto md:top-[150px] right-0 md:right-auto md:left-[160px]"
            />
            <Image
              src="/images/arrow.webp"
              alt="Right Arrow"
              className="scale-x-1 rotate-180 md:rotate-180 md:w-12"
              width={32}
              height={32}
            />
            <p className="md:max-w-[16ch] ">
              HECHO CON TIRAS LARGAS DE NUESTRO MEJOR REPOLLO NAPA
            </p>
            <Image
              src="/images/products/img7.svg"
              alt="effect"
              width={20}
              height={20}
              className="absolute top-[100px] left-1/4 md:left-auto md:right-[160px]"
            />
            <Image
              src="/images/products/img8.svg"
              alt="effect"
              width={20}
              height={20}
              className="absolute top-[80px] md:top-8 right-0 md:right-auto md:left-[160px]"
            />
          </div>
        </div>
      </div>
      <Link
        href={"/"}
        className="text-center font-pacifico capitalize font-normal text-xl"
      >
        Hace click para conocernos más.
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
