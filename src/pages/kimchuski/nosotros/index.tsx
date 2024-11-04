import AboutUs from "@/components/About/About";
import Different from "@/components/About/Different";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/NavBar/NavBar";
import React from "react";

const index = () => {
  return (
    <div>
      <Navbar />
      <AboutUs />
      <Different />
      <Footer />
    </div>
  );
};

export default index;
