"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { useRouter,usePathname } from "next/navigation";
// import logo from "@/public/logo3.png";
import { GrLanguage } from "react-icons/gr";

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const router = useRouter()
  const {locale} = router;
  const currentPath = usePathname();

  const t = useTranslations("navbar");

  const menuItems = [
    { href: "/", label: t("main_page") },
    { href: `${currentPath}/newoffer`, label: "صفحة الهبوط" },
    { href: `${currentPath}/whoweare`, label: t("about_us") },
    { href: "#", label: t("solutions"), dropdown: true },
    { href: "/package", label: t("packages") },
    { href: "/articles", label: t("articles") },
    { href: "/contactus", label: t("contact_us") },
  ];


  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  // const updateLanguage = (newLanguage) => {
  //   setLocale(newLanguage);
  // };


  return (
    <>
      <header className={`bg-white shadow-lg py-2 fixed z-50 top-10 left-0 right-0 mx-8 xl:mx-16 border ${isMenuOpen ? "rounded-lg" : " rounded-l-full rounded-r-full"}`}>

        {/* Desktop Version */}
        <div className="flex items-center justify-between ">

          <div className="buttons hidden lg:block">
            <button
              onClick={() => locale === "ar" ? "en" : "ar"}
              className="text-gray-600 hover:underline font-bold px-6"
            >
              {t(locale === "ar" ? "english" : "arabic")}
            </button>

            <button className="font-bold h-full bg-primary-green text-white w-24 py-3  rounded-full">
              {t("start_now")}
            </button>
          </div>


          <div className="block lg:hidden ps-6 text-black" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="5 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>

          </div>

          <div className="links">
            <nav
              className={`hidden lg:flex items-center space-x-2`}
            >
              {menuItems.map((item) => (
                <div key={item.href}>

                <Link
                 
                  href={item.href}
                  className={`block px-3  text-nowrap ${currentPath === item.href
                      ? "text-primary-green font-bold"
                      : "text-gray-700"
                      } hover:text-primary-green duration-200 transition-all ${item.dropdown ? "cursor-pointer" : ""} `}
                      onClick={() => item.dropdown && toggleDropdown("solutions")}>
                  {item.label}
                </Link>

                {item.dropdown && openDropdown === "solutions" && (
                <div className="absolute z-10 bg-white shadow-lg rounded-lg mt-2 py-2 w-48">
                <Link
                  href="/solutionsai"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setOpenDropdown(null)}
                >
                      حلول الذكاء الإصطناعي
                </Link>
                <Link
                  href="/sales"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setOpenDropdown(null)}
                >
                      حلول المبيعات
                </Link>
                <Link
                  href="/pos"
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  onClick={() => setOpenDropdown(null)}
                >
                      حلول نقاط البيع
                </Link>
              </div>
              )}
                </div>
              ))}

            </nav>
          </div>


          <div className="logo ">
            <Link href="/" className="">
              <Image
                src="/logo3.png"
                alt="MyCash Logo"
                className={`object-contain  xxs:h-8 xs:h-10 sm:h-12 md:h-12 xxs:w-40 `}
                width={200}
                height={200}

              />
            </Link>
          </div>

        </div>



        {/* Mobile & Tablets Version  */}
        {isMenuOpen && (
          <nav className="flex flex-col gap-y-6 py-4 text-start px-6">

            <div className="buttons flex flex-row items-center justify-start gap-x-3">
              <div className="">
                <GrLanguage />
              </div>
              <button
                onClick={() => updateLanguage(locale === "ar" ? "en" : "ar")}
                className="text-gray-600 hover:underline font-bold border-b-2 border-transparent hover:border-primary-grey-grey transition-all duration-200 "
              >
                {t(locale === "ar" ? "arabic" : "english")}
              </button>

            </div>

            {menuItems.map((item) => (
              <div  key={item.href} className=" ">
                  <Link
                  href={item.href}
                  className={`block ${currentPath === item.href
                      ? "text-primary-green font-bold"
                      : "text-gray-700"
                    } hover:text-primary-green duration-200 hover:pr-1 transition-all ${item.dropdown ? "cursor-pointer" : ""} `}
                
                    onClick={() => item.dropdown ? toggleDropdown("solutions") : setIsMenuOpen(false) }>
                  {item.label}
                </Link>

                {item.dropdown && openDropdown === "solutions" && (
                  <div className="leading-7 px-2">
                    <Link
                      href="/solutionsai"
                      className={`block ${currentPath === "/solutionsai"
                        ? "text-primary-green font-bold"
                        : "text-gray-700"
                      } hover:text-primary-green duration-200 hover:pr-1 transition-all `}
                    >
                      حلول الذكاء الإصطناعي
                    </Link>

                    <Link
                      href="/sales"
                      className={`block ${currentPath === "/solutionsai"
                        ? "text-primary-green font-bold"
                        : "text-gray-700"
                      } hover:text-primary-green duration-200 hover:pr-1 transition-all `}
                    >
                      حلول المبيعات
                    </Link>

                    <Link
                      href="/pos"
                      className={`block ${currentPath === "/solutionsai"
                        ? "text-primary-green font-bold"
                        : "text-gray-700"
                      } hover:text-primary-green duration-200 hover:pr-1 transition-all `}
                    >
                      حلول نقاط البيع
                    </Link>
                  </div>
                )}
              </div>

              
                
       
            ))}
              <button className="font-bold h-full bg-primary-green text-white w-full px-6 py-3 rounded-full">
                {t("start_now")}
              </button>
          </nav>
        )

        }

      </header>
    </>
  );
}
