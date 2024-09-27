import Image from "next/image";

export default function KimchiProducts() {
  return (
    <section className="bg-white p-4 flex flex-col items-center space-y-8 ">
      {/* Jar 1 */}
      <div className="relative flex items-center justify-center space-x-4">
        {/* Left text */}
        <div className="text-center text-gray-700 gap-2 flex flex-col items-center">
          <p className="font-bold text-xs">
            FERMENTED IN-HOUSE FOR UNMATCHED DEPTH OF FLAVOR
          </p>
          <Image
            src="/images/arrow.webp"
            alt="Right Arrow"
            className="rotate-0"
            width={32}
            height={32}
          />
        </div>
        <Image
          src="/images/jar1.png"
          alt="Kimchi Jar"
          width={100}
          height={100}
        />

        {/* Right text */}
        <div className="text-center text-gray-700 gap-2 flex flex-col items-center">
          <p className="font-bold text-xs">
            FERMENTED IN-HOUSE FOR UNMATCHED DEPTH OF FLAVOR
          </p>
          <Image
            src="/images/arrow.webp"
            alt="Right Arrow"
            className="scale-x-[-1] rotate-0"
            width={32}
            height={32}
          />
        </div>
      </div>

      {/* Jar 2 */}
      <div className="relative flex items-center justify-center space-x-4">
        {/* Left text */}
        <div className="text-center text-gray-700 gap-2 flex flex-col items-center">
          <p className="font-bold text-xs">
            FERMENTED IN-HOUSE FOR UNMATCHED DEPTH OF FLAVOR
          </p>
          <Image
            src="/images/arrow.webp"
            alt="Right Arrow"
            className="rotate-0"
            width={32}
            height={32}
          />
        </div>
        {/* img jar */}
        <Image
          src="/images/jar2.png"
          alt="Kimchi Jar"
          width={100}
          height={100}
        />
        {/* Right text */}
        <div className="text-center text-gray-700 gap-2 flex flex-col items-center">
          <p className="font-bold text-xs">
            FERMENTED IN-HOUSE FOR UNMATCHED DEPTH OF FLAVOR
          </p>
          <Image
            src="/images/arrow.webp"
            alt="Right Arrow"
            className="scale-x-[-1] rotate-0"
            width={32}
            height={32}
          />
        </div>
      </div>

      {/* Jar 3 */}
      <div className="relative flex items-center justify-center space-x-4">
        {/* Left text */}
        <div className="text-center text-gray-700 gap-2 flex flex-col items-center">
          <p className="font-bold text-xs">
            FERMENTED IN-HOUSE FOR UNMATCHED DEPTH OF FLAVOR
          </p>
          <Image
            src="/images/arrow.webp"
            alt="Right Arrow"
            className="rotate-0"
            width={32}
            height={32}
          />
        </div>
        {/* img jar */}
        <Image
          src="/images/jar3.png"
          alt="Kimchi Jar"
          width={100}
          height={100}
        />
        {/* Right text */}
        <div className="text-center text-gray-700 gap-2 flex flex-col items-center">
          <p className="font-bold text-xs">
            FERMENTED IN-HOUSE FOR UNMATCHED DEPTH OF FLAVOR
          </p>
          <Image
            src="/images/arrow.webp"
            alt="Right Arrow"
            className="scale-x-[-1] rotate-0"
            width={32}
            height={32}
          />
        </div>
      </div>
    </section>
  );
}
