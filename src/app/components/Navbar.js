"use client"
import React from 'react'
import { useEffect, useState } from "react"
const { useTheme } = require("next-themes")
import gambar from "../assets/IMG/292817461_7649943481742901_6633087870742063213_n.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, useScroll, useMotionValueEvent, easeInOut } from "framer-motion"

function Navbar() {
    const { scrollY } = useScroll()

    const [hide, sethide] = useState(false)
    const [angka, setangka] = useState("")
    useMotionValueEvent(scrollY, "change", (latest) => {
        const Sebelumnya = scrollY.getPrevious()
        setangka(latest)
        if (latest > Sebelumnya && latest > 50) {
            sethide(true)
        }
        else {
            sethide(false)
        }
    })

    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false);
    const NamaHalaman = usePathname();
    const [scales, setScale] = useState("dark:scale-0")
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (

        <div style={{
            backgroundColor: (theme === "system" || (theme === "dark" && angka >= 5)) ? "#121212" : "",
            opacity: hide ? 0 : 1,
            transition: "opacity 0.25 ease" 
        }} className={`flex items-center justify-between py-5 mb-4 text-zinc-500 dark:text-zinc-300   ${hide === false && theme === "dark" && angka >= 2 ? `dark:bg-zinc-900 bg-white  transition-all duration-700 ease-in-out` : ""}  ${angka <= 2 && theme === "dark" ? `dark:bg-transparent bg-white  transition-all duration-700 ease-in-out` : ""} ${hide === false && theme === "light" ? ` bg-white  transition-all duration-700 ease-in-out` : ""} top-0 sticky z-50`} >
            <div className={`fixed inset-0 z-10 h-screen transition-transform duration-200 transform ${scales} lg:scale-100 lg:h-fit lg:static backdrop-filter backdrop-blur-xl lg:backdrop-blur-0 lg:w-4/6`}>
                <motion.nav
                    variants={{
                        visible: { y: 0 },
                        hidden: { y: "-250%" }
                    }}
                    animate={hide ? "hidden" : "visible"}
                    transition={{ duration: 0.25, ease: easeInOut }}
                >
                    <ul className='pb-6 m-6 space-y-4 shadow-2xl lg:shadow-none rounded-xl lg:pb-0 lg:m-0 dark:bg-zinc-800 lg:dark:bg-transparent lg:rounded-none'>
                        <li className='flex items-center justify-between px-4 py-2 text-sm lg:py-0 lg:hidden'>
                            <p>Navigation</p>
                            <button onClick={() => setScale("scale-0")} className='box-content px-4 py-2 border rounded-full border-zinc-500 hover:bg-zinc-900'>X</button>
                        </li>
                        <li className='block mx-4 mr-10 font-normal lg:py-2 lg:px-4 lg:font-bold border-zinc-700 lg:m-0 lg:inline-block'>
                            <Link Link href={"/"} className={`${NamaHalaman === "/" ? "text-teal-300" : ""} text-sm transition-all  hover:text-teal-300 cursor-pointer`}>About</Link>
                        </li>
                        <li className='block mx-4 mr-10 font-normal lg:py-2 lg:px-4 lg:font-bold border-zinc-700 lg:m-0 lg:inline-block'>
                            <Link href="/portofolio" className={`${NamaHalaman === "/portofolio" ? "text-teal-300" : ""} text-sm transition-all  hover:text-teal-300   cursor-pointer`}>Portofolio</Link>
                        </li>
                        <li className='block mx-4 mr-10 font-normal lg:py-2 lg:px-4 lg:font-bold border-zinc-700 lg:m-0 lg:inline-block'>
                            <Link href={"/blog"} className={`${NamaHalaman === "/blog" ? "text-teal-300" : ""} text-sm transition-all  hover:text-teal-300   cursor-pointer`}>Blog</Link>
                        </li>
                    </ul>
                    <div className=' mx-6  shadow-2xl bg-zinc-50 dark:bg-zinc-800 lg:hidden  lg:p-4 lg:from-zinc-100 lg:to-transparent lg:border-zinc-300 border-0 lg:border border-b-0 rounded-lg lg:bg-gradient-to-br lg:dark:from-zinc-900 lg:dark:to-transparent dark:border-zinc-800 '>
                        <div className='relative flex justify-center mx-4 my-2'>
                            <Image className='w-40 h-40 px-2 py-2 rounded-2xl' src={gambar} />
                        </div>
                        <div className='my-4 text-center'>
                            <h1 className='text-2xl font-bold tracking-wider text-center'>Hi! I'm
                                <br />Mohamad Hasyim Ridwan</h1>
                            <div className='font-light text-teal-300 animate-typing f text--green-600'>Full Stack Developer</div>
                        </div>
                        <div className='my-2 space-y-2 text-sm text-center lg:my-10 font-poppins text-zinc-400'>
                            <p className=' border-b border-zinc-400'>mh.ridwan7b@gmail.com</p>
                            <p className='inline-block border-b border-zinc-400'>+62 (812) 21871961</p>

                        </div>
                        <div className='mt-10 space-y-2   flex flex-col w-full '>
                            <button className='px-16 py-2 mx-auto font-semibold transition-all duration-75 bg-teal-400 rounded-full dark:text-white hover:bg-teal-800 hover:text-white'>
                                Hire Me!
                            </button>
                            <a className='flex items-center  justify-center px-12 py-2 mx-auto font-semibold text-white transition-all duration-75 rounded-full bg-zinc-700 hover:bg-teal-800 hover:text-white'>
                                Download CV
                            </a>
                        </div>
                    </div>
                </motion.nav>
            </div>
            <div className='w-full text-xl lg:w-2/6'>
                <motion.nav
                    variants={{
                        visible: { y: 0 },
                        hidden: { y: "-250%" }
                    }}
                    animate={hide ? "hidden" : "visible"}
                    transition={{ duration: 0.25, ease: easeInOut }}
                >
                    <a className='font-bold justify-centerflex md:hidden dark:text-teal-300 text-black'>MHR</a>
                    <a className='font-bold justify-centerflex hidden md:block dark:text-teal-300 text-black'>Mohamad Hasyim Ridwan</a>
                </motion.nav>
            </div>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-250%" }
                }}
                animate={hide ? "hidden" : "visible"}
                transition={{ duration: 0.25, ease: easeInOut }}
            >
                <div className={`flex items-center  dark:bg-black bg-white gap-3 p-2 transition-all border rounded-lg border-teal-300 dark:border-zinc-300 hover:border-gray-600 shadow-xl`}>
                    <button className='dark:text-white text-teal-600 font-bold' onClick={() => {
                        setScale("scale-0")
                        setTheme("light")
                    }}>Light</button>
                    <button className='text-black  dark:text-teal-600 font-bold' onClick={() => {
                        setScale("scale-0")
                        setTheme("dark")
                    }}>Dark</button>
                </div>
            </motion.nav>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-200%" }
                }}
                animate={hide ? "hidden" : "visible"}
                transition={{ duration: 0.25, ease: easeInOut }}
            >
                <button onClick={() => setScale("scale-100")} className='font-semibold hover:text-teal-300 ml-3 md:hidden flex items-center gap-2 px-4 py-2 text-sm border rounded-full lg:hidden hover:border-zinc-600 active:bg-zinc-600 border-zinc-400'>
                    Menu

                </button>
            </motion.nav>
        </div >

    )
}

export default Navbar