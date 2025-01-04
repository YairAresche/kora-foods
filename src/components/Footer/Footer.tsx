import React from "react";
import Link from "next/link";

import { SiGmail } from "react-icons/si";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="bg-footer flex flex-col md:flex-row justify-around px-8 md:px-0 py-8 md:py-16 bg-cover bg-center text-center">
      <div className="text-3xl text-kimchuski-red-50 font-bold mb-8 md:mb-0">
        <h2>KIMCHUSKI</h2>
        <div className="text-kimchuski-gray-900 flex gap-x-4 mt-2 md:mt-3 justify-center">
          <Link
            href="https://www.instagram.com/kimchuski"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-kimchuski-gray-50"
          >
            <SlSocialInstagram size={24} />
          </Link>
          <Link
            href="mailto:kimchuski@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-kimchuski-gray-50"
          >
            <SiGmail size={24} />
          </Link>
        </div>
      </div>
      <div className="flex justify-between gap-x-10">
        <div>
          <Link
            href="/kimchuski"
            className="font-bold hover:text-kimchuski-gray-50"
          >
            INICIO
          </Link>
          <Link
            href="/kimchuski/preguntas-frecuentes"
            className="block hover:text-kimchuski-gray-50"
          >
            FAQ
          </Link>
        </div>

        <div>
          <Link
            href="/kimchuski/kimchi"
            className="font-bold hover:text-kimchuski-gray-50"
          >
            KIMCHI
          </Link>
          <Link
            href="/kimchuski/nosotros"
            className="block hover:text-kimchuski-gray-50"
          >
            Nuestra Historia
          </Link>
          <Link
            href="/kimchuski/beneficios"
            className="block hover:text-kimchuski-gray-50"
          >
            Beneficios
          </Link>
        </div>

        <div>
          <Link
            href="/kimchuski/prensa"
            className="font-bold hover:text-kimchuski-gray-50"
          >
            PRENSA
          </Link>
          <Link
            href="/kimchuski/contactanos"
            className="block hover:text-kimchuski-gray-50"
          >
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
