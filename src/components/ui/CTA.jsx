import React from 'react'
import Link from 'next/link';
import {BiLogoLinkedin, BiLogoGmail} from 'react-icons/bi'
import { LINKS } from '@/data/links';
import {MdOutlineDesignServices, MdOutlineEngineering, MdOutlineCode} from 'react-icons/md'

const CTA = () => {
  return (
    <>
      <div className='w-full text-center text-4xl font-semibold text-white mt-6 mb-6'>Intrested in collaborating together on a particular project?</div>

        <div className='w-full px-3 md:px-14 '>
            <div className='w-full h-fit py-3 px-3 md:px-48  rounded-md '>
                <div className='w-full text-center text-white font-semibold text-3xl'>You can reach me at </div>
                <div className='h-px w-full  my-3'/>

                <div className='w-full h-fit flex items-center justify-center gap-6'>
                    <Link href={LINKS.LINKEDIN} className='p-3 h-48 aspect-square rounded bg-[#0072b1] flex flex-col items-center justify-center gap-3'>
                        <BiLogoLinkedin size={36} className={'text-white'}/>
                        <div className='text-xl font-semibold text-white text-center w-full'>A. Mounaim Ghouali</div>
                    </Link>
                    <button onClick={()=>{navigator.clipboard.writeText(LINKS.EMAIL); }} href='mailto:ia_ghouali@esi.dz' className='p-3 h-48 aspect-square rounded bg-white flex flex-col items-center justify-center gap-3' >
                        <BiLogoGmail size={36} className={'text-red-500'}/>
                        <div className='text-lg font-semibold text-neutral-900 text-center w-full '>{LINKS.EMAIL}</div>
                    </button>
                </div>
            </div>

        </div>
    </>
  )
}

export default CTA
