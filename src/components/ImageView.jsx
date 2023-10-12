import React from 'react'
import Image from 'next/image'
import i from '../../public/photo.jpg'

export const ImageView = (src) => {
   
  return (
    <Image src={i} alt={'img'} width={500} height={500}className='w-full min-h-[200px] max-h-60 md:w-[30%] bg-white rounded-md overflow-clip relative aspect-auto object-cover'>
    </Image>
  )
}
