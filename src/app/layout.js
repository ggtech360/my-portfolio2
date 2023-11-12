import {Poppins} from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets:['latin-ext'],
  weight: ['400','500','700']
})

export const metadata = {
  title: 'Shahriar Ridom',
  description: 'Next gen web developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
