import Image from "next/image";
import React from "react";
// import solutions_img from "@/public/solutions.png";
import Link from "next/link";
import { useTranslations } from "use-intl";
import { TripleHeadings } from "./TripleHeadings";

// import ai_solution from "@/public/ai_solution.png";
// import pos_solutions from "@/public/pos_solutions.png";
// import sales_solutions from "@/public/sales_solutions.png";

const Solutions = () => {
  const t = useTranslations("solutions");
  return (
    <section className="py-10">
      <TripleHeadings title={t("discover_our_solutions")} description={t("control_your_payment")} />
      <div className="flex flex-col md:flex-row gap-y-4 xl:px-8">

        {/* content 1*/}
        <div className=" mx-2 grid grid-cols-1 bg-primary-grey-softer rounded-2xl 2xl:justify-around sm:mx-1 lg:px-6 xl:mx-4">
          <div className="md:order-2">
            <h3 className="text-lg text-center font-medium my-auto py-4 xs:text-xl md:py-2 lg:text-3xl lg:font-bold lg:pt-6 lg:text-[28.16px]">
              {t("ai_solutions")}
            </h3>
            <p className="text-sm leading-5 px-4 mb-5 text-center xs:text-base lg:font-normal lg:text-base lg:pt-4 ">
              {t("ai_solutions_desc")}
            </p>
          </div>

          <div className="rounded-2xl m-auto pt-4 px-4">
            <Image
              src="/ai_solution.png"
              alt="Solutions image"
              width={500} height={500}

              className=" w-full h-full rounded-2xl"
            />
          </div>

          <div className="order-3 flex  flex-row md:flex-row-reverse gap-2 justify-around text-center items-center py-4 px-2 xxs:px-2 xs:px-4 sm:px-8 md:px-1">
          <Link
              href="/solutionsai"
              className="block text-primary-green text-sm py-3 font-bold w-2/6 rounded-full border-2 border-primary-green xs:text-base md:text-md md:w-2/6 md:text-xs lg:py-3 lg:text-[12.52px] lg:text-sm xl:text-base hover:bg-primary-green hover:text-white transition"
            >
              {t("know_more")}
            </Link>
            <Link
              href="/"
              className="block text-white py-3 text-sm rounded-full border-2 border-primary-green font-bold w-4/6 bg-primary-green  xs:text-base md:text-xs lg:py-3  lg:text-sm  lg:text-[12.52px] xl:text-base hover:text-primary-green hover:bg-white transition"
            >
              {t("get_trial")}
            </Link>

          </div>
        </div>
        {/* content 1 */}



        {/*content 2 */}
        <div className="mx-2 grid grid-cols-1 bg-primary-grey-softer rounded-2xl 2xl:justify-around sm:mx-1 lg:px-6 xl:mx-4">
          <div className="md:order-2">
            <h3 className="text-lg text-center font-medium my-auto py-4 xs:text-xl md:py-2 lg:text-3xl lg:font-bold lg:pt-6 lg:text-[28.16px]">
              {t("sales_solutions")}
            </h3>
            <p className="text-sm  leading-5 px-4 mb-5 text-center xs:text-base lg:font-normal lg:text-base lg:pt-4 ">
              {t("sales_solutions_desc")}
            </p>
          </div>

          <div className="rounded-2xl m-auto pt-4 px-4">
            <Image
              src="/sales_solutions.png"
              alt="Solutions image"
              width={500} height={500}
              className=" w-full h-full rounded-2xl"
            />
          </div>

          <div className="order-3 flex  flex-row md:flex-row-reverse gap-2 justify-around text-center items-center py-4 px-2 xxs:px-2 xs:px-4 sm:px-8 md:px-1">
            <Link
              href="/sales"
              className="block text-primary-green text-sm py-3 font-bold w-2/6 rounded-full border-2 border-primary-green xs:text-base md:text-md md:w-2/6 md:text-xs lg:py-3 lg:text-[12.52px] lg:text-sm xl:text-base hover:bg-primary-green hover:text-white transition"
            >
              {t("know_more")}
            </Link>
            <Link
              href="/"
              className="block text-white py-3 text-sm rounded-full border-2 border-primary-green font-bold w-4/6 bg-primary-green  xs:text-base md:text-xs lg:py-3  lg:text-sm  lg:text-[12.52px] xl:text-base hover:text-primary-green hover:bg-white transition"
            >
              {t("get_trial")}
            </Link>



          </div>
        </div>
        {/* content 2 */}


        {/* content 3 */}
        <div className="mx-2 grid grid-cols-1 bg-primary-grey-softer rounded-2xl 2xl:justify-around sm:mx-1 lg:px-6 xl:mx-4">
          <div className="md:order-2">
            <h3 className="text-lg text-center font-medium my-auto py-4 xs:text-xl md:py-2 lg:text-3xl lg:font-bold lg:pt-6 lg:text-[28.16px]">
              {t("pos_solutions")}
            </h3>
            <p className="text-sm  leading-5 px-4 mb-5 text-center xs:text-base lg:font-normal lg:text-base lg:pt-4 ">
              {t("pos_solutions_desc")}
            </p>
          </div>

          <div className="rounded-2xl m-auto pt-4 px-4 ">
            <Image
              src="/pos_solutions.png"
              alt="Solutions image"
              width={500} height={500}

              className=" w-full  rounded-2xl"
            />
          </div>

          <div className="order-3 flex  flex-row md:flex-row-reverse gap-2 justify-around text-center items-center py-4 px-2 xxs:px-2 xs:px-4 sm:px-8 md:px-1">
            <Link
              href="/pos"
              className="block text-primary-green text-sm py-3 font-bold w-2/6 rounded-full border-2 border-primary-green xs:text-base md:text-md md:w-2/6 md:text-xs lg:py-3 lg:text-[12.52px] lg:text-sm xl:text-base hover:bg-primary-green hover:text-white transition"
            >
              {t("know_more")}
            </Link>
            <Link
              href="/"
              className="block text-white py-3 text-sm rounded-full border-2 border-primary-green font-bold w-4/6 bg-primary-green  xs:text-base md:text-xs lg:py-3  lg:text-sm  lg:text-[12.52px] xl:text-base hover:text-primary-green hover:bg-white transition"
            >
              {t("get_trial")}
            </Link>



          </div>
        </div>
        {/* content 3 */}

      </div>

    </section>
  );
};

export default Solutions;
