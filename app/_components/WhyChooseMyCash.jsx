import { useTranslations } from 'next-intl'
import React from 'react'
import { HiMiniCodeBracket } from "react-icons/hi2";

const WhyChooseMyCash = () => {
 const t = useTranslations("whychoosemycash")
  return (
    <section>
        <div className='py-2 sm:py-4 md:py-6 lg:py-12 px-6'>
            <h2 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold pb-4'>{t("why_choose_mycash_title")}</h2>
            <h3 className='text-base sm:text-lg md:text-xl lg:text-2xl'>{t("why_choose_mycash_description")}</h3>
        </div>
        
        <div className='grid grid-cols-2 lg:grid-cols-3 xxs:gap-x-2 md:gap-x-4 xxs:gap-y-2 md:gap-y-6 px-4 py-0 sm:py-4 md:py-8lg:py-16 '>
            {/* First Left */}
            <div className='box bg-[#f8f8f8] px-4 xxs:pt-4 md:pt-8 xxs:pb-4 md:pb-12 rounded-3xl  flex flex-col text-start border-b-4 hover:border-b-4 hover:border-primary-blue hover:transition'>
                <div className='bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2 py-2 rounded-lg shadow-2xl self-start text-[#006968]'><HiMiniCodeBracket /></div>
                <h3 className='text-base sm:text-xl md:text-2xl lg:text-2xl  font-bold py-6'>{t("payment_integration_system_title")}</h3>
                <h4 className='text-sm sm:text-base md:text-lg lg:text-xl'>{t("payment_integration_system_description")}</h4>
            </div> 

            {/* First Right */}
            <div className='box bg-[#f8f8f8] px-4 xxs:pt-4 md:pt-8 xxs:pb-4 md:pb-12 rounded-3xl flex flex-col text-start border-b-4 hover:border-b-4 hover:border-primary-blue hover:transition'>
                <div className='bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2 py-2 rounded-lg shadow-2xl self-start text-[#006968]'><HiMiniCodeBracket /></div>
                <h3 className='text-base sm:text-xl md:text-2xl lg:text-2xl font-bold py-6'>{t("fast_ui_title")}</h3>
                <h4 className='text-sm sm:text-base md:text-lg lg:text-xl'>{t("fast_ui_description")}</h4>
            </div>
            {/* First Left */}
            <div className='box bg-[#f8f8f8] px-4 xxs:pt-4 md:pt-8 xxs:pb-4 md:pb-12 rounded-3xl flex flex-col text-start border-b-4 hover:border-b-4 hover:border-primary-blue hover:transition'>
                <div className='bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2 py-2 rounded-lg shadow-2xl self-start text-[#006968]'><HiMiniCodeBracket /></div>
                <h3 className='text-base sm:text-xl md:text-2xl lg:text-2xl font-bold py-6'>{t("ages_gender_title")}</h3>
                <h4 className='text-sm sm:text-base md:text-lg lg:text-xl'>{t("ages_gender_description")}</h4>
            </div>

            {/* First Right */}
            <div className='box bg-[#f8f8f8] px-4 xxs:pt-4 md:pt-8 xxs:pb-4 md:pb-12 rounded-3xl flex flex-col text-start border-b-4 hover:border-b-4 hover:border-primary-blue hover:transition'>
                <div className='bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2 py-2 rounded-lg shadow-2xl self-start text-[#006968]'><HiMiniCodeBracket /></div>
                <h3 className='text-base sm:text-xl md:text-2xl lg:text-2xl font-bold py-6'>{t("safe_data_title")}</h3>
                <h4 className='text-sm sm:text-base md:text-lg lg:text-xl'>{t("safe_data_description")}</h4>
            </div>

            {/* First Left */}
            <div className='box bg-[#f8f8f8] px-4 xxs:pt-4 md:pt-8 xxs:pb-4 md:pb-12 rounded-3xl flex flex-col text-start border-b-4 hover:border-b-4 hover:border-primary-blue hover:transition'>
                <div className='bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2 py-2 rounded-lg shadow-2xl self-start text-[#006968]'><HiMiniCodeBracket /></div>
                <h3 className='text-base sm:text-xl md:text-2xl lg:text-2xl font-bold py-6'>{t("payment_integration_companies_title")}</h3>
                <h4 className='text-sm sm:text-base md:text-lg lg:text-xl'>{t("payment_integration_companies_description")}</h4>
            </div>
            {/* First Right */}
            <div className='box bg-[#f8f8f8] px-4 xxs:pt-4 md:pt-8 xxs:pb-4 md:pb-12 rounded-3xl flex flex-col text-start border-b-4 hover:border-b-4 hover:border-primary-blue hover:transition'>
                <div className='bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2 py-2 rounded-lg shadow-2xl self-start text-[#006968]'><HiMiniCodeBracket /></div>
                <h3 className='text-base sm:text-xl md:text-2xl lg:text-2xl font-bold py-6'>{t("manage_sales_title")}</h3>
                <h4 className='text-sm sm:text-base md:text-lg lg:text-xl'>{t("manage_sales_description")}</h4>
            </div>


            {/* First Left */}
            <div className='box bg-[#f8f8f8] px-6 xxs:pt-4 md:pt-8 xxs:pb-4 md:pb-12 rounded-3xl flex flex-col text-start border-b-4 col-span-1 lg:col-span-1 hover:border-b-4 hover:border-primary-blue hover:transition'>
                <div className='bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2 py-2 rounded-lg shadow-2xl self-start text-[#006968]'><HiMiniCodeBracket /></div>
                <h3 className='text-base sm:text-xl md:text-2xl lg:text-2xl font-bold py-6'>{t("continues_updates_title")}</h3>
                <h4 className='text-sm sm:text-base md:text-lg lg:text-xl'>{t("continues_updates_description")}</h4>
            </div>

            {/* First Right */}
            <div className='box bg-[#f8f8f8] px-6 xxs:pt-4 md:pt-8 xxs:pb-4 md:pb-12 rounded-3xl flex flex-col text-start border-b-4 hover:border-b-4 hover:border-primary-blue hover:transition'>
                <div className='bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2 py-2 rounded-lg shadow-2xl self-start text-[#006968]'><HiMiniCodeBracket /></div>
                <h3 className='text-base sm:text-xl md:text-2xl lg:text-2xl font-bold py-6'>{t("safe_time_title")}</h3>
                <h4 className='text-sm sm:text-base md:text-lg lg:text-xl'>{t("safe_time_description")}</h4>
            </div>

            {/* First Right */}
            <div className='box bg-[#f8f8f8] px-4 xxs:pt-4 md:pt-8 xxs:pb-4 md:pb-12 mb-4 lg:mb-0 rounded-3xl flex flex-col text-start border-b-4 hover:border-b-4 col-span-2 lg:col-span-1 p hover:border-primary-blue hover:transition'>
                <div className='bg-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold px-2 py-2 rounded-lg shadow-2xl self-start text-[#006968]'><HiMiniCodeBracket /></div>
                <h3 className='text-base sm:text-xl md:text-2xl lg:text-2xl font-bold py-6'>{t("reports_analysis_title")}</h3>
                <h4 className='text-sm sm:text-base md:text-lg lg:text-xl'>{t("reports_analysis_description")}</h4>
            </div>

        </div>
    </section>
  )
}

export default WhyChooseMyCash