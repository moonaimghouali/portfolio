import React from 'react'
import Link from 'next/link'
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram} from 'react-icons/fi'
import { BiLinkAlt } from 'react-icons/bi'
import Image from 'next/image'

const ProjectView = ({p}) => {
  return (
    
    <div className='bg-neutral-900 rounded-md w-full flex flex-col overflow-clip h-full'>
      <Image src={p.screens[0]} alt='' height={4000} width={3000} className='h-[200px] aspect-video bg-neutral-800 object-cover'/>      
      <div className='p-3 flex flex-col gap-1 text-white'>

        <div className='flex justify-between'>
          <div className='text-[9px] font-medium w-fit text-teal-500'>{p.domain}</div>
          <div className='font-medium  text-[9px]'>  {p.date}</div>
        </div>
        <div className='text-3xl font-semibold'>{p.title} </div>
        
        <div className='flex flex-row gap-3 my-2'>
          <Link href={p.live} target='_blank' className='hover:bg-neutral-700 flex gap-2 items-center justify-center px-2 rounded-full bg-neutral-800'> 
            <div className='text-xs'>Live Demo</div>
            <BiLinkAlt  size={14}/>  
          </Link>

          <Link href={p.code} target='_blank' className='p-2 hover:bg-neutral-700 flex gap-2 items-center justify-center px-2 rounded-full bg-neutral-800'> 
            <div className='text-xs'>Project Code</div>
            <FiGithub  size={14}/>  
          </Link>
          
          
        </div>

        <p className='text-neutral-300 text-sm my-2'>{p.description}</p>

        <div className='flex flex-row flex-wrap gap-2 mt-1'>  
          {p.techStack.map((t)=>(
            <div key={t} className=' font-mono text-xs text-violet-400 px-2 py-1 rounded-md bg-neutral-950'>{t}</div>
          ))}
        </div>

        <div className='h-px bg-neutral-700 w-full my-1'/>
        {p.preview && (
          <div className='flex flex-row gap-2'>
            {p.screens.map((image)=>(
              <Image key={p.id} src={image} width={2000} height={2000} alt='image' className='w-28 apsect-auto bg-white rounded-md hover:cursor-pointer hover:shadow-md'/>
            ))}
          </div>
        )}

        {!p.preview && (
          <div className='font-medium text-xs text-neutral-400'>No Screens available</div>
        )}
        
      </div>
      
    </div>
  )
}

export default ProjectView