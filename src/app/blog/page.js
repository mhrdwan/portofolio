import React from 'react'
import Navbar from '../components/Navbar'
import SisiKiri from '../components/SisiKiri'

function Blog() {
    
    return (
        <div className='px-6 pt-10 lg:pt-0 lg:px-32 '>
            <Navbar />
            <div className='w-3/12'>
                <SisiKiri />
            </div>
        </div>
    )
}

export default Blog