"use client"
import React from 'react'
import { useEffect, useState } from "react"
const { useTheme } = require("next-themes")

function Navbar() {

    const { theme, setTheme } = useTheme()
    const [mountee, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mountee) {
        return null
    }

    return (
        <div className='flex items-center justify-between py-5 mb-4 text-zinc-500 dark:text-zinc-300 '>
            <div className='fixed inset-0 z-10 h-screen transition-transform duration-200 transform scale-0 lg:scale-100 lg:h-fit lg:static backdrop-filter backdrop-blur-xl lg:backdrop-blur-0 lg:w-4/6'>
                <ul>
                    <li className='block mx-4 mr-10 font-normal lg:py-2 lg:px-4 lg:font-bold border-zinc-700 lg:m-0 lg:inline-block'>
                        <a className='text-sm transition-all  hover:text-teal-300 text-teal-300 cursor-pointer'>About</a>
                    </li>
                    <li className='block mx-4 mr-10 font-normal lg:py-2 lg:px-4 lg:font-bold border-zinc-700 lg:m-0 lg:inline-block'>
                        <a className='text-sm transition-all  hover:text-teal-300 text-teal-300  cursor-pointer'>Portofolio</a>
                    </li>
                    <li className='block mx-4 mr-10 font-normal lg:py-2 lg:px-4 lg:font-bold border-zinc-700 lg:m-0 lg:inline-block'>
                        <a className='text-sm transition-all  hover:text-teal-300 text-teal-300  cursor-pointer'>Blog</a>
                    </li>
                </ul>
            </div>
            <div className='w-full text-xl lg:w-2/6 '>
                <a className='font-bold justify-centerflex md:hidden text-teal-300'>MHR</a>
                <a className='font-bold justify-centerflex hidden md:block text-teal-300'>Mohamad Hasyim Ridwan</a>
            </div>
            <div className='flex items-center gap-4 p-2 transition-all border rounded-lg border-zinc-300 hover:border-gray-600'>
                <button className='dark:text-white text-teal-300' onClick={() => setTheme("light")}>Light</button>
                <button className='text-black  dark:text-teal-300' onClick={() => setTheme("dark")}>Dark</button>
            </div>

        </div>
    )
}

export default Navbar