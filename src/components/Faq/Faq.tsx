import { FAQS } from "@/constants/faqs";
import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-36 px-8">
      <h2 className="text-3xl text-center mb-6">KIMCHI</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full">
        {/* FAQ section */}
        <div>
          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div key={index} className="pb-1 text-xs xl:text-sm">
                <button
                  className="text-left w-full flex justify-between items-center"
                  onClick={() => toggleFAQ(index)}
                >
                  {/* Question */}
                  <span
                    className={`font-semibold ${
                      activeIndex === index ? "text-green-600" : ""
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Icon animation - rotating X */}
                  <motion.span
                    initial={{ rotate: 0 }}
                    animate={{ rotate: activeIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.5 }}
                    className={`ml-4 font-bold ${
                      activeIndex === index ? "text-green-600" : "text-black"
                    }`}
                  >
                    +
                  </motion.span>
                </button>

                {/* Answer with animation */}
                <AnimatePresence initial={false}>
                  {activeIndex === index && (
                    <motion.p
                      className="mt-2 text-gray-600"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.75 }}
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Image section */}
        <div className="flex justify-center">
          <Image
            src="/images/faq/faq.jpeg"
            alt="Kimchi jar"
            className="w-auto max-w-full md:h-[450px]"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
