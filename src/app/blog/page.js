import React from 'react'
import Navbar from '../components/Navbar'
import SisiKiri from '../components/SisiKiri'

function Blog() {

    return (
        <div className='px-6 pt-10 lg:pt-0 lg:px-32  '>
            <Navbar />
            <div className='text-white flex justify-center mt-4  items-center  gap-4'>
                <div className=' w-2/12 hidden md:block'>
                    <SisiKiri />
                </div>
                <div className='lg:w-5/7 w-full '>
                    <div className='  lg:p-4 lg:from-zinc-100 lg:to-transparent  lg:border-zinc-300 border-0 lg:border border-b-0 rounded-lg lg:bg-gradient-to-br lg:dark:from-zinc-900 lg:dark:to-transparent dark:border-zinc-800 '>
                        <div className='flex flex-col justify-center gap-2 lg:flex-row items-center '>
                            <div className="w-full px-4 py-4 lg:py-12 lg:w-1/2 font-poppins sm:flex sm:justify-center  hidden">
                                <p className='flex justify-center items-center  sm:hidden md:block w-full'>Blog Page Under Maintenance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center sm:text-sm text-base   md:hidden h-screen '>Blog Page Under Maintenance</div>
        </div>
    )
}

export default Blog