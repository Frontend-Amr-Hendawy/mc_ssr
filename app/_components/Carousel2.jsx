
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { TripleHeadings } from "./TripleHeadings";
import { LuPackageCheck } from "react-icons/lu";
import { GoDotFill } from "react-icons/go";

// import carousel from "./carousel.png";
const Carousel = () => {
  const t = useTranslations("carousel");
  const carouselData = [
    {
      titleKey: "item1.title",
      descriptionKeys: ["item1.description.0", "item1.description.1"],
      buttonTextKey: "item1.buttonText",
      imageUrl: "/carousel.png",
    },
    {
      titleKey: "item2.title",
      descriptionKeys: ["item2.description.0", "item2.description.1","item2.description.2"],
      buttonTextKey: "item2.buttonText",
      imageUrl: "/carosuel2.png",
    },
    {
      titleKey: "item3.title",
      descriptionKeys: ["item3.description.0", "item3.description.1","item3.description.2"],
      buttonTextKey: "item3.buttonText",
      imageUrl: "/carousel3.png",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentItem = carouselData[currentIndex];

  return (
    <div className="px-2 py-4 sm:p-16 sm:py-6 lg:p-28 lg:py-2 relative ">
        <TripleHeadings
          title={t("special_features")}
          description={t("title")}
        />

      <div className=" relative w-full mx-auto flex justify-center items-center p-4 xxs:pb-20 lg:p-4 lg:px-20 bg-slate-100 rounded-3xl ">
        {/* Unified Content and Image Section */}
        <div className="flex flex-col lg:flex-row items-center bg-white justify-between bg-primary-10 rounded-lg shadow-lg p-6 lg:p-8 gap-6 lg:gap-12 w-full ">
         
       {/* Image Section */}
       <div className="relative flex-1 mb-6 lg:mb-0 ">
            <Image
              src={currentItem.imageUrl}
              alt="Carousel Image"
              width={100}
              height={100}
              className="w-96 lg:w-full h-72 object-cover rounded-lg"
            />
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-between w-full h-full text-center lg:text-start mb-6 lg:mb-0 ">
            <div className="flex flex-col items-center lg:items-start mb-4 ">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 lg:mb-0 bg-primary-green text-white text-3xl">
                <LuPackageCheck />
              </div>
              <h2 className="text-base sm:text-xl lg:text-2xl font-bold text-gray-600 mt-2">
              {t(currentItem.titleKey)}

              </h2>
            </div>
            
            <ul className="space-y-2 mb-6 text-gray-600 text-sm sm:text-base font-medium">
              {currentItem.descriptionKeys.map((key, index) => (
                
                <li key={index} className="flex items-center">{<span className="text-primary-green"><GoDotFill /></span>} {t(key)}</li>
                
              ))}
            </ul>
            {/* Button Section */}
            <div className="w-full ">
              <button className="text-base w-56 sm:w-60 px-4 sm:px-6 py-2 sm:py-3 bg-primary-green font-bold text-white rounded-full hover:bg-green-600 hover:text-primary-green hover:bg-white transition border-2 border-primary-green">
              {t(currentItem.buttonTextKey)}
              </button>
            </div>
          </div>
   
        </div>

        {/* Left Arrow (Positioning for Small Screens) */}
        <button
          onClick={handlePrev}
          className="absolute left-4 lg:left-0 p-2 rounded-full hover:bg-gray-200 bottom-4 lg:bottom-auto"
        >
          <svg
            className="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow (Positioning for Small Screens) */}
        <button
          onClick={handleNext}
          className="absolute right-4 lg:right-0 p-2 rounded-full hover:bg-gray-200 bottom-4 lg:bottom-auto"
        >
          <svg
            className="h-8 w-8 sm:h-10 sm:w-10 lg:h-14 lg:w-14 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
