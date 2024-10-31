import Description from "@/components/Description/Description";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import KeyWords from "@/components/KeyWords/KeyWords";

import Navbar from "@/components/NavBar/NavBar";
import News from "@/components/News/News";
import OurStory from "@/components/OurStory/OurStory";
import Products from "@/components/Products/Products";
import Receipt from "@/components/Receipt/Receipt";
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
      <Receipt />
      <News />
      <KeyWords />
      <Description />
      <FindUs />

      <Footer />

      {/* Additional Sections Here */}
    </div>
  );
}
