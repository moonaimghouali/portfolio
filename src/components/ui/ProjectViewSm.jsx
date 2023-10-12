import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiLinkedin, FiGithub, FiTwitter, FiInstagram} from 'react-icons/fi'
import { BiLinkAlt } from 'react-icons/bi'

const ProjectViewSm = ({p}) => {
  return (
    <Link href={p.live} target='_blank' className='w-full aspect-video rounded-md overflow-clip relative'>
        <div className='absolute z-40 text-white text-lg font-semibold bottom-3 left-3'>{p.title}</div>

        <div className='absolute z-30 flex gap-1 top-3 right-3 text-white'>
          {/* <Link href={p.live} target='_blank' className='p-2 rounded-full bg-black/60 hover:bg-black'> 
            <BiLinkAlt size={18}/>
          </Link>             */}
        </div>

        <div className='h-full w-full bg-gradient-to-t from-black/60 to-black/10 transition-all duration-100 ease-out z-20 absolute'></div>
        <Image src={p.previewImage} width={500} height={500} alt='image project' className='z-10 w-full h-full absolute object-contain'/>
    </Link>
  )
}

export default ProjectViewSm
