import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FOODITEMS } from "@/constants/receips";
import Link from "next/link";

const ReserveReceip = () => {
  return (
    <div className="relative md:w-full p-10 text-center">
      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold tracking-wider pb-4 md:pb-12">
        ALGUNAS RECETAS
      </h1>

      {/* Mobile layout: Scrollable flex */}
      <div className="md:hidden flex space-x-4 overflow-x-auto snap-x snap-mandatory">
        {FOODITEMS.map((item) => (
          <motion.div
            key={item.id}
            className="relative min-w-[100%] snap-center "
          >
            <Image
              src={item.src}
              alt={item.alt}
              className="w-full aspect-square object-cover rounded-sm"
              width={400}
              height={300}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-kimchuski-gray-950 bg-opacity-50 text-kimchuski-gray-50 transition-opacity duration-500 rounded-sm gap-6">
              <div>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="px-4 py-2 text-center mt-2">{item.description}</p>
              </div>
              <Link
                href={item.url}
                className="text-kimchuski-orange-400 tracking-wide"
              >
                Leer receta
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Desktop layout: Grid */}

      <div className="hidden md:grid md:grid-cols-3 gap-4">
        {FOODITEMS.map((item) => (
          <motion.div
            key={item.id}
            className="group relative w-full transition-all duration-500 ease-in-out"
          >
            <Image
              src={item.src}
              alt={item.alt}
              className="w-full aspect-square object-cover group-hover:filter group-hover:blur-sm group-hover:grayscale-[30%] transition-all duration-500 ease-in-out rounded-sm group-hover:p-1"
              width={400}
              height={300}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-kimchuski-gray-950 bg-opacity-50 text-kimchuski-gray-50 transition-opacity duration-500 gap-10">
              <div>
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="px-4 py-2 text-center mt-2">{item.description}</p>
              </div>
              <Link
                href={item.url}
                className="text-kimchuski-orange-400 tracking-wide"
              >
                Leer receta
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ReserveReceip;
