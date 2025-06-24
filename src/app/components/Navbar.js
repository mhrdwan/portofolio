"use client";
import React from "react";
import { useEffect, useState } from "react";
import gambar from "../../../public/IMG/292817461_7649943481742901_6633087870742063213_n.jpg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  easeInOut,
} from "framer-motion";
import { useTranslation } from "../hooks/useTranslation";
import LanguageSwitcher from "./LanguageSwitcher";

function Navbar() {
  const { scrollY } = useScroll();
  const { t, mounted: translationMounted, locale } = useTranslation();

  const [hide, sethide] = useState(false);
  const [angka, setangka] = useState("");
  useMotionValueEvent(scrollY, "change", (latest) => {
    const Sebelumnya = scrollY.getPrevious();
    setangka(latest);
    if (latest > Sebelumnya && latest > 50) {
      sethide(true);
    } else {
      sethide(false);
    }
  });

  const [mounted, setMounted] = useState(false);
  const NamaHalaman = usePathname();
  const [scales, setScale] = useState("scale-0");

  useEffect(() => {
    setMounted(true);
    // Force dark mode
    document.documentElement.classList.add("dark");
    document.documentElement.classList.remove("light");
  }, []);

  if (!mounted || !translationMounted) {
    return null;
  }

  return (
    <div
      style={{
        backgroundColor: angka >= 5 ? "#121212" : "",
        opacity: hide ? 0 : 1,
        transition: "opacity 0.25 ease",
      }}
      className={`flex items-center justify-between py-5 mb-4 text-zinc-300 ${
        hide === false && angka >= 2
          ? ` bg-black/80 backdrop-blur-sm transition-all duration-700 ease-in-out`
          : ""
      } top-0 sticky z-50`}
    >
      <div
        className={`fixed inset-0 z-10 h-screen transition-transform duration-200 transform ${scales} lg:scale-100 lg:h-fit lg:static backdrop-filter backdrop-blur-xl lg:backdrop-blur-0 lg:w-4/6`}
      >
        <motion.nav
          variants={{
            visible: { y: 0 },
            hidden: { y: "-250%" },
          }}
          animate={hide ? "hidden" : "visible"}
          transition={{ duration: 0.25, ease: easeInOut }}
        >
          <ul className="pb-6 m-6 space-y-4 shadow-2xl lg:shadow-none rounded-xl lg:pb-0 lg:m-0 bg-zinc-800 lg:bg-transparent lg:rounded-none">
            <li className="flex items-center justify-between px-4 py-2 text-sm lg:py-0 lg:hidden">
              <p>{t("nav.navigation")}</p>
              <button
                onClick={() => setScale("scale-0")}
                className="box-content px-4 py-2 border rounded-full border-zinc-500 hover:bg-zinc-700 text-white"
              >
                X
              </button>
            </li>
            <li className="block mx-4 mr-10 font-normal lg:py-2 lg:px-4 lg:font-bold border-zinc-700 lg:m-0 lg:inline-block">
              <Link
                href={`/${locale}`}
                className={`${
                  NamaHalaman === `/${locale}` ? "text-teal-300" : ""
                } text-sm transition-all  hover:text-teal-300 cursor-pointer text-white`}
              >
                <p className="">{t("nav.about")}</p>
              </Link>
            </li>
            <li className="block mx-4 mr-10 font-normal lg:py-2 lg:px-4 lg:font-bold border-zinc-700 lg:m-0 lg:inline-block">
              <Link
                href={`/${locale}/portofolio`}
                className={`${
                  NamaHalaman === `/${locale}/portofolio` ? "text-teal-300" : ""
                } text-sm transition-all  hover:text-teal-300   cursor-pointer text-white`}
              >
                {t("nav.portfolio")}
              </Link>
            </li>
            <li className="block mx-4 mr-10 font-normal lg:py-2 lg:px-4 lg:font-bold border-zinc-700 lg:m-0 lg:inline-block">
              <Link
                href={`/${locale}/blog`}
                className={`${
                  NamaHalaman === `/${locale}/blog` ? "text-teal-300" : ""
                } text-sm transition-all  hover:text-teal-300   cursor-pointer text-white`}
              >
                {t("nav.blog")}
              </Link>
            </li>
          </ul>
          <div className="mx-6 shadow-2xl bg-zinc-800 lg:hidden lg:p-4 lg:from-zinc-900 lg:to-transparent lg:border-zinc-700 border-0 lg:border border-b-0 rounded-lg lg:bg-gradient-to-br lg:dark:from-zinc-900 lg:dark:to-transparent border-zinc-800">
            <div className="relative flex justify-center mx-4 my-2">
              <Image className="w-40 h-40 px-2 py-2 rounded-2xl" src={gambar} />
            </div>
            <div className="my-4 text-center">
              <h1 className="text-2xl font-bold tracking-wider text-center text-white">
                {t("profile.greeting")}
                <br />
                {t("profile.name")}
              </h1>
              <div className="font-light text-teal-300 animate-typing f text--green-600">
                {t("profile.role")}
              </div>
            </div>
            <div className="my-2 space-y-2 text-sm text-center lg:my-10 font-poppins text-zinc-400">
              <p className=" border-b border-zinc-400">{t("profile.email")}</p>
              <p className="inline-block border-b border-zinc-400">
                {t("profile.phone")}
              </p>
            </div>
            <div className="mt-10 space-y-2 flex flex-col w-full ">
              <button
                onClick={() =>
                  window.open("https://wa.me/6281221871961", "_blank")
                }
                className="px-16 py-2 mx-auto font-semibold transition-all duration-75 bg-teal-400 rounded-full text-white hover:bg-teal-800 hover:text-white"
              >
                {t("profile.hireMe")}
              </button>
              <a
                onClick={() =>
                  window.open(
                    "/Mohamad_Hasyim_Ridwan_FullStack_Developer_CV.pdf",
                    "_blank"
                  )
                }
                className="hover:cursor-pointer flex items-center  justify-center px-12 py-2 mx-auto font-semibold text-white transition-all duration-75 rounded-full bg-zinc-700 hover:bg-teal-800 hover:text-white"
              >
                {t("profile.downloadCV")}
              </a>
            </div>

            {/* Language Switcher for Mobile */}
            <div className="flex justify-center mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </motion.nav>
      </div>
      <div className="w-full text-xl lg:w-2/6">
        <motion.nav
          variants={{
            visible: { y: 0 },
            hidden: { y: "-250%" },
          }}
          animate={hide ? "hidden" : "visible"}
          transition={{ duration: 0.25, ease: easeInOut }}
        >
          <a className="font-bold justify-centerflex md:hidden text-teal-300">
            MHR
          </a>
          <a className="font-bold justify-centerflex hidden md:block text-teal-300">
            Mohamad Hasyim Ridwan
          </a>
        </motion.nav>
      </div>

      {/* Language Switcher for Desktop */}
      <div className="hidden lg:block">
        <LanguageSwitcher />
      </div>

      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-200%" },
        }}
        animate={hide ? "hidden" : "visible"}
        transition={{ duration: 0.25, ease: easeInOut }}
      >
        <button
          onClick={() => setScale("scale-100")}
          className="font-semibold hover:text-teal-300 ml-3  flex items-center gap-2 px-4 py-2 text-sm border rounded-full lg:hidden hover:border-zinc-600 active:bg-zinc-600 border-zinc-400 text-white"
        >
          {t("nav.menu")}
        </button>
      </motion.nav>
    </div>
  );
}

export default Navbar;
