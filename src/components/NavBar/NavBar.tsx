import { useState } from "react";
import Link from "next/link";
import DropdownMenu from "../Dropdown/DropdownMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-kimchuski-gray-50 shadow-md text-xl py-3 absolute w-full z-10">
      <div className="container mx-auto flex justify-between md:justify-center items-center p-4">
        {/* Left Side (Products, About, FAQ) */}
        <div className="hidden md:flex space-x-10">
          <DropdownMenu
            title="PRODUCTOS"
            items={[{ label: "Kimchi", href: "/kimchuski/kimchi" }]}
          />
          <DropdownMenu
            title="NOSOTROS"
            items={[
              { label: "Sobre nosotros", href: "/kimchuski/nosotros" },
              { label: "Contactanos", href: "/kimchuski/contactanos" },
            ]}
          />
        </div>

        {/* Center (Logo) */}
        <div className="text-center md:mx-10">
          <Link
            href="/kimchuski"
            className="text-5xl font-bold text-kimchuski-red-base"
          >
            KIMCHUSKI
          </Link>
        </div>

        {/* Right Side (Find Us, Recipes, Press) */}
        <div className="hidden md:flex space-x-10">
          <DropdownMenu
            title="INFORMACION"
            items={[
              {
                label: "Prensa",
                href: "/kimchuski/prensa",
              },
              {
                label: "Preguntas frecuentes",
                href: "/kimchuski/preguntas-frecuentes",
              },
              {
                label: "Beneficios para la salud",
                href: "/kimchuski/beneficios",
              },
            ]}
          />
          <Link
            href="/kimchuski/recetas"
            className="text-kimchuski-green-500 font-bold hover:text-green-800"
          >
            RECETAS
          </Link>
        </div>

        {/* Hamburger Menu Button for Small Screens */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-kimchuski-red-base focus:outline-none"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`${
          menuOpen ? "block" : "hidden"
        } md:hidden bg-kimchuski-gray-50 transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <DropdownMenu
            title="PRODUCTOS"
            items={[{ label: "Kimchi", href: "/kimchuski/kimchi" }]}
          />
          <DropdownMenu
            title="NOSOTROS"
            items={[
              { label: "Sobre nosotros", href: "/kimchuski/nosotros" },
              { label: "Contactanos", href: "/kimchuski/contactanos" },
            ]}
          />
          <Link
            href="/kimchuski/recetas"
            className="text-kimchuski-green-500 font-bold hover:text-green-800"
          >
            RECETAS
          </Link>
          <DropdownMenu
            title="INFORMACION"
            items={[
              {
                label: "Prensa",
                href: "/kimchuski/prensa",
              },
              {
                label: "Preguntas frecuentes",
                href: "/kimchuski/preguntas-frecuentes",
              },
              {
                label: "Beneficios para la salud",
                href: "/kimchuski/beneficios",
              },
            ]}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
