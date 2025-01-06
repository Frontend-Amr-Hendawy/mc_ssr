import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const ContactUs = () => {
  const t = useTranslations("contact");
  return (
    <section className=" bg-[#f6f6f6] flex flex-col items-center gap-6 py-4 md:py-20 px-6 text-center ">
      {/* <h2 className="text-1xl sm:text-2xl md:text-4xl font-bold">{t("contact_title")}</h2> */}
      <h3 className="text-md sm:text-lg md:text-2xl">{t("contact_description")}</h3>
      <Link href="/" className="block text-white bg-primary-green px-12 py-4 rounded-full font-bold border-2 border-primary-green hover:text-primary-green hover:bg-white transition">{t("get_in_touch")}</Link>
    </section>
  );
};

export default ContactUs;
