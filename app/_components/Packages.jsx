import React from 'react'
import { BsStars } from "react-icons/bs";
import { HiOutlineExclamationCircle } from "react-icons/hi";

export const Packages = () => {
    
    return (
        <div className='font-cairo_new lg:w-full xl:w-[80%] mx-auto flex flex-col items-center gap-y-6 px-5 py-4 md:grid md:grid-cols-3 md:relative md:-top-40 '>
            
            {/*First Table  */}
                <div className='pt-4 text-end flex flex-col shadow-xl w-full md:order-2 z-50 scale-105 '>
                    <div className='flex justify-center items-center py-4 bg-primary-blue text-white w-full gap-x-2 text-base xs:text-xl md:text-2xl lg:text-2xl rounded-t-2xl'>
                        <BsStars />
                        <h2 className='font-bold '>الأكثر شعبية</h2>
                    </div>

                    <div className=' border-b-2 text-center flex flex-col gap-y-3 py-4 bg-white rounded-t-2xl border-t-2 '>
                    <h3 className='text-[22px] xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl'>أساسي</h3>

                        <div className='text-primary-grey-package'>
                            <span className='text-2xl xs:text-4xl xl:text-5xl md:text-4xl lg:text-5xl text-black pr-2'>699</span> 
                            <span className='text-xl xs:text-lg sm:text-xl md:text-2xl lg:text-3xl'>SAR/year</span>
                        </div>

                        <div className='flex flex-row justify-center items-center gap-x-2 text-primary-green font-cairo lg:pb-4'>
                            <h4 className='text-base  md:text-lg lg:text-xl font-extrabold '>صالحة لما يصل إلى 5 مستخدمين</h4>
                            <HiOutlineExclamationCircle />
                        </div>
                    </div>

                    <div className='flex flex-col gap-y-3 sm:gap-y-6 items-end px-6 py-8 bg-[#f5f5f5] text-[#636363] font-cairo font-normal text-sm xs:text-base sm:text-lg md:text-base lg:text-xl'>

                        <div className='flex flex-row gap-x-2'>
                            <div>إضافة 5 فروع</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>
                        <div className='flex flex-row gap-x-2'>
                            <div>إضافة إضافة عدد غير محدود من المنتجات</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>

                        <div className='flex flex-row gap-x-2'>
                            <div>إضافة إضافة عدد غير محدود من العملاء</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>
                        <div className='flex flex-row gap-x-2'>
                            <div>إصدار الفواتير الضريبية</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>
                        <div className='flex flex-row gap-x-2'>
                            <div>إصدار فواتير مبسطة</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>
                        <div className='flex flex-row gap-x-2'>
                            <div>إصدار الفواتير الفورية</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>
                        <div className='flex flex-row gap-x-2'>
                            <div>إصدار التقارير الضريبية</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>
                        <div className='flex flex-row gap-x-2'>
                            <div>إصدار تقارير المخزن</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>
                        <div className='flex flex-row gap-x-2'>
                            <div> نظام ماي كاش + جهاز مجاني</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>
                        <div className="flex flex-row justify-center w-full text-center">
                            <a
                                href="#"
                                className="block text-white py-3 px-8 xs:px-12 bg-primary-green w-full hover:bg-white hover:text-primary-green transition rounded-full font-bold border-2 border-primary-green">
                                ابدء الآن
                            </a>
                        </div>
                    </div>

                </div>
            {/*First Table  */}

            {/*Second Table  */}
                <div className='pt-4 text-end flex flex-col shadow-2xl w-full md:order-1'>


                <div className=' border-b-2 text-center flex flex-col gap-y-3 py-4 bg-white rounded-t-2xl border-t-2 '>
                        <h3 className='text-[22px] xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl '>أساسي</h3>

                        <div className='text-primary-grey-package'>
                            <span className='text-2xl xs:text-4xl xm:text-5xl md:text-4xl lg:text-5xl text-black pr-2'>699</span> 
                            <span className='text-xl xs:text-lg sm:text-xl md:text-2xl lg:text-3xl'>SAR/year</span>
                        </div>

                        <div className='flex flex-row justify-center items-center gap-x-2 text-primary-green font-cairo lg:pb-4'>
                            <h4 className='text-base  md:text-lg lg:text-xl font-extrabold '>صالحة لما يصل إلى 5 مستخدمين</h4>
                            <HiOutlineExclamationCircle />
                        </div>
                    </div>
                    <div className='flex flex-col gap-y-3 sm:gap-y-6 items-end px-6 py-6 bg-[#f5f5f5] text-[#636363] font-cairo font-normal rounded-b-xl text-sm xs:text-base sm:text-lg md:text-base lg:text-xl'>
                        <div className='flex flex-row gap-x-2 '>
                            <div>إضافة 5 فروع</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>
                        <div className='flex flex-row gap-x-2 '>
                            <div>إضافة إضافة عدد غير محدود من المنتجات</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>

                        <div className='flex flex-row gap-x-2 '>
                            <div>إضافة إضافة عدد غير محدود من العملاء</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>
                        <div className='flex flex-row gap-x-2 '>
                            <div>إصدار الفواتير الضريبية</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>
                        <div className='flex flex-row gap-x-2 '>
                            <div>إصدار فواتير مبسطة</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>
                        <div className='flex flex-row gap-x-2 '>
                            <div>إصدار الفواتير الفورية</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>
                        <div className='flex flex-row gap-x-2 '>
                            <div>إصدار التقارير الضريبية</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>
                        <div className='flex flex-row gap-x-2 '>
                            <div>إصدار تقارير المخزن</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>
                        <div className='flex flex-row gap-x-2 '>
                            <div> نظام ماي كاش + جهاز مجاني</div>
                            <span className='text-primary-blue'>✔</span>
                        </div>
                        <div className="flex flex-row justify-center w-full text-center">
                            <a
                                href="#"
                                className="block text-primary-green py-3 px-8 xs:px-12 bg-[#74C338]/20 w-full border-2 border-primary-green hover:bg-white hover:text-primary-green transition rounded-full font-bold">
                                ابدء الآن
                            </a>
                        </div>

                    </div>

                </div>
            {/*Second Table  */}

            {/*Third Table  */}
            <div className='text-end flex flex-col shadow-xl w-full md:order-3 '>

            <div className=' border-b-2 text-center flex flex-col gap-y-3 py-4 bg-white rounded-t-2xl border-t-2 '>
            <h3 className='text-[22px] xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl'>أساسي</h3>

                    <div className='text-primary-grey-package'>
                        <span className='text-2xl xs:text-4xl xl:text-5xl md:text-4xl lg:text-5xl text-black pr-2'>699</span> 
                        <span className='text-xl xs:text-lg sm:text-xl md:text-2xl lg:text-3xl'>SAR/year</span>
                    </div>

                    <div className='flex flex-row justify-center items-center gap-x-2 text-primary-green font-cairo lg:pb-4'>
                        <h4 className='text-base  md:text-lg lg:text-xl font-extrabold '>صالحة لما يصل إلى 5 مستخدمين</h4>
                        <HiOutlineExclamationCircle />
                    </div>
                </div>
                <div className='flex flex-col gap-y-3 sm:gap-y-6 items-end px-6 py-6 bg-[#f5f5f5] text-[#636363] font-cairo font-normal rounded-b-xl text-sm xs:text-base sm:text-lg md:text-base lg:text-xl'>
                    <div className='flex flex-row gap-x-2 '>
                        <div>إضافة 5 فروع</div>
                        <span className='text-primary-blue'>✔</span>
                    </div>
                    <div className='flex flex-row gap-x-2 '>
                        <div>إضافة إضافة عدد غير محدود من المنتجات</div>
                        <span className='text-primary-blue'>✔</span>
                    </div>

                    <div className='flex flex-row gap-x-2 '>
                        <div>إضافة إضافة عدد غير محدود من العملاء</div>
                        <span className='text-primary-blue'>✔</span>
                    </div>
                    <div className='flex flex-row gap-x-2 '>
                        <div>إصدار الفواتير الضريبية</div>
                        <span className='text-primary-blue'>✔</span>
                    </div>
                    <div className='flex flex-row gap-x-2 '>
                        <div>إصدار فواتير مبسطة</div>
                        <span className='text-primary-blue'>✔</span>
                    </div>
                    <div className='flex flex-row gap-x-2 '>
                        <div>إصدار الفواتير الفورية</div>
                        <span className='text-primary-blue'>✔</span>
                    </div>
                    <div className='flex flex-row gap-x-2 '>
                        <div>إصدار التقارير الضريبية</div>
                        <span className='text-primary-blue'>✔</span>
                    </div>
                    <div className='flex flex-row gap-x-2 '>
                        <div>إصدار تقارير المخزن</div>
                        <span className='text-primary-blue'>✔</span>
                    </div>
                    <div className='flex flex-row gap-x-2 '>
                        <div> نظام ماي كاش + جهاز مجاني</div>
                        <span className='text-primary-blue'>✔</span>
                    </div>
                    <div className="flex flex-row justify-center w-full text-center">
                        <a
                            href="#"
                            className="block text-primary-green py-3 px-8 xs:px-12 bg-[#74C338]/20 w-full border-2 border-primary-green hover:bg-white hover:text-primary-green transition rounded-full font-bold">
                            ابدء الآن
                        </a>
                    </div>

                </div>
            </div>
            {/*Third Table  */}

        </div>
    )
}
