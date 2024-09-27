import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownMenuProps {
  title: string;
  items: { label: string; href: string }[];
}

const DropdownMenu = ({ title, items }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Button to toggle the dropdown */}
      <button
        className={`text-kimchuski-green-500 flex items-center font-bold hover:text-green-800 transition-colors duration-300 `}
      >
        {title}
        <svg
          className={`ml-2 h-4 w-4 transform transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown menu with framer-motion animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute shadow-lg mt-2 bg-kimchuski-red-50 rounded-sm border border-kimchuski-gray-200 py-2 z-10 w-max"
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{ opacity: 0.9, y: -3 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-kimchuski-green-500 font-bold ps-4 pr-10 hover:bg-kimchuski-green-300 hover:w-full hover:text-kimchuski-red-50 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
