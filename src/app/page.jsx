'use client'

import Image from 'next/image'
import image from '../../public/photo.jpg'
import Link from 'next/link'
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram} from 'react-icons/fi'
import { BiLinkAlt } from 'react-icons/bi'
import ProjectViewSm from '@/components/ui/ProjectViewSm'
import { projects } from '@/data/projects'
import {MdOutlineDesignServices, MdOutlineEngineering, MdOutlineCode} from 'react-icons/md'

export default function Home() {
  return (
    <main className="max-w-screen md:max-h-screen flex flex-col md:grid md:grid-cols-12 md:grid-rows-6 gap-3 bg-neutral-950 p-3 md:p-6">
      
      {/* Tagline */}
      <div className="h-full w-full flex flex-col md:row-span-4 md:col-span-6 md:grid md:grid-cols-3 md:grid-rows-2 gap-3">
        
        

        {/* About */}
        <Link href={'/about'} className="row-span-2 md:row-span-1 col-span-3 bg-neutral-900 hover:bg-neutral-800 transition-all duration-150 ease-out rounded-lg p-3 text-white">
          <div className='flex justify-between mb-2'>
            <div className='text-lg font-semibold'>About me</div>
            <button className='hover:text-rose-600 transition-all duration-100 ease-out'>Resume</button>
          </div>
          <div className='text-neutral-200'>
          
          </div>
        </Link>

        <Link href={'/discover'}  className="w-full md:row-span-1 md:col-span-3 bg-neutral-900 rounded-lg p-3 text-white text-center align-middle flex flex-col hover:bg-neutral-800 transition-all duration-150 ease-out">
          <div className='text-2xl font-bold mb-2'> WHAT I DO ?</div>
          <div className='grid grid-cols-1 md:grid-cols-3 grid-rows-1 gap-1 w-full h-full'>
            <div className=' py-4 md:py-1 rounded-md  text-teal-500 font-semibold flex flex-col items-center justify-center text-lg'>
              <MdOutlineEngineering size={36} className={'text-teal-500'}/>
              Software Engineering
            </div>
            <div className=' py-4 md:py-1 rounded-md  text-green-500 font-semibold flex flex-col items-center justify-center text-lg'> 
              <MdOutlineCode size={36} className={'text-green-500'} />
              Software Development
            </div>
            <div className=' py-4 md:py-1 rounded-md  text-sky-500 font-semibold flex flex-col items-center justify-center text-lg'> 
              <MdOutlineDesignServices size={36} className={'text-sky-500'}/>
              UI/Graphic Design
            </div>       
          </div>

          <div className=' text-center mt-2 w-full font-medium text-neutral-300 '>Discover more </div>
        </Link>

      </div>

      {/* Personal Info */}
      <div className="row-span-6 col-span-12 md:row-span-4 md:col-span-6 grid grid-cols-2 grid-rows-6 gap-3">
        <div className="row-span-1 col-span-2 bg-neutral-900 rounded-lg flex items-center justify-center"> 
          <div className="font-semibold text-white text-4xl">A. Mounaim Ghouali</div>
        </div>

        {/* Image */}
        <div className="col-span-2 row-span-6 md:col-span-1 bg-neutral-900 rounded-lg overflow-clip">
          <Image src={image} alt="Picture of the author" className=' h-[130%] object-cover'/>
        </div>

        {/* Informations */}
        <div className="col-span-2 row-span-6 md:col-span-1 text-white flex flex-col gap-3">
          <div className='w-full h-[75%] bg-neutral-900 rounded-lg p-3'>
            <div className='flex flex-col w-full'>
              <div className='text-neutral-400'>based in </div>
              <div className='font-semibold text-2xl'>Blida, Algeria.</div>
            </div>

            <div className='flex flex-col w-full mt-3'>
              <div className='text-neutral-400'>Currently</div>
              <div className='font-semibold text-lg'>Software Engineer <Link href={'https://www.djezzy.dz/'} target='_blank' className='text-2xl text-rose-300 hover:text-rose-600 transition-all duration-100 ease-out'>@Djezzy</Link></div>
            </div>

            <div className='flex flex-col w-full mt-3'>
              <div className='text-neutral-400'>Contact</div>
              <Link href={'https://mail.google.com/mail/u/0/#inbox?compose='} target='_blank' className='font-semibold text-2xl'>ia_ghouali@esi.dz</Link>
            </div>
          </div>

          <div className='w-full h-[25%] bg-neutral-900 rounded-lg px-5 py-3 flex gap-3 items-center justify-between'>
            <Link href={'https://www.linkedin.com/in/a-mounaim-ghouali-66161817a/'} target='_blank' className='p-4 rounded-full bg-neutral-800 hover:bg-sky-600 transition-all duration-100 ease-out'>
              <FiLinkedin size={24}/>
            </Link>

            <Link href={'https://github.com/moonaimghouali'} target='_blank' className='p-4 rounded-full bg-neutral-800 hover:bg-black transition-all duration-100 ease-out'>
              <FiGithub size={24}/>
            </Link>

            <Link href={'https://twitter.com/mounaimghouali'} target='_blank' className='p-4 rounded-full bg-neutral-800 hover:bg-sky-600 transition-all duration-100 ease-out'>
              <FiTwitter size={24}/>
            </Link>

            <Link href={'https://www.instagram.com/moonaim.99/'} target='_blank' className='p-4 rounded-full bg-neutral-800 hover:bg-pink-600 transition-all duration-100 ease-out bg'>
              <FiInstagram size={24}/>
            </Link>
          </div>
        </div>

      </div>

      {/* Projects */}
      <Link href='/projects' className="col-span-12 md:row-span-2 md:col-span-6 bg-neutral-900 hover:bg-neutral-800 transition-all duration-150 ease-ou rounded-lg flex flex-col md:flex-row p-3 gap-3">
        <div className="hidden md:block md:transform md:rotate-180 text-center text-base text-neutral-400 " style={{ writingMode: 'vertical-rl' }}>See all</div>
        <div className="hidden md:block md:mr-2 md:transform md:rotate-180 text-center text-2xl text-white font-semibold" style={{ writingMode: 'vertical-rl' }}>Projects</div>
        
        <div className="visible md:hidden text-center text-base text-neutral-400 " >See all</div>
        <div className="visible md:hidden text-center text-2xl text-white font-semibold" >Projects</div>
    
        {projects.map((p)=>{
          if(p.featured) return <ProjectViewSm p={p}/>
        })}

      </Link>

      {/* Perso */}
      <div className='row-span-2 col-span-6 flex flex-col md:grid md:grid-cols-3 gap-3'>
        <Link href={'/tfti'} className="w-full md:row-span-1 md:col-span-1 bg-lime-400 hover:bg-lime-500 rounded-lg flex flex-col items-center justify-center text-neutral-950 p-3 transition-all duration-100 ease-out">
          <div className='text-xl font-semibold'>Things from the</div>
          <div className='text-4xl font-semibold'>Internet</div>
        </Link>

        <Link href={'/messages'} className="w-full  md:row-span-1 md:col-span-1 bg-emerald-400 hover:bg-emerald-500 rounded-lg flex flex-col items-center justify-center text-neutral-950 p-3 transition-all duration-100 ease-out">
          <div className='text-xl font-semibold'>Leave a</div>
          <div className='text-4xl font-semibold'>Message</div>
        </Link>

        <Link href={'/'} className="w-full min-h-max md:row-span-1 md:col-span-1 bg-purple-600 hover:bg-purple-700 rounded-lg flex flex-col items-center justify-center text-white p-3 transition-all duration-100 ease-out">
          <div className='text-xl font-semibold'>40+</div>
          <div className='text-4xl font-semibold'>Clients</div>
        </Link>
      </div>
    </main>
  )
}
