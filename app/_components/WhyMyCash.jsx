import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import box_img from "../../public/box_img.png";
import { BsArrowLeft } from "react-icons/bs";
const WhyMyCash = () => {
  const t = useTranslations("whymycash");
  return (
    <section className="px-[5%] py-12 bg-primary-grey-softgrey">
       <div className="pb-10">
        <h2 className="text-lg sm:text-xl md:text-2xl xl lg:text-3xl font-bold pb-4">{t("whymycash_title")}</h2>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl ">{t("whymycash_description")}</h3>
      </div> 

      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {/* Box One */}
        <div className="shadow-xl rounded-b-xl border-b-2 bg-white h-ful">
          <Image src={box_img} alt="box img" className="lg:h-[60%]" />
          <div className="flex flex-col justify-evenly lg:h-[45%] px-4 py-4 text-start ">
          <h3 className="text-base lg:text-xl xl:text-3xl font-bold ">{t("attend_leave_title")}</h3>
          <h4 className="text-base lg:text-lg md:leading-10 md:pb-4">{t("attend_leave_content")}</h4>
          <div className="mb-5 text-base md:text-lg xl:text-3xl bg-primary-grey-arrow self-start px-4 py-2 rounded-bl-xl hover:bg-primary-grey-grey hover:text-white transition ms-auto">
            <BsArrowLeft />
          </div>
        </div>
        </div>


        {/* Box Two */}
        <div className="shadow-xl rounded-b-xl border-b-2 bg-white h-ful">
          <Image src={box_img} alt="box img" className="lg:h-[60%]" />
          <div className="flex flex-col justify-evenly lg:h-[45%] px-4 py-4 text-start ">
          <h3 className="text-base lg:text-xl xl:text-3xl font-bold ">{t("measure_clients_title")}</h3>
          <h4 className="text-base lg:text-lg md:leading-10 md:pb-4">{t("measure_clients_content")}</h4>
          <div className="mb-5 text-base md:text-lg xl:text-3xl bg-primary-grey-arrow self-start px-4 py-2 rounded-bl-xl hover:bg-primary-grey-grey hover:text-white transition ms-auto">
          <BsArrowLeft />
          </div>
        </div>
        
        </div>
        {/* Box Three */}
        <div className="shadow-xl rounded-b-xl border-b-2 bg-white h-ful">
          <Image src={box_img} alt="box img" className="lg:h-[60%]" />
          <div className="flex flex-col justify-evenly lg:h-[45%] px-4 py-4 text-start ">
            <h3 className="text-base lg:text-xl xl:text-3xl font-bold">{t("selling_cams_title")}</h3>
            <h4 className="text-base lg:text-lg md:leading-10 md:pb-4">{t("selling_cams_content")}</h4>
            <div className="mb-5 text-base md:text-lg xl:text-3xl bg-primary-grey-arrow self-start px-4 py-2 rounded-bl-xl hover:bg-primary-grey-grey hover:text-white transition ms-auto">
              <BsArrowLeft />
            </div>
          </div>
        </div>




{/* 

            <h3 className="text-3xl font-bold pb-3">{t("attend_leave_title")}</h3>
            <h4 className="text-lg flex">{t("attend_leave_content")}</h4>

*/}
        {/* Box Two */}

        {/* Box Three */}

      </section>
    </section>
  );
};

export default WhyMyCash;
