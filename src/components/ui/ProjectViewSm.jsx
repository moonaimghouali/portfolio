import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram} from 'react-icons/fi'
import { BiLinkAlt } from 'react-icons/bi'

const ProjectViewSm = ({p}) => {
  return (
    <div className='w-full aspect-video rounded-md overflow-clip relative'>
        <div className='absolute z-30 text-white font-semibold bottom-3 left-3'>{p.title}</div>

        <div className='absolute z-30 flex gap-1 top-3 right-3 text-white'>
        <Link href={p.code} target='_blank' className='p-2 rounded-full bg-black/50 hover:bg-black'> 
            <FiGithub  size={18}/>  
        </Link>
        <Link href={p.live} target='_blank' className='p-2 rounded-full bg-black/50 hover:bg-black'> 
            <BiLinkAlt size={18}/>
        </Link>            
        </div>

        <div className='h-full w-full bg-gradient-to-t from-black/50 to-black/0 hover:to-black/80 transition-all duration-100 ease-out z-20 absolute'></div>
        <Image src={p.screens[0]} width={4000} height={4000} alt='image project' className='z-10 absolute w-full h-full object-cover'/>
    </div>
  )
}

export default ProjectViewSm
