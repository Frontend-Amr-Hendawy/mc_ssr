import React from "react";
import { useTranslations } from "next-intl";
import img from "@/public/Frame 1171278757.png";
import Image from "next/image";
import im from "@/public/Frame.png";
import svg from "@/public/svg2-removebg-preview.png";
import svg1 from "@/public/Get_Started_Right_Image__1_.svg.png";
import Link from "next/link";
const  PromoSection: React.FC = () => {
  const t = useTranslations("promosection");

  return (
    <section className="relative flex justify-center items-center px-4 sm:px-8 lg:px-20 bg-slate-50 mt-20">
      <div className="absolute z-0 bottom-0 right-0">
        <Image
          src={svg}
          // layout="fill"
          placeholder="blur"
          quality={80}
          className="h-80 lg:h-auto "
          alt="Mountains and forests with two cabins"
        />
      </div>
      <div className="absolute lg:bottom-0 left-0">
        <Image
          src={svg1}
          // layout="fill"
          placeholder="blur"
          quality={80}
          className="h-80 lg:h-auto "
          alt="Mountains and forests with two cabins"
        />
      </div>
      {/* Content Container */}
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-20 lg:gap-8 justify-between">


        {/* Image Section (Appears First on Small Screens) */}
        <div className="lg:w-1/2 flex justify-center lg:justify-start order-1 lg:order-1">
          <div className="relative">
            {/* Single Image for the two phones */}
            <Image src={img} alt="App Preview" className="max-w-full h-auto" />
          </div>
        </div>


        {/* Text Section */}
        <div className="lg:w-1/2 text-center z-40 lg:text-start px-4 py-8 order-2 mb-20 lg:order-2">
          <h2 className="text-2xl md:text-4xl font-bold text-primary-30 mb-4 text-primary-blue">
            {t("promoHeading")}
          </h2>
          <p className="text-2xl text-primary-30 text-primary-blue">{t("promo_description")}</p>

          {/* Call-to-action Button */}
          <Link href="https://play.google.com/store/apps/details?id=com.codeIn.myCash">
            <Image
              src={im}
              alt="ctaText"
              height={200}
              width={200}
              className="mt-10"
            />
          </Link>
        </div>


        
      </div>
    </section>
  );
};

export default PromoSection;

