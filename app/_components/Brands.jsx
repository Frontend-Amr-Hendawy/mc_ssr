"use client";
import Image from "next/image";
import React, { useState } from "react";

// import artboard1 from "@/public/artboard-1.png";
// import artboard2 from "@/public/artboard-2.png";
// import artboard3 from "@/public/artboard-3.png";
// import artboard4 from "@/public/artboard-4.png";
// import artboard5 from "@/public/artboard-5.png";
// import artboard6 from "@/public/artboard-6.png";
// import Image from "next/image";
const Brands = () => {
  const logos = [
    { src: "/logos/urpay.png", alt: "Urpay" },
    { src: "/logos/mada.png", alt: "Mada" },
    { src: "/logos/geidea.png", alt: "Geidea" },
    { src: "/logos/alrajhi.png", alt: "Alrajhi" },
    { src: "/logos/stcpay.png", alt: "Stc pay" },
    { src: "/logos/zatka.png", alt: "Zatka" },
  ]
  const [transition, ] = useState("transform 0.3s linear");
  const sliderStyle = {
    transform : `translateX(-${0}%)`,
    transition: transition,
    display:"flex",
  }
  return (
    <div className="w-full mx-auto overflow-hidden grid pt-4">

      <div className="flex" style={sliderStyle}>
        {[...logos].map((logo, index) =>
        (
          <div key={index} className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 flex justify-center items-center max-w-full max-h-full">
            <Image src={logo.src} alt={logo.alt} width={120} height={120} className="object-contain h-20 flex items-stretch justify-stretch" />
          </div>
        )
        )}
      </div>
    </div>
  );
};

export default Brands;
