import IsiAbout from './components/IsiAbout'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div className='px-6 pt-10 lg:pt-0 lg:px-32 '>
      <Navbar />
      <IsiAbout />
      <p className='text-black mt-36 flex justify-center dark:text-white'>
       Build With ❤️ By Mohamad Hasyim Ridwan</p>
    </div>
  )
}
