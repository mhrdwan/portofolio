import React from 'react'
import gambarkiri from "../assets/IMG/292817461_7649943481742901_6633087870742063213_n.jpg"
import gambarkiri2 from "../assets/IMG/292363140_7641600222577227_6588402848332977786_n.jpg"
import Image from 'next/image'
import SisiKiri from './SisiKiri'
function IsiAbout() {
    return (
        <div className='text-white flex justify-center gap-4 mt-4'>
            <div className='lg:w-6/12'>
                <SisiKiri />
            </div>
            <div className='lg:w-5/7'>
                <div className='  lg:p-4 lg:from-zinc-100 lg:to-transparent lg:border-zinc-300 border-0 lg:border border-b-0 rounded-lg lg:bg-gradient-to-br lg:dark:from-zinc-900 lg:dark:to-transparent dark:border-zinc-800 '>
                    <div className='flex flex-col justify-center gap-2 lg:flex-row items-center'>
                        <div className=' h-52 bg-red-100  lg:w-1/2 lg:h-96 rounded-3xl relative justify-center overflow-hidden  w-full'>
                            <Image src={gambarkiri2} layout="fill" objectFit="cover" className='rounded-3xl ' alt="Gambar Kiri" />
                        </div>
                        <div className="w-full px-4 py-4 lg:py-12 lg:w-1/2 font-poppins">
                            <div className='relative flex items-center gap-2 text-xl md:justify-start justify-center z-1 font-bold'>
                                <p className='font-bold dark:hover:text-teal-300 text-black dark:text-teal-300 hover:text-teal-300'>Tentang saya</p>
                            </div>
                            <div className='space-y-4'>
                                <p className='text-black text-sm dark:text-zinc-400 mt-4'>
                                    Saya <span className='dark:text-white hover:text-teal-300 dark:hover:text-teal-300 font-bold'>Mohamad Hasyim Ridwan</span>, merupakan lulusan <span className='dark:text-white hover:text-teal-300 dark:hover:text-teal-300 font-bold'>Program Manajemen Transportasi Udara pada STP AVIASI Jakarta.</span> Meskipun saya <span className='dark:text-white hover:text-teal-300 dark:hover:text-teal-300 font-bold'>lulusan Program Manajemen Transportasi Udara,</span> hal ini <span className='dark:text-white hover:text-teal-300 dark:hover:text-teal-300 font-bold'>tidak menghambat saya</span> untuk mampu mengoperasikan komputer dengan baik, menjadi Web Developer, IT Support, familiar dengan beberapa software, beradaptasi dengan lingkungan baru serta <span className='dark:text-white hover:text-teal-300 dark:hover:text-teal-300 font-bold'>menyukai tantangan dan disiplin waktu.</span> Saya sangat yakin dengan kualifikasi, pengalaman, dan kemampuan saya, bahwa saya dapat <span className='dark:text-white hover:text-teal-300 dark:hover:text-teal-300 font-bold'>berkontribusi pada perusahaan untuk mencapai tujuannya.</span>
                                </p>
                                <p className='text-black text-sm dark:text-zinc-400'>
                                    Serta saya Seorang Pengembang <span className='dark:text-white hover:text-teal-300 dark:hover:text-teal-300 font-bold'>Full Stack </span>yang Cakap dengan Keahlian <span className='dark:text-white hover:text-teal-300 dark:hover:text-teal-300 font-bold'>Backend</span> yang Cukup dan <span className='dark:text-white hover:text-teal-300 dark:hover:text-teal-300 font-bold'>Pengalaman di Frontend</span>, menawarkan pendekatan inovatif dalam pengembangan aplikasi berkat <span className='dark:text-white hover:text-teal-300 dark:hover:text-teal-300 font-bold'>latar belakang pendidikan yang unik.</span> Meski berasal dari <span className='dark:text-white hover:text-teal-300 dark:hover:text-teal-300 font-bold'>jurusan yang berbeda,</span> pemahaman saya tentang kode pemrograman dan teknologi terkini memungkinkan saya untuk <span className='dark:text-white hover:text-teal-300 dark:hover:text-teal-300 font-bold'>menciptakan solusi digital yang efisien dan responsif.</span> Kemampuan ini, dikombinasikan dengan perspektif multidisiplin saya, memungkinkan saya untuk menghadirkan solusi yang holistik dan memenuhi kebutuhan pengguna secara mendalam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' gap-8 lg:mt-2 mt-10'>
                    <div className=' font-poppins  lg:p-4 lg:from-zinc-100 lg:to-transparent lg:border-zinc-300 border-0 lg:border border-b-0 rounded-lg lg:bg-gradient-to-br lg:dark:from-zinc-900 lg:dark:to-transparent dark:border-zinc-800 '>
                        <h1 className='text-lg font-bold justify-center md:justify-center flex   hover:text-teal-300 dark:hover:text-teal-300 text-black dark:text-teal-300'>My Skills</h1>
                        <h1 className='text-lg mt-4 font-bold justify-center md:justify-start flex hover:text-teal-300 dark:hover:text-teal-300 text-black dark:text-white mb-3'>Tech</h1>
                        <div className='flex flex-wrap  gap-4 '>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>React JS</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>React Vite</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Next JS</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Express JS</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Node JS</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Fire Base</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Sequelize</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>MySql</button>
                        </div>

                        <h1 className='text-lg mt-4 font-bold justify-center md:justify-start flex hover:text-teal-300 dark:hover:text-teal-300 text-black dark:text-white mb-3'>Cloud</h1>
                        <div className='flex flex-wrap  gap-4 '>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Azure Cloud</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Google Cloud</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Digital Ocean</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Amazon</button>
                        </div>

                        <h1 className='text-lg mt-4 font-bold justify-center md:justify-start flex hover:text-teal-300 dark:hover:text-teal-300 text-black dark:text-white mb-3'>Style</h1>
                        <div className='flex flex-wrap  gap-4 '>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>TailWind</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Bootstrap </button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Ant Design </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default IsiAbout