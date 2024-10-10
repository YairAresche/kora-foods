import Hero from "@/components/Hero/Hero";

import Navbar from "@/components/NavBar/NavBar";
import OurStory from "@/components/OurStory/OurStory";
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
      <OurStory />

      {/* Additional Sections Here */}
    </div>
  );
}
