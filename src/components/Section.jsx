import React from 'react'

export const Section = ({children}) => {
  return (
    <div className='w-full h-fit flex flex-col md:flex-col gap-6 py-3 text-white'>
      {children}
    </div>
  )
}

 
