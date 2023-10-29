import React from 'react'
import SisiKiri from '../components/SisiKiri'
import gambarkiri2 from "../assets/IMG/292363140_7641600222577227_6588402848332977786_n.jpg"
import Navbar from '../components/Navbar'
import Image from 'next/image'

function Portofolio() {


    return (
        <div className='px-6 pt-10 lg:pt-0 lg:px-32 '>
            <Navbar />
            <div className='text-white flex justify-center mt-4 gap-4 '>

                <div className=' w-2/12 hidden md:block'>
                    <SisiKiri />
                </div>
                <div className='lg:w-5/7 w-full  '>
                    <div className='title  sm:w-8/12  w-full'>
                        <p className='font-bold text-xl  md:text-3xl'>Berbagai hal yang telah saya buat untuk meninggalkan jejak di dunia programming.</p>
                        <p className='text-zinc-400 mt-5 text-xs'>Saya telah bekerja pada banyak proyek kecil selama bertahun-tahun, tetapi daftar daftar ini yang ingin saya tampilkan.</p>
                    </div>
                    <div className='Menu text-sm  flex space-x-5 mt-10'>
                        <p className='hover:text-teal-300 text-teal-300 cursor-pointer'>All</p>
                        <p className='hover:text-teal-300 cursor-pointer'>Iseng</p>
                        <p className='hover:text-teal-300 cursor-pointer'>Project</p>
                        <p className='hover:text-teal-300 cursor-pointer'>CLI</p>
                    </div>
                    <div className='content  grid md:grid-cols-3'>
                        <div className='p-4 transition-all duration-100 rounded-lg shadow-lg cursor-pointer lg:p-2 dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800'>
                            <div className='rounded-lg shadow-md'>
                                <img className='rounded-lg shadow-md' height={150} width={500} src='https://ilmansunanuddin.my.id/api/uploads/2548937.png' />
                            </div>
                            <div className='p-2'>
                                <h1 className='text-sm font-semibold line-clamp-2'>Screencast Website - CodingAsik</h1>
                                <div className='flex flex-wrap gap-2 mt-4'>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>asdsa</button>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>asdsa</button>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>asdsa</button>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 transition-all duration-100 rounded-lg shadow-lg cursor-pointer lg:p-2 dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800'>
                            <div className='rounded-lg shadow-md'>
                                <img className='rounded-lg shadow-md' height={150} width={500} src='https://ilmansunanuddin.my.id/api/uploads/2548937.png' />
                            </div>
                            <div className='p-2'>
                                <h1 className='text-sm font-semibold line-clamp-2'>Screencast Website - CodingAsik</h1>
                                <div className='flex flex-wrap gap-2 mt-4'>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>asdsa</button>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>asdsa</button>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>asdsa</button>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 transition-all duration-100 rounded-lg shadow-lg cursor-pointer lg:p-2 dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800'>
                            <div className='rounded-lg shadow-md'>
                                <img className='rounded-lg shadow-md' height={150} width={500} src='https://ilmansunanuddin.my.id/api/uploads/2548937.png' />
                            </div>
                            <div className='p-2'>
                                <h1 className='text-sm font-semibold line-clamp-2'>Screencast Website - CodingAsik</h1>
                                <div className='flex flex-wrap gap-2 mt-4'>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>asdsa</button>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>asdsa</button>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>asdsa</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Portofolio