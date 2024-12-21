import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import { motion, AnimatePresence } from "framer-motion";
import { RECEIPTITEMS } from "@/constants/receips";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useIsLargeScreen } from "@/hooks/useIsLargeScreen";

const RecipesPage = () => {
  const isLargeScreen = useIsLargeScreen();
  const itemsPerPage = isLargeScreen ? 6 : 1;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(RECEIPTITEMS.length / itemsPerPage);
  const itemsToShow = RECEIPTITEMS.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // const cardAnimation = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: { opacity: 1, y: 0 },
  // };

  return (
    <div>
      <Navbar />
      <div className="pt-36 pb-12 px-4 md:px-8">
        <h1 className="text-5xl font-bold mb-8">RECETAS</h1>

        {/* Mobile layout */}
        <div className="md:hidden flex space-x-4 overflow-x-auto snap-x snap-mandatory">
          {itemsToShow.map((item) => (
            <motion.div
              key={item.id}
              initial="hidden"
              animate="visible"
              exit="hidden"
              // variants={cardAnimation}
              transition={{ duration: 0.5 }}
              className="relative min-w-[100%] snap-center"
            >
              <Image
                src={item.src}
                alt={item.alt}
                className="w-full aspect-square object-cover rounded-sm"
                width={400}
                height={300}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-kimchuski-gray-950 bg-opacity-50 text-kimchuski-gray-50 rounded-sm gap-6">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="px-4 py-2 text-center">{item.description}</p>
                <Link href={item.url} className="text-kimchuski-orange-400">
                  Leer receta
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-4">
          <AnimatePresence>
            {itemsToShow.map((item) => (
              <motion.div
                key={item.id}
                initial="hidden"
                animate="visible"
                exit="hidden"
                // variants={cardAnimation}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
                className="group relative w-full cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  className="w-full aspect-square object-cover group-hover:filter group-hover:blur-sm group-hover:grayscale-[30%] transition-all duration-500 ease-in-out rounded-lg"
                  width={400}
                  height={300}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 bg-kimchuski-gray-950 bg-opacity-50 rounded-lg text-kimchuski-gray-50 transition-opacity duration-500 gap-4">
                  <h2 className="text-xl font-bold text-center">
                    {item.title}
                  </h2>
                  <p className="px-4 py-2 text-center">{item.description}</p>
                  <Link
                    href={item.url}
                    className="text-kimchuski-orange-400 tracking-wide"
                  >
                    Leer receta
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        <div className="mt-8 flex justify-center space-x-4">
          {/* Botón "Anterior" */}
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            Anterior
          </button>

          {/* Botones de numeración para pantallas grandes */}
          <div className="hidden md:flex space-x-2">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1
                    ? "bg-kimchuski-orange-400 text-white"
                    : "bg-gray-300 text-gray-700"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Botón "Siguiente" */}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            Siguiente
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RecipesPage;
