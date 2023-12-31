import { Poppins } from 'next/font/google'
import './globals.css'
import Providers from './Providers'

const inter = Poppins({
  subsets: ['latin'],
  weight: ["400"]
})

export const metadata = {
  title: 'Portofolio Mohamad Hasyim Ridwan',
  description: 'Build With ❤️ By Mohamad Hasyim Ridwan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" >
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
