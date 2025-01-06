
"use client";
import React from "react";
import Header from "../_components/Header";

import Brands from "../_components/Brands";
import WhyMyCash from "../_components/WhyMyCash";
import WhyChooseMyCash from "../_components/WhyChooseMyCash";
import ContactUs from "../_components/ContactUs";
import Footer from "../_components/Footer";
import LandingForm from "../_components/LandingForm";

const LandingPage = () => {
  return (
    <section className="grid grid-cols-1 text-center">
        <Header />
        <LandingForm />
        <Brands />
        <WhyMyCash />
        <WhyChooseMyCash />
        <ContactUs />
        <Footer />
    </section>
  );
};

export default LandingPage;
