import Hero from "@/components/Hero/Hero";

import Navbar from "@/components/NavBar/NavBar";
import Products from "@/components/Products/Products";
import Head from "next/head";

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
        <Hero />
      </div>

      <Products />

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
