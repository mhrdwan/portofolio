import IsiAbout from './components/IsiAbout'
import PageLayout from './components/PageLayout'

export default function Home() {
  return (
    <PageLayout>
    <IsiAbout />
    <p className='text-black mt-36 flex justify-center dark:text-white'>
      Build With ❤️ By Mohamad Hasyim Ridwan
    </p>
  </PageLayout>
  )
}
