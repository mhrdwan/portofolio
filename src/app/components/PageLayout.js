import React from 'react';
import Navbar from './Navbar';
import SisiKiri from './SisiKiri';

const PageLayout = ({ children, showSideBar = true }) => {
  return (
    <main className='px-6 pt-10 lg:pt-0 lg:px-32'>
      <Navbar />
      <div className='text-white flex justify-center gap-4 mt-4'>
        {showSideBar && (
          <div className='w-2/12 hidden md:block'>
            <SisiKiri />
          </div>
        )}
        <div className='lg:w-5/7 w-full'>
          {children}
        </div>
      </div>
    </main>
  );
};

export default PageLayout;