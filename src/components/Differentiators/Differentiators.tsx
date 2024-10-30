import { TEXTS } from "@/constants/differentiators";
import Image from "next/image";
import React from "react";

const Differentiators = () => {
  return (
    <div className="text-center mt-10 px-8 md:px-20 md:h-screen content-center md:mt-0">
      <h1 className="md:text-4xl font-bold">LO QUE NOS DIFERENCIA</h1>
      <div className="md:flex gap-10 mt-10">
        <div className="md:w-1/2 md:relative hidden md:block">
          <Image
            src={"/images/reserve-kimchi/hakusai-differentiators.jpg"}
            alt="Differentiators"
            className="scale-x-150 rounded-sm !w-auto place-self-center"
            fill
            objectFit="contain"
          />
        </div>
        <div className="flex flex-col gap-8 md:w-1/2 md:justify-center">
          <div className="md:flex space-y-6 md:space-x-6 md:space-y-0 justify-items-center">
            <Image
              src="/images/reserve-kimchi/dif1.avif"
              alt="descript1"
              className="w-20"
              width={200}
              height={200}
            />
            <p>{TEXTS.fermentation}</p>
          </div>

          <div className="md:flex space-y-6 md:space-x-6 md:space-y-0 justify-items-center">
            <Image
              src="/images/reserve-kimchi/dif2.avif"
              alt="descript2"
              className="w-20"
              width={200}
              height={200}
            />
            <p>{TEXTS.crafted}</p>
          </div>

          <div className="md:flex space-y-6 md:space-x-6 md:space-y-0 justify-items-center">
            <Image
              src="/images/reserve-kimchi/dif3.avif"
              alt="descript3"
              className="w-20"
              width={200}
              height={200}
            />
            <p>{TEXTS.flavor}</p>
          </div>

          <div className="md:flex space-y-6 md:space-x-6 md:space-y-0 justify-items-center">
            <Image
              src="/images/reserve-kimchi/dif4.avif"
              alt="descript4"
              className="w-20"
              width={200}
              height={200}
            />
            <p>{TEXTS.gutHealth}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Differentiators;
