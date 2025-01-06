"use client";
import React from "react";

// import bg from "@/public/bg.png";
import Brands from "../../mycash_newdesign/app/_components/Brands";
import Solutions from "../../mycash_newdesign/app/_components/Solutions";
import AdvancedSolutions from "../../mycash_newdesign/app/_components/AdvancedSolutions";
// import Carousel from "./_components/Carousel";
// import FeatureSection from "./_components/FeatureSection";
import Footer from "../../mycash_newdesign/app/_components/Footer";
import ContactUs from "../../mycash_newdesign/app/_components/ContactUs";
// import MyCashAi2 from "./_components/MyCashAi2";
import Promotion2 from "../../mycash_newdesign/app/_components/Promotion2";
// import Promotion2 from "./_components/Promotion2";
import Hero from "../../mycash_newdesign/app/_components/Hero";
import AboutSection2 from "../../mycash_newdesign/app/_components/AboutSection2";
import Carousel2 from "../../mycash_newdesign/app/_components/Carousel2";
import FeaturesSection2 from "../../mycash_newdesign/app/_components/FeatureSection2";
export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Brands />
        <Solutions />
        <AdvancedSolutions />
        {/* <Carousel /> */}
        <Carousel2 />
        {/* <FeatureSection /> */}
        <FeaturesSection2 />
        {/* <MyCashAi /> */}
        {/* <MyCashAi2 /> */}
        <AboutSection2 />
        {/* <Promotion /> */}
        <Promotion2 />
        {/* <Promotion2 /> */}
        <ContactUs />
        <Footer />
      </main>
    </>
  );
}
