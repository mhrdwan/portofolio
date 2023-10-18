import React from 'react'
import gambarkiri from "../assets/IMG/292817461_7649943481742901_6633087870742063213_n.jpg"
import gambarkanan from "../assets/IMG/363815310_9666831353387427_1604163039826260738_n.jpg"
import gambarkiri2 from "../assets/IMG/292363140_7641600222577227_6588402848332977786_n.jpg"
import Image from 'next/image'
function IsiAbout() {
    return (
        <div className='text-white flex justify-center gap-4 mt-4'>
            <div className='hidden lg:w-5/12 lg:block lg:p-4 lg:from-zinc-100 lg:to-transparent lg:border-zinc-300 border-0 lg:border border-b-0 rounded-lg lg:bg-gradient-to-br lg:dark:from-zinc-900 lg:dark:to-transparent dark:border-zinc-800 '>
                <div className='relative flex justify-center mx-4 my-2'>
                    <Image src={gambarkanan} width={"100%"} className='rounded-3xl' />
                </div>
                <div className='my-4 text-center'>
                    <h3 className='text-2xl font-bold tracking-wider text-center hover:text-teal-300'><span className='text-teal-300 hover:text-white'>Hi!</span> I'm Mohamad Hasyim Ridwan</h3>
                    <p className='font-light text-teal-300 animate-typing f '>Full Stack Developer</p>
                </div>
                <div className='my-2 space-y-2 text-sm text-center lg:my-10 font-poppins text-zinc-400'>
                    <p className='inline-block border-b border-zinc-400'>mh.ridwan7b@gmail.com</p>
                    <p className='inline-block border-b border-zinc-400'>+62 (812) 21871961</p>
                </div>
                <div className='mt-8 lg:mt-20 '>
                    <div className='flex items-center justify-center gap-6'>
                        <svg class="w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.87 28.87"><defs><linearGradient id="a" x1="-1.84" x2="32.16" y1="30.47" y2="-3.03" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fed576"></stop><stop offset=".26" stop-color="#f47133"></stop><stop offset=".61" stop-color="#bc3081"></stop><stop offset="1" stop-color="#4c63d2"></stop></linearGradient></defs><g data-name="Layer 2"><g data-name="Layer 1"><rect width="28.87" height="28.87" fill="url(#a)" rx="6.48" ry="6.48"></rect><g data-name="<Group>"><path fill="#fff" d="M10 5h9c.2.1.5.1.7.2a4.78 4.78 0 0 1 3.8 3.3 8 8 0 0 1 .3 1.5v8.8a6.94 6.94 0 0 1-1.2 3.1 5.51 5.51 0 0 1-4.5 1.9h-7.5a5.49 5.49 0 0 1-3.7-1.2A5.51 5.51 0 0 1 5 18.14v-7a7.57 7.57 0 0 1 .1-1.5 4.9 4.9 0 0 1 3.8-4.3zm-3.1 9.5v3.9a3.42 3.42 0 0 0 3.7 3.7q3.9.15 7.8 0c2.3 0 3.6-1.4 3.7-3.7q.15-3.9 0-7.8a3.52 3.52 0 0 0-3.7-3.7q-3.9-.15-7.8 0a3.42 3.42 0 0 0-3.7 3.7z" data-name="<Compound Path>"></path><path fill="#fff" d="M9.64 14.54a4.91 4.91 0 0 1 4.9-4.9 5 5 0 0 1 4.9 4.9 4.91 4.91 0 0 1-4.9 4.9 5 5 0 0 1-4.9-4.9zm4.9-3.1a3.05 3.05 0 1 0 3 3 3 3 0 0 0-3-3z" data-name="<Compound Path>"></path><path fill="#fff" d="M18.34 9.44a1.16 1.16 0 0 1 1.2-1.2 1.29 1.29 0 0 1 1.2 1.2 1.2 1.2 0 0 1-2.4 0z" data-name="<Path>"></path></g></g></g></svg>
                        <svg class="w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112.197 112.197"><circle cx="56.099" cy="56.098" r="56.098" fill="#55acee"></circle><path fill="#f1f2f2" d="M90.461 40.316a26.753 26.753 0 0 1-7.702 2.109 13.445 13.445 0 0 0 5.897-7.417 26.843 26.843 0 0 1-8.515 3.253 13.396 13.396 0 0 0-9.79-4.233c-7.404 0-13.409 6.005-13.409 13.409 0 1.051.119 2.074.349 3.056-11.144-.559-21.025-5.897-27.639-14.012a13.351 13.351 0 0 0-1.816 6.742c0 4.651 2.369 8.757 5.965 11.161a13.314 13.314 0 0 1-6.073-1.679l-.001.17c0 6.497 4.624 11.916 10.757 13.147a13.362 13.362 0 0 1-3.532.471c-.866 0-1.705-.083-2.523-.239 1.706 5.326 6.657 9.203 12.526 9.312a26.904 26.904 0 0 1-16.655 5.74c-1.08 0-2.15-.063-3.197-.188a37.929 37.929 0 0 0 20.553 6.025c24.664 0 38.152-20.432 38.152-38.153 0-.581-.013-1.16-.039-1.734a27.192 27.192 0 0 0 6.692-6.94z"></path></svg>
                        <svg class="w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="#1877f2" d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"></path><path fill="#fff" d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"></path></svg>
                    </div>
                </div>
                <div className='mt-8 space-y-2 text-center flex flex-col'>
                    <button className=' px-10 py-2 justify-center flex font-semibold transition-all duration-75 bg-teal-400 rounded-full dark:text-white hover:bg-teal-800 hover:text-white'>
                        Hire Me!
                    </button>
                    <a className='block px-8 py-2 font-semibold text-white transition-all duration-75 rounded-full bg-zinc-700 hover:bg-teal-800 hover:text-white'>Download CV</a>
                </div>
            </div>
            <div className='lg:w-5/7'>
                <div className='  lg:p-4 lg:from-zinc-100 lg:to-transparent lg:border-zinc-300 border-0 lg:border border-b-0 rounded-lg lg:bg-gradient-to-br lg:dark:from-zinc-900 lg:dark:to-transparent dark:border-zinc-800 '>
                    <div className='flex flex-col justify-center gap-2 lg:flex-row'>
                        <div className='w-full h-80 bg-red-100  lg:w-1/2 lg:h-96 rounded-3xl relative justify-center overflow-hidden'>
                            <Image src={gambarkiri2} layout="fill" objectFit="cover" className='rounded-3xl ' alt="Gambar Kiri" />
                        </div>


                        <div className="w-full px-4 py-4 lg:py-12 lg:w-1/2 font-poppins">
                            <div className='relative flex items-center gap-2 text-xl font-normal md:justify-start justify-center z-1 font-bold'>
                                <p className='font-bold hover:text-teal-300'>Tentang saya</p>
                            </div>
                            <div className='space-y-4'>
                                {/* <h1 className='mt-6 text-xl font-semibold '>Proficient Full Stack Developer with Strong Backend Expertise and Frontend Experience...</h1> */}
                                <p className='text-sm dark:text-zinc-400 mt-4'>
                                    Saya <span className='text-white hover:text-teal-300 '>Mohamad Hasyim Ridwan</span>, merupakan lulusan <span className='text-white hover:text-teal-300'>Program Manajemen Transportasi Udara pada STP AVIASI Jakarta.</span> Meskipun saya <span className='text-white hover:text-teal-300'>lulusan Program Manajemen Transportasi Udara,</span> hal ini <span className='text-white hover:text-teal-300'>tidak menghambat saya</span> untuk mampu mengoperasikan komputer dengan baik, menjadi Web Developer, IT Support, familiar dengan beberapa software, beradaptasi dengan lingkungan baru serta <span className='text-white hover:text-teal-300'>menyukai tantangan dan disiplin waktu.</span> Saya sangat yakin dengan kualifikasi, pengalaman, dan kemampuan saya, bahwa saya dapat <span className='text-white hover:text-teal-300'>berkontribusi pada perusahaan untuk mencapai tujuannya.</span>
                                </p>
                                <p className='text-sm dark:text-zinc-400'>
                                    Serta saya Seorang Pengembang <span className='text-white hover:text-teal-300'>Full Stack </span>yang Cakap dengan Keahlian <span className='text-white hover:text-teal-300'>Backend</span> yang Cukup dan <span className='text-white hover:text-teal-300'>Pengalaman di Frontend</span>, menawarkan pendekatan inovatif dalam pengembangan aplikasi berkat <span className='text-white hover:text-teal-300'>latar belakang pendidikan yang unik.</span> Meski berasal dari <span className='text-white hover:text-teal-300'>jurusan yang berbeda,</span> pemahaman saya tentang kode pemrograman dan teknologi terkini memungkinkan saya untuk <span className='text-white hover:text-teal-300'>menciptakan solusi digital yang efisien dan responsif.</span> Kemampuan ini, dikombinasikan dengan perspektif multidisiplin saya, memungkinkan saya untuk menghadirkan solusi yang holistik dan memenuhi kebutuhan pengguna secara mendalam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' gap-8 lg:mt-2 mt-10'>
                    <div className=' font-poppins  lg:p-4 lg:from-zinc-100 lg:to-transparent lg:border-zinc-300 border-0 lg:border border-b-0 rounded-lg lg:bg-gradient-to-br lg:dark:from-zinc-900 lg:dark:to-transparent dark:border-zinc-800 '>
                        <h1 className='text-lg font-bold justify-center md:justify-start flex hover:text-teal-300 '>My Skills</h1>
                        <div className='flex flex-wrap  gap-4 mt-4 '>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>React JS</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>React Vite</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Sequelize</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Next JS</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Fire Base</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Express JS</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Node JS</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>MySql</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Azure Cloud</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Google Cloud</button>
                            <button className='text-xs px-6 py-2  text-white rounded-full bg-zinc-700 dark:bg-teal-700 dark:hover:bg-teal-400 hover:bg-teal-400 '>Digital Ocean</button>
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