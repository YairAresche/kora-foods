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
          <Link href="/" className="font-bold hover:text-kimchuski-gray-50">
            COMPRAR
          </Link>
          <Link href="/reserve" className="block hover:text-kimchuski-gray-50">
            Reservar
          </Link>
          <Link href="/house" className="block hover:text-kimchuski-gray-50">
            House
          </Link>
        </div>

        <div>
          <Link href="/" className="font-bold hover:text-kimchuski-gray-50">
            APRENDE
          </Link>
          <Link
            href="/our-story"
            className="block hover:text-kimchuski-gray-50"
          >
            Nuestra Historia
          </Link>
          <Link
            href="/kimchi-101"
            className="block hover:text-kimchuski-gray-50"
          >
            Kimchi 101
          </Link>
        </div>

        <div>
          <Link href="/" className="font-bold hover:text-kimchuski-gray-50">
            MÁS
          </Link>
          <Link href="/contact" className="block hover:text-kimchuski-gray-50">
            Contacto
          </Link>
          <Link href="/locator" className="block hover:text-kimchuski-gray-50">
            Localizador
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
