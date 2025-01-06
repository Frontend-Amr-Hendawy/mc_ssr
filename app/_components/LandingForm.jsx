import React from 'react'
import Image from "next/image";
import smile_face from "../../public/smile_face.png";
import { useTranslations } from "next-intl";

const LandingForm = () => {
  const t = useTranslations("landing");

  return (
<>
  <div className="flex flex-col md:flex-row pt-24 ">

    
    <div className='m-auto'>
      <Image src={smile_face} alt="smile_face" className="-mt-12" />
    </div>

    <div className="px-3 lg:pr-10 ">
      <form className="text-black-form flex flex-col items-center py-4 lg:px-6 space-y-3 md:border-2 md:rounded-3xl px-4 h-full">
        <h3 className="text-sm sm:text-base md:text-sm   lg:text-lg font-medium text-start">{t("header_title")}</h3>

        <div className='w-full space-y-3 flex flex-col items-stretch justify-between h-full'>
          <input type="text" autoFocus placeholder={t("name")} className="pr-3 border-2 text-start rounded-lg h-12 sm:h-12 md:h-10 lg:h-12 xl:h-16" />
          <input type="text" placeholder={t("email")} className="pr-3 border-2 text-start rounded-lg h-12 sm:h-12 md:h-10 lg:h-12 xl:h-16" />
          <input type="text" placeholder={t("phone_num")} className="pr-3 border-2 text-start rounded-lg h-12 sm:h-12 md:h-10 lg:h-12 xl:h-16" />
          <input type="number" placeholder={t("company_name")} className="pr-3 border-2 text-start rounded-lg h-12 sm:h-12 md:h-10 lg:h-12 xl:h-16" />
          <input type="number" placeholder={t("branch_numbers")} className="pr-3 border-2 text-start rounded-lg h-12 sm:h-12 md:h-10 lg:h-12 xl:h-16" />
          <input type="submit" value={t("send")} className="bg-primary-green text-white border-2 font-semibold text-xl border-primary-green h-12 rounded-full cursor-pointer hover:text-primary-green hover:bg-white transition" />
        </div>
      </form>
    </div>
  </div>
</>  
)
}

export default LandingForm;