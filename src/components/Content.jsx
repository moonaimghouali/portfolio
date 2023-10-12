import React from 'react'

export const Content = ({title, content}) => {
  return (
    <div className='w-full h-full md:w-[50%] flex flex-col gap-1  '>
        <div className='font-normal text-3xl text-neutral-100'>Title</div>
        <div className='font-normal text-base text-neutral-100'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nobis excepturi natus est harum animi repellendus sed quia amet at?</div>
    </div>
  )
}
