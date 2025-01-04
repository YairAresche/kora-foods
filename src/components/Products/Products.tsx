import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <section className="bg-white text-gray-900 px-4 md:px-14 flex flex-col justify-around h-screen text-[14px] md:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl !leading-tight font-semibold">
      <div className="flex flex-col md:flex-row">
        <div className="flex items-center justify-center grow md:flex-col md:justify-around space-x-4 md:space-x-0 relative md:items-end">
          <div className="text-center gap-2 flex flex-col items-center md:items-end relative mt-4 md:mt-0">
            <p className="max-w-[22ch] md:max-w-[20ch]">
              100% FERMENTACIÓN NATURAL
            </p>
            <Image
              src="/images/arrow.webp"
              alt="Arrow"
              className="rotate-0 w-[34px] md:w-[50px] xl:w-[60px] 2xl:w-[70px]"
              layout="intrinsic"
              width={50}
              height={50}
            />
            <Image
              src="/images/products/img3.svg"
              alt="effect"
              className="absolute left-2 md:left-auto md:right-[200px] 3xl:right-[300px] bottom-10 xl:w-[35px] 2xl:w-[50px]"
              width={20}
              height={20}
              layout="intrinsic"
            />
            <Image
              src="/images/products/img4.svg"
              alt="effect"
              className="absolute bottom-[104px] md:bottom-[120px] right-1 md:left-[200px] xl:left-[230px] 2xl:bottom-[165px] 3xl:bottom-[185px] 2xl:left-[280px] 3xl:left-[350px] xl:w-[35px] 2xl:w-[50px]"
              width={20}
              height={20}
            />
            <Image
              src="/images/products/img2.svg"
              alt="effect"
              className="absolute right-1/4 md:right-0 bottom-1/4 xl:w-[15px] 2xl:w-[30px] 2xl:left-[280px] 3xl:left-[335px]"
              width={10}
              height={10}
            />
          </div>

          <div className="text-center gap-2 flex flex-col items-center md:items-end relative">
            <p className="max-w-[22ch] md:max-w-[16ch] md:order-2 3xl:max-w-[22ch]">
              PRODUCTO A BASE DE HAKUSAY Y AJI GOCHUGARU
            </p>
            <Image
              src="/images/arrow.webp"
              alt="Arrow"
              className="scale-x-[-1] rotate-[-15deg] md:-rotate-180 md:order-1 scale-75 md:scale-100 md:scale-x-[-1] w-[34px] md:w-[50px] xl:w-[60px] 2xl:w-[70px]"
              layout="intrinsic"
              width={50}
              height={50}
            />
            <Image
              src="/images/products/img1.svg"
              alt="effect"
              width={50}
              height={50}
              className="absolute bottom-[100px] md:bottom-[50px] right-0 md:right-[200px] 2xl:right-[275px] 3xl:right-[400px] xl:w-[70px] 2xl:w-[85px] 3xl:w-[100px]"
            />
          </div>
        </div>
        {/* img jar */}
        <div className="self-center filter drop-shadow-mobile md:drop-shadow-desktop">
          <Image
            src="/images/description/jar.png"
            alt="Kimchi Jar"
            width={500}
            height={500}
            className="rotate-6 w-[250px] md:w-[325px] lg:w-[425px] xl:w-[450px] 2xl:w-[550px] 3xl:w-[625px]"
            priority
          />
        </div>
        {/* img jar */}

        <div className="flex items-center justify-between grow md:flex-col md:justify-around md:space-x-0 relative md:items-start">
          <div className="text-center gap-2 flex flex-col items-center md:items-start relative">
            <Image
              src="/images/arrow.webp"
              alt="Arrow"
              className="rotate-180 scale-x-[-1] md:rotate-0 md:scale-1 md:order-2 w-[34px] md:w-[50px] xl:w-[60px] 2xl:w-[70px] "
              layout="intrinsic"
              width={50}
              height={50}
            />
            <p className="max-w-[22ch] md:max-w-[20ch] md:order-1">
              APTO PARA TU LIBRE CIRCULACIÓN
            </p>
            <Image
              src="/images/products/img5.svg"
              alt="effect"
              className="absolute bottom-0 md:bottom-auto left-4 md:left-auto md:right-[200px] xl:right-[230px] 2xl:right-[300px] 3xl:right-[350px] 2xl:w-[30px] 3xl:w-[40px]"
              width={20}
              height={20}
            />
            <Image
              src="/images/products/img9.svg"
              alt="effect"
              className="absolute top-[80px] md:top-[60px] right-0 md:right-auto md:left-[180px] 2xl:left-[235px] 2xl:w-[60px] 3xl:w-[70px] 3xl:left-[300px]"
              width={50}
              height={50}
            />
          </div>

          <div className="text-center gap-2 flex flex-col items-center md:items-start relative mb-4 md:mb-0 mr-4 md:mr-0">
            <Image
              src="/images/products/img6.svg"
              alt="effect"
              className="absolute bottom-[120px] md:bottom-auto md:top-[135px] 2xl:top-[160px] right-0 md:right-auto md:left-[150px] 2xl:left-[200px] 3xl:left-[245px] 2xl:w-[120px] 3xl:w-[150px]"
              width={100}
              height={100}
            />
            <Image
              src="/images/arrow.webp"
              alt="Arrow"
              className="scale-x-1 rotate-180 md:rotate-180 w-[34px] md:w-[50px] xl:w-[60px] 2xl:w-[70px]"
              layout="intrinsic"
              width={50}
              height={50}
            />
            <p className="max-w-[18ch] md:max-w-[16ch]">
              APROBADO POR EL SIFEGA
            </p>
            <Image
              src="/images/products/img7.svg"
              alt="effect"
              className="absolute top-[100px] left-1/4 md:left-auto md:right-[160px] xl:right-[200px] 2xl:right-[250px] 3xl:right-[300px] 2xl:w-[30px] 3xl:w-[35px]"
              width={20}
              height={20}
            />
            <Image
              src="/images/products/img8.svg"
              alt="effect"
              className="absolute top-[80px] md:top-8 right-0 md:right-auto md:left-[160px] 2xl:left-[200px] 3xl:left-[250px] 2xl:w-[30px] 3xl:w-[35px]"
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
      <Link
        href={"/kimchuski/nosotros"}
        className="text-center font-pacifico capitalize font-normal text-xl md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl"
      >
        Hace click para conocernos más.
        <Image
          src="/images/products/line.png"
          alt="line"
          className="scale-[2] md:w-auto md:scale-150 mx-auto mt-3 lg:w-[150px] xl:w-[175px] 2xl:w-[225px] 3xl:w-[275px]"
          height={100}
          width={100}
        />
      </Link>
    </section>
  );
}
