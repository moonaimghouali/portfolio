import { useRouter } from 'next/navigation'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'


const TopBar = ({title,  destinitation}) => {

    const router = useRouter()
    const handleClick = () =>{
        router.push(destinitation)
    }

  return (
    <div className='absolute top-0 w-max py-3 bg-neutral-950 text-white flex flex-row items-center justify-center gap-10'>

        <div className=''>
            <button onClick={handleClick}><FaArrowLeft size={24}/></button>
        </div>

        <div className='text-2xl font-semibold '>{title}</div>

    </div>
  )
}

export default TopBar