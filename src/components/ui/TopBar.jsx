import Link from 'next/link'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'

const TopBar = ({title}) => {

  return (
    <div className=' flex flex-row items-center gap-8 sticky top-0 w-full px-10 md:px-24 py-3 border-b border-neutral-800 bg-neutral-950/70 backdrop-blur-md'>
      <Link href={'/'} ><FaArrowLeft size={28} className='text-white'/></Link>
      <div className='text-2xl font-bold text-neutral-100'>{title}</div>
    </div>
  )
}

export default TopBar
