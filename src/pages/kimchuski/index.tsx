import KimchiProducts from "@/components/KimchiProducts/KimchiProducts";
import Navbar from "@/components/NavBar/NavBar";
import Head from "next/head";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kimchuski - The Product That Started It All</title>
        <meta
          name="description"
          content="Kimchuski - Quality fermented products"
        />
      </Head>

      <div className="flex flex-col min-h-screen font-sans">
        <Navbar />

        {/* Hero Section */}
        <section
          className="relative bg-cover bg-center flex flex-grow h-full"
          // style={{ backgroundImage: `url('/images/hero/hero.jpg')` }}
          style={{ backgroundImage: `url('/images/hero/hero2.png')` }}
        >
          <div className="container ml-4 md:ml-32 flex flex-col text-kimchuski-gray-50  justify-center">
            <h2 className="md:text-3xl text-lg font-bold">
              FERMENTED FOR HEALTH & FLAVOR
            </h2>
            <h1 className="md:text-8xl text-4xl font-semibold mt-4 text-[#231f20] text-shadow-custom max-w-[16ch]">
              THE KIMCHI THAT STARTED IT ALL
            </h1>

            <Link
              href="/find-us"
              className="md:mt-8 mt-3 bg-kimchuski-green-500 leading-3 py-3 px-5 md:py-6 md:px-14 md:text-3xl rounded-full font-semibold w-fit text-white hover:bg-green-900 transition-colors duration-300"
            >
              Find Us Near You
            </Link>
          </div>
        </section>
      </div>

      {/* Product Section */}
      <KimchiProducts />

      {/* Additional Sections Here */}
    </div>
  );
}

{
  /* <section className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-primaryRed">Our Products</h2>
          <p className="mt-4 text-gray-600">
            Cold fermented for freshness and balanced flavor.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-white shadow-md p-4 rounded-lg">
              <Image
                src="/path-to-product-1.jpg"
                alt="Product 1"
                width={300}
                height={400}
              />
              <h3 className="text-xl font-bold text-kimchuski-green-base mt-4">
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
              <h3 className="text-xl font-bold text-kimchuski-green-base mt-4">
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
              <h3 className="text-xl font-bold text-kimchuski-green-base mt-4">
                Gochujang Paste
              </h3>
              <p className="text-gray-600">
                Balanced heat with complex flavor.
              </p>
            </div>
          </div>
        </div>
      </section> */
}
