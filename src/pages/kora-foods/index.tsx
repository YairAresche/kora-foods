import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kora - The Product That Started It All</title>
        <meta name="description" content="Kora - Quality fermented products" />
      </Head>

      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex space-x-4">
            <Link href="/about" className="text-koraGreen">
              About
            </Link>
            <Link href="/faq" className="text-koraGreen">
              FAQ
            </Link>
            <Link href="/recipes" className="text-koraGreen">
              Recipes
            </Link>
          </div>
          {/* Placeholder logo for Kora */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-deepRed">Kora</h1>
          </div>
          <div className="flex space-x-4">
            {/* Placeholder for future pages */}
            <Link href="/find-us" className="text-gray-400">
              Find Us
            </Link>
            <Link href="/press" className="text-gray-400">
              Press
            </Link>
            <Link href="/products" className="text-gray-400">
              Products
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: "url('/path-to-your-hero-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
        {/* Dark overlay */}
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
          <h2 className="text-white text-xl font-bold">
            FERMENTED FOR HEALTH & FLAVOR
          </h2>
          <h1 className="text-white text-6xl font-bold mt-4">
            The Product That Started It All
          </h1>
          <Link
            href="/find-us"
            className="mt-8 bg-koraGreen text-white py-3 px-6 rounded-lg font-semibold"
          >
            Find Us Near You
          </Link>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primaryRed">Our Products</h2>
          <p className="mt-4 text-gray-600">
            Cold fermented for freshness and balanced flavor.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Example of Product Cards */}
            <div className="bg-white shadow-md p-4 rounded-lg">
              <Image
                src="/path-to-product-1.jpg"
                alt="Product 1"
                width={300}
                height={400}
              />
              <h3 className="text-xl font-bold text-koraGreen mt-4">
                Original Kimchi
              </h3>
              <p className="text-gray-600">
                Made with Napa Cabbage and fermented for rich flavor.
              </p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <Image
                src="/path-to-product-2.jpg"
                alt="Product 2"
                width={300}
                height={400}
              />
              <h3 className="text-xl font-bold text-koraGreen mt-4">
                Everyday Kimchi
              </h3>
              <p className="text-gray-600">Perfect for snacking and topping.</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <Image
                src="/path-to-product-3.jpg"
                alt="Product 3"
                width={300}
                height={400}
              />
              <h3 className="text-xl font-bold text-koraGreen mt-4">
                Gochujang Paste
              </h3>
              <p className="text-gray-600">
                Balanced heat with complex flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Sections Here */}
    </div>
  );
}
