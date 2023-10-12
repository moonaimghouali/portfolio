import TopBar from '@/components/ui/TopBar'
import React from 'react'
import { Section, ImageView, Content, Date } from '@/components'
import { Merriweather, Poppins } from 'next/font/google'

const merriweather = Merriweather({ subsets: ['latin'], weight : ['300', '400', '700', '900'] })

const About = () => {
  return (
    <main className="max-w-screen min-h-screen bg-neutral-950  relative">

      <TopBar title={'About me'}/>

      <div className='h-full w-full flex flex-col items-center gap-6 p-3'>
        <div className=' w-full md:w-1/2 h-full flex flex-col'>
          <div className='text-white font-medium text-4xl mt-6 text-center whitespace-pre-wrap'>
            Hey There, my name is &#10; 
            <span className={merriweather.className + ' inline-block text-center w-full mt-6 font-semibold text-neutral-400'}>A. Mounaim Ghouali | عبد المنعم غوالي</span>
          </div>

          <div className='text-white font-normal text-4xl mt-6 text-center whitespace-pre-wrap'>
            I am
          </div>
        </div>
      </div>

      <div className='h-20'></div>
    </main>
  )
}

export default About