'use client'

import Image from 'next/image'
import image from '../../public/photo.jpg'
import project1 from '../../public/project-1.jpeg'
import project2 from '../../public/project2.gif'
import Link from 'next/link'
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram} from 'react-icons/fi'
import { BiLinkAlt } from 'react-icons/bi'

export default function Home() {
  return (
    <main className="max-w-screen md:max-h-screen flex flex-col md:grid md:grid-cols-12 md:grid-rows-6 gap-3 bg-neutral-950 p-3 md:p-6">
      
      {/* Tagline */}
      <div className="h-full w-full flex flex-col md:row-span-4 md:col-span-6 md:grid md:grid-cols-3 md:grid-rows-2 gap-3">
        
        <div className="w-full md:row-span-1 md:col-span-3 bg-neutral-900 rounded-lg p-3 text-white text-5xl font-bold text-center align-middle">
          Bring Your Ideas To Life Through 
          <span className='text-7xl text-rose-600'> UI Design.</span>
        </div>

        <Link href={'/memories'} className="w-full md:row-span-1 md:col-span-1 bg-teal-600 hover:bg-teal-700 rounded-lg flex flex-col items-center justify-center text-white p-3 transition-all duration-100 ease-out">
          <div className='text-3xl font-semibold'>Memories</div>
          <div className='text-lg font-semibold'></div>
        </Link>

        <div className="w-full  md:row-span-1 md:col-span-1 bg-green-600 hover:bg-green-700 rounded-lg flex flex-col items-center justify-center text-white p-3 transition-all duration-100 ease-out">
          <div className='text-5xl font-semibold'>54+</div>
          <div className='text-lg font-semibold'>Handled Projects</div>
        </div>

        <div className="w-full min-h-max md:row-span-1 md:col-span-1 bg-purple-600 hover:bg-purple-700 rounded-lg flex flex-col items-center justify-center text-white p-3 transition-all duration-100 ease-out">
          <div className='text-5xl font-semibold'>40+</div>
          <div className='text-lg font-semibold'>Clients</div>
        </div>
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
      <Link href='/projects' className="col-span-12 md:row-span-2 md:col-span-7 bg-neutral-900 hover:bg-neutral-800 transition-all duration-150 ease-ou rounded-lg flex flex-col md:flex-row p-3 gap-3">
        <div className="hidden md:block md:transform md:rotate-180 text-center text-base text-neutral-400 " style={{ writingMode: 'vertical-rl' }}>See all</div>
        <div className="hidden md:block md:mr-2 md:transform md:rotate-180 text-center text-2xl text-white font-semibold" style={{ writingMode: 'vertical-rl' }}>Projects</div>
        
        <div className="visible md:hidden text-center text-base text-neutral-400 " >See all</div>
        <div className="visible md:hidden text-center text-2xl text-white font-semibold" >Projects</div>
     
        {/* Project 1 */}
        <Link href='projects/1' target='_blank' className='w-full aspect-video rounded-md overflow-clip relative'>
          <div className='absolute z-30 text-white font-semibold bottom-3 left-3'>My Portfolio</div>

          <div className='absolute z-30 flex gap-1 top-3 right-3 text-white'>
            <Link href={''} target='_blank' className='p-2 rounded-full hover:bg-black'> 
              <FiGithub  size={18}/>  
            </Link>
            <Link href={''} target='_blank' className='p-2 rounded-full hover:bg-black'> 
              <BiLinkAlt size={18}/>
            </Link>            
          </div>

          <div className='h-full w-full bg-black/50 hover:bg-black/75 transition-all duration-100 ease-out z-20 absolute'></div>
          <Image src={project1} alt='image project' className='z-10 absolute h-full object-cover'/>
        </Link>

        {/* Project 2 */}
        <Link href='projects/2' target='_blank' className='w-full aspect-video rounded-md overflow-clip relative'>
          <div className='absolute z-30 text-white font-semibold bottom-3 left-3'>2nd Project</div>

          <div className='absolute z-30 flex gap-1 top-3 right-3 text-white'>
            <Link href={''} target='_blank' className='p-2 rounded-full hover:bg-neutral-900'> 
              <FiGithub  size={18}/>  
            </Link>
            <Link href={''} target='_blank' className='p-2 rounded-full hover:bg-neutral-900'> 
              <BiLinkAlt size={18}/>
            </Link>            
          </div>

          <div className='h-full w-full bg-black/50 hover:bg-black/75 transition-all duration-100 ease-out z-20 absolute'></div>
          <Image src={project2} alt='image project' className='z-10 absolute h-full object-cover'/>

        </Link>

      </Link>

      {/* About */}
      <Link href={'/about'} className="row-span-2 col-span-5 bg-neutral-900 hover:bg-neutral-800 transition-all duration-150 ease-out rounded-lg p-3 text-white">
        <div className='flex justify-between mb-2'>
          <div className='text-lg font-semibold'>About me</div>
          <button className='hover:text-rose-600 transition-all duration-100 ease-out'>Resume</button>
        </div>
        <div className='text-neutral-200'>
        I'm a UX/UI Designer with a background in Psychology, which gives me a unique edge in empathizing with users 
        and improving their experience through design. 
        My research experience has refined my problem-solving skills and user insights. 
        I'm constantly seeking new ways to learn and grow through real-world experiences.
        </div>
      </Link>

    </main>
  )
}
