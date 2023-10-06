import Link from 'next/link'
import React from 'react'

const TftiView = ({t}) => {
  return (
    <Link href={t.link} target='_blank' className='w-full h-full bg-neutral-900 text-white p-3 rounded-md min-h-[150px] border-2 border-neutral-900 hover:border-lime-400 transition-all duration-100 ease-out'>
      
        <div className='text-[9px] font-semibold text-lime-400'>{t.type}</div>
        <div className='text-xl font-semibold'>{t.title}</div>
        <div className='text-base font-normal text-neutral-300'>{t.comment}</div>
    </Link>
  )
}

export default TftiView
