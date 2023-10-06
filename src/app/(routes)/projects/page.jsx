'use client'

import React from 'react'
import {projects} from '@/data/projects'
import ProjectView from '@/components/ui/ProjectView'
import TopBar  from '@/components/ui/TopBar';
import Link from 'next/link';
import {BiLogoLinkedin, BiLogoGmail} from 'react-icons/bi'
import { LINKS } from '@/data/links';

const Projects = () => {

  console.log();(typeof(projects))

  return (
    <main className="max-w-screen min-h-screen  bg-neutral-950  relative">

      <TopBar title={'Projects'}/>

      {/* <div className='h-full w-full flex flex-col items-center gap-3 p-3 md:p-6'> */}
      <div className='w-full text-center text-4xl font-semibold text-white mt-6 mb-4'>Some of the projects I worked on</div>
      <div className='h-full w-full grid gird-cols-1 gap-6 py-6 px-3 md:px-56'>
        {projects.map((p)=>(
          <ProjectView key={p.id} p={p}/>
        ))}
      </div>
      
      <div className='w-full text-center text-4xl font-semibold md:px-56 text-white mt-10 mb-6'>Intrested in collaborating together on a particular project?</div>

      <div className='w-full px-3 md:px-56 '>
          <div className='w-full h-fit py-3 px-3 md:px-36  rounded-md '>
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

export default Projects