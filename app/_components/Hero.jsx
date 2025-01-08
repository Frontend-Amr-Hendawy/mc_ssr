
import React from 'react'
import Header from './Header'
import { useTranslations } from 'next-intl'

const Hero = () => {
    const t = useTranslations("mainpage");
    return (
        <div className="bg-mainbg bg-cover bg-no-repeat bg-center w-full aspect-square md:h-[70vh]">

            <Header />
            <div className="flex flex-col justify-center items-center gap-6 w-full h-full text-center">

                <div className='text-2xl text-white flex flex-col gap-y-4'>
                    <h1 className="text-2xl font-bold md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                        {t("main_title1")}
                    </h1>
                    <h2 className="text-xs md:text-sm lg:text-lg xl:text-2xl 2xl:text-3xl">
                        {t("description_title")}
                    </h2>
                </div>

                <div className="flex flex-row justify-center gap-x-2 px-1">

                    <a
                        href="#"
                        className="block text-white py-3 px-4 text-xs xs:px-12 col-span-5  lg:text-lg bg-primary-green hover:bg-white hover:text-primary-green transition rounded-full font-bold">
                        {t("get_trial")}
                    </a>
                    {/* <a
                        href="#"
                        className="block px-4 sm:px-6 lg:px-10 py-3 text-xs col-span-3 font-bold  lg:text-lg text-primary-green bg-white hover:bg-primary-green hover:text-white transition rounded-full">
                        {t("know_more")}
                    </a> */}
                </div>
            </div>
        </div>
    )
}

export default Hero