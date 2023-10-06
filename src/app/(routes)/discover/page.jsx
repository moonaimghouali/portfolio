'use client'

import React from 'react'
import TopBar  from '@/components/ui/TopBar';
import Link from 'next/link';
import {BiLogoLinkedin, BiLogoGmail} from 'react-icons/bi'
import { LINKS } from '@/data/links';
import {MdOutlineDesignServices, MdOutlineEngineering, MdOutlineCode} from 'react-icons/md'

const page = () => {
  return (
    <main className="max-w-screen min-h-screen  bg-neutral-950 ">

    <TopBar title={'Expertise'}/>

    <div className='w-full text-center text-4xl font-semibold text-white mt-6 mb-4'>Some of the projects I worked on</div>
    
    <div className='h-full w-full grid gird-cols-1 md:grid-cols-3 gap-3 py-6 px-3 md:px-14 '>

      <div className='h-full w-full bg-neutral-900 rounded-md p-3'>
        <MdOutlineEngineering size={36} className='text-teal-500 mb-1' />
        <div className='font-semibold text-teal-500 text-3xl'>Software Engineering</div>
        <div className='h-px bg-neutral-700 w-full my-3'/>

        <div className='text-base text-neutral-100 font-light flex flex-col gap-1'>
            <div><span className='text-white font-medium'>Business Analysis</span> : Understanding the software domain and existing processes in order to capture the functional and technical requirements.</div>
            <div><span className='text-white font-medium'>Design & Modelisation</span> : Define the software architecture best suitable for scalibility and maintainability.</div>
            <div><span className='text-white font-medium'>Implementation</span> : Transform design specification into clean, maintainable code following the best practices.</div>
            <div><span className='text-white font-medium'>Quality Assurance</span> : Test the functionality of the entire system and make sure it respects the requirements.</div>
        </div>

      </div>

      <div className='h-full w-full bg-neutral-900 rounded-md p-3'>
        <MdOutlineCode size={36} className='text-green-500 mb-1' />
        <div className='font-semibold text-green-500 text-3xl'>Software Development</div>
        <div className='h-px bg-neutral-700 w-full my-3'/>

        <div className='text-base text-neutral-100 font-light flex flex-col gap-1'>
            <div><span className='text-white font-medium'>Front-End Development</span> : Crafting modern and responsive user interfaces to ensure optimal user experience.</div>
            <div><span className='text-white font-medium'>Back-End Development</span> : Capture all function and technical requirements.</div>
            <div><span className='text-white font-medium'>Database Management</span> : Proficient in working with relational (SQL) and NoSQL databases to store and retrieve data efficiently.</div>
            <div><span className='text-white font-medium'>Mobile Development</span> : Skilled in creating cross-platform mobile apps using react-native.</div>
        </div>

      </div>

      <div className='h-full w-full bg-neutral-900 rounded-md p-3'>
        <MdOutlineDesignServices size={36} className='text-sky-500 mb-1' />
        <div className='font-semibold text-sky-500 text-3xl'>UI Design</div>
        <div className='h-px bg-neutral-700 w-full my-3'/>

        <div className='text-base text-neutral-100 font-light flex flex-col gap-1'>
            <div><span className='text-white font-medium'>Front-End Development</span> : Crafting modern and responsive user interfaces to ensure optimal user experience.</div>
            <div><span className='text-white font-medium'>Back-End Development</span> : Capture all function and technical requirements.</div>
            <div><span className='text-white font-medium'>Database Management</span> : Proficient in working with relational (SQL) and NoSQL databases to store and retrieve data efficiently.</div>
            <div><span className='text-white font-medium'>Mobile Development</span> : Skilled in creating cross-platform mobile apps using react-native.</div>
        </div>
        
      </div>
    </div>

    <div className='w-full text-center text-4xl font-semibold text-white mt-6 mb-6'>Intrested in collaborating together on a particular project?</div>

    <div className='w-full px-3 md:px-14 '>
        <div className='w-full h-fit py-3 px-3 md:px-48  rounded-md '>
            <div className='w-full text-center text-white font-semibold text-3xl'>You can reach me at </div>
            <div className='h-px w-full  my-3'/>

            <div className='w-full h-fit flex items-center justify-center gap-3 md:gap-20'>
                <Link href={LINKS.LINKEDIN} className='p-3 h-44 aspect-square rounded bg-[#0072b1] flex flex-col items-center justify-center gap-3'>
                    <BiLogoLinkedin size={36} className={'text-white'}/>
                    <div className='text-xl font-semibold text-white text-center w-full'>A. Mounaim Ghouali</div>
                </Link>
                <button onClick={()=>{navigator.clipboard.writeText(LINKS.EMAIL); }} href='mailto:ia_ghouali@esi.dz' className='p-3 h-44 aspect-square rounded bg-white flex flex-col items-center justify-center gap-3' >
                    <BiLogoGmail size={36} className={'text-red-500'}/>
                    <div className='text-lg font-semibold text-neutral-900 text-center w-full '>{LINKS.EMAIL}</div>
                </button>
            </div>
        </div>

    </div>

    <div className='h-20'>

    </div>
  </main>
  )
}

export default page
