import React from 'react'

const Section = ({title , children}) => {
  return (
    <div className='flex flex-col mt-5 w-full'>
        <div className='text-3xl font-bold text-white mb-4'>{title}</div>
        {children}
    </div>
  )
}

export default Section