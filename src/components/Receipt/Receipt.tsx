import Image from "next/image";
import Link from "next/link";
import React from "react";

const Receipt = () => {
  return (
    <section className="bg-kimchuski-gray-950 text-gray-50 flex flex-col gap-16 justify-center text-center p-16 items-center">
      <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-32">
        <div className="flex flex-col items-center">
          <Image
            width={150}
            height={150}
            src="/images/receipts/salad.webp"
            alt="ensalada de pepino picante"
            className="rounded-full aspect-square mb-3"
          />{" "}
          <h3 className="font-bold tracking-widest">
            ENSALADA DE PEPINO
            <br />
            PICANTE
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <Image
            width={150}
            height={150}
            src="/images/receipts/sandwich.webp"
            alt="sándwich de kimcheez a la parrilla"
            className="rounded-full aspect-square mb-3"
          />{" "}
          <h3 className="font-bold tracking-widest">
            SÁNDWICH DE KIMCHEEZ
            <br />A LA PARRILLA
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <Image
            width={150}
            height={150}
            src="/images/receipts/tofu.webp"
            alt="tofu crujiente con gochujang"
            className="rounded-full aspect-square mb-3"
          />{" "}
          <h3 className="font-bold tracking-widest">
            TOFU CRUJIENTE CON
            <br />
            GOCHUJANG
          </h3>
        </div>
      </div>
      <Link
        href="/receipt"
        className="bg-kimchuski-gray-50 text-kimchuski-gray-950 leading-3 py-4 px-6 md:py-2 md:px-8 md:text-2xl rounded-2xl font-semibold w-fit hover:bg-kimchuski-green-500 hover:text-kimchuski-gray-50 transition-colors duration-300"
      >
        VER RECETAS
      </Link>
    </section>
  );
};

export default Receipt;
