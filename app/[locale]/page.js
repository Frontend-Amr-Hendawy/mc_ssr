"use client";
import React from "react";

// import FeaturesSection2 from "../../mycash_newdesign/app/_components/FeatureSection2";
import Brands from "../_components/Brands";
// import Carousel2 from "../_components/Carousel2";
import Hero from "../_components/Hero";
import Solutions from "../_components/Solutions";
// import AdvancedSolutions from "../_components/AdvancedSolutions";
// import AboutSection2 from "../_components/AboutSection2";
import ContactUs from "../_components/ContactUs";
import Footer from "../_components/Footer";
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Brands />
        <Solutions />
        {/* <AdvancedSolutions /> */}
        {/* <Carousel2 />
        <FeaturesSection2 />
        <AboutSection2 /> */}
        {/* <ContactUs /> */}
        {/* <Footer /> */}
      </main>
    </>
  );
}
