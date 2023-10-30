import React from 'react'
import SisiKiri from '../components/SisiKiri'
import gambarkiri2 from "../assets/IMG/292363140_7641600222577227_6588402848332977786_n.jpg"
import Navbar from '../components/Navbar'
import Image from 'next/image'
import portoimage from "../assets/IMG/portoimage.png"
import porto_eureka_tracking from "../assets/IMG/porto_eureka_tracking.png"
import porto_bensin from "../assets/IMG/porto_bensin.png"
import CLI_Tiktok_Downloader from "../assets/IMG/CLI_Tiktok_Downloader.png"
import CLI_Cek_Cuaca from "../assets/IMG/CLI_Cek_Cuaca.png"
import porto_Rumahimpian from "../assets/IMG/porto_Rumahimpian.png"
import porto_RajaCepat from "../assets/IMG/porto_RajaCepat.png"
import porto_Eureka_Logistic from "../assets/IMG/porto_Eureka_Logistic.png"
import API_Scraping_berita_CNN from "../assets/IMG/API_Scraping_berita_CNN.png"
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
                        <p className='text-zinc-400 mt-5 text-xs'>Saya telah belajar dan bekerja pada beberapa proyek selama 7 bulan terhitung sampai portofolio ini di update tanggal <span className='font-bold text-white'>10/29/2023,</span> daftar-daftar ini yang ingin saya tampilkan.</p>
                    </div>
                    <div className='Menu text-sm  flex space-x-5 mt-10'>
                        <p className='hover:text-teal-300 text-teal-300 cursor-pointer'>All</p>
                        <p className='hover:text-teal-300 cursor-pointer'>Portofolio</p>
                        <p className='hover:text-teal-300 cursor-pointer'>Project</p>
                        <p className='hover:text-teal-300 cursor-pointer'>CLI</p>
                    </div>
                    <div className='content  grid md:grid-cols-3 space-y-5 '>
                        <div className='p-4 transition-all duration-100 mt-5 rounded-lg shadow-lg cursor-pointer lg:p-2 dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800'>
                            <div className='rounded-lg shadow-md'>
                                <Image className='rounded-lg shadow-md h-44' height={150} width={500} alt='gambarporto' src={portoimage} />
                            </div>
                            <div className='p-2'>
                                <h1 className='text-sm font-semibold line-clamp-2 dark:text-white text-zinc-600'>Portofolio Website - Mohamad Hasyim Ridwan</h1>
                                <a className='flex mt-5 items-center gap-1 text-xs hover:text-teal-300  text-white' href="https://www.mhridwan.com" target='_blank'>
                                    <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                                    mhridwan.com
                                </a>
                                <div className='flex flex-wrap gap-2 mt-4'>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>Next JS</button>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>TailWind</button>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 transition-all duration-100 rounded-lg shadow-lg cursor-pointer lg:p-2 dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800'>
                            <div className='rounded-lg shadow-md'>
                                <Image className='rounded-lg shadow-md h-44' height={150} width={500} src={porto_eureka_tracking} alt='="porto_eureka_tracking' />
                            </div>
                            <div className='p-2'>
                                <h1 className='text-sm font-semibold line-clamp-2 dark:text-white text-zinc-600'>Portofolio Website & Tracking Pengiriman Pada Website </h1>
                                <a className='flex mt-5 items-center gap-1 text-xs hover:text-teal-300  text-white' href="https://eurekalogistics.co.id/" target='_blank'>
                                    <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                                    eurekalogistics.co.id
                                </a>
                                <div className='flex flex-wrap gap-2 mt-4'>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>React Vite</button>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>Ant Design</button>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 transition-all duration-100 rounded-lg shadow-lg cursor-pointer lg:p-2 dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800'>
                            <div className='rounded-lg shadow-md'>
                                <Image className='rounded-lg shadow-md h-44' height={150} width={500} src={porto_RajaCepat} alt='="porto_eureka_tracking' />
                            </div>
                            <div className='p-2'>
                                <h1 className='text-sm font-semibold line-clamp-2 dark:text-white text-zinc-600'>Web App - Raja Cepat </h1>
                                <a className='flex mt-5 items-center gap-1 text-xs hover:text-teal-300  text-white' href="https://elogsv4.eurekalogistics.co.id/" target='_blank'>
                                    <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                                    elogsv4.eurekalogistics.co.id
                                </a>
                                <div className='flex flex-wrap gap-2 mt-4'>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>React JS</button>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>Ant Design</button>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>Bootstrap</button>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 transition-all duration-100 rounded-lg shadow-lg cursor-pointer lg:p-2 dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800'>
                            <div className='rounded-lg shadow-md'>
                                <Image className='rounded-lg shadow-md h-44' height={150} width={500} src={porto_Eureka_Logistic} alt='="porto_eureka_tracking' />
                            </div>
                            <div className='p-2'>
                                <h1 className='text-sm font-semibold line-clamp-2 dark:text-white text-zinc-600'>Web App - Eureka Logistic </h1>
                                <a className='flex mt-5 items-center gap-1 text-xs hover:text-teal-300  text-white' href="https://elogsv4.eurekalogistics.co.id/" target='_blank'>
                                    <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                                    elogsv4.eurekalogistics.co.id
                                </a>
                                <div className='flex flex-wrap gap-2 mt-4'>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>React JS</button>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>Ant Design</button>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>Bootstrap</button>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 transition-all duration-100 rounded-lg shadow-lg cursor-pointer lg:p-2 dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800'>
                            <div className='rounded-lg shadow-md'>
                                <Image className='rounded-lg shadow-md h-44' height={150} width={500} src={API_Scraping_berita_CNN} alt='="porto_eureka_tracking' />
                            </div>
                            <div className='p-2'>
                                <h1 className='text-sm font-semibold line-clamp-2 dark:text-white text-zinc-600'>API - Scraping Berita CNN </h1>
                                <a className='flex mt-5 items-center gap-1 text-xs hover:text-teal-300  hover:cursor-not-allowed  text-white' >
                                    <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                                    Private
                                </a>
                                <div className='flex flex-wrap gap-2 mt-4'>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>Node JS</button>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 transition-all duration-100 rounded-lg shadow-lg cursor-pointer lg:p-2 dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800'>
                            <div className='rounded-lg shadow-md'>
                                <Image className='rounded-lg shadow-md h-44' height={150} width={500} src={porto_Rumahimpian} alt='="porto_RumahImpians' />
                            </div>
                            <div className='p-2'>
                                <h1 className='text-sm font-semibold line-clamp-2 dark:text-white text-zinc-600 '>Web - Rumah Impian</h1>
                                <a className='flex mt-5 items-center gap-1 text-xs hover:text-teal-300  text-white ' href='https://github.com/mhrdwan/slicing-figma-Company-Profile-Responsive' target='_blank'>
                                    <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                                github.com/mhrdwan/slicing-figma-Company-Profile-Responsive
                                </a>
                                <div className='flex flex-wrap gap-2 mt-4'>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>React JS</button>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>Bootstrap</button>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 transition-all duration-100 rounded-lg shadow-lg cursor-pointer lg:p-2 dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800'>
                            <div className='rounded-lg shadow-md'>
                                <Image className='rounded-lg shadow-md h-44' height={150} width={500} src={porto_bensin} alt='="porto_eureka_tracking' />
                            </div>
                            <div className='p-2'>
                                <h1 className='text-sm font-semibold line-clamp-2 dark:text-white text-zinc-600 '>Web App - Manajemen Stock Bensin Eceran dengan Chat Live Firebase </h1>
                                <a className='flex mt-5 items-center gap-1 text-xs hover:text-teal-300 hover:cursor-not-allowed  text-white ' >
                                    <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                                    Private
                                </a>
                                <div className='flex flex-wrap gap-2 mt-4'>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>React JS</button>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>Fire Base</button>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 transition-all duration-100 rounded-lg shadow-lg cursor-pointer lg:p-2 dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800'>
                            <div className='rounded-lg shadow-md'>
                                <Image className='rounded-lg shadow-md h-44' height={150} width={500} src={CLI_Tiktok_Downloader} alt='="porto_eureka_tracking' />
                            </div>
                            <div className='p-2'>
                                <h1 className='text-sm font-semibold line-clamp-2 dark:text-white text-zinc-600 '>CLI - Download Tiktok </h1>
                                <a className='flex mt-5 items-center gap-1 text-xs hover:text-teal-300  text-white ' href='https://github.com/mhrdwan/tiktok-downloader-telegram' target='_blank'>
                                    <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                                    github.com/mhrdwan/tiktok-downloader-telegram
                                </a>
                                <div className='flex flex-wrap gap-2 mt-4'>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>Node JS</button>
                                </div>
                            </div>
                        </div>
                        <div className='p-4 transition-all duration-100 rounded-lg shadow-lg cursor-pointer lg:p-2 dark:shadow-none hover:bg-zinc-200 dark:hover:bg-zinc-800'>
                            <div className='rounded-lg shadow-md'>
                                <Image className='rounded-lg shadow-md h-44' height={150} width={500} src={CLI_Cek_Cuaca} alt='="porto_eureka_tracking' />
                            </div>
                            <div className='p-2'>
                                <h1 className='text-sm font-semibold line-clamp-2 dark:text-white text-zinc-600 '>CLI - Cek Cuaca</h1>
                                <a className='flex mt-5 items-center gap-1 text-xs hover:text-teal-300  text-white ' href='https://github.com/mhrdwan/promp-dengan-inquirer' target='_blank'>
                                    <svg className='h-3 w-3' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
                                    github.com/mhrdwan/promp-dengan-inquirer
                                </a>
                                <div className='flex flex-wrap gap-2 mt-4'>
                                    <button className='px-1.5 py-0.5 text-xs rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'>Node JS</button>
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