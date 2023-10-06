import React from 'react'
import TopBar  from '@/components/ui/TopBar';
import { tfti } from '@/data/tfti';
import TftiView from '@/components/ui/TftiView';

const page = () => {
  return (
    <main className="max-w-screen min-h-screen bg-neutral-950  relative">

    <TopBar title={"TFTI"}/>

    
    <div className='w-full text-center text-4xl font-semibold text-lime-400 mt-6 mb-1'>{tfti.length}</div>
    <div className='w-full text-center text-4xl font-semibold text-white mb-2'>Things I found intresting from the internet.</div>
    <div className='w-full text-center text-base font-medium text-white '>you might aswell</div>
    <div className='h-full w-full grid grid-cols-2 md:grid-cols-3 gap-3 py-6 px-3 md:px-56'>
        {tfti.map((t)=>(
            <TftiView key={t.id} t={t}/>
        ))}
    </div>

    <div className='h-20'>

    </div>
  </main>
  )
}

export default page
