// import React, { useEffect, useState } from 'react'
import React from 'react'
import TopBar  from '@/components/ui/TopBar';
import { ReadFile } from '@/lib/FileReader';


const Page = () => {

    // // const [msgs, setMsgs] = useState(['Lorem ipsum dolor sit amet. Et tempore mollitia rem dolores iure qui maxime fugit ex unde sequi. Eos ratione autem qui esse molestiae in', 'sjkasas lasklasklask lasklasklasklasklklasks aksalkaklasklasklas klklasklasksaklas klasklasklask lasklasklkaslklask lsaklasklasklaskl asklsakl askllllllllllllsjkasaslas klasklasklasklasklasklask ', 'lorem ipsum','hello', 'welcome', 'lorem ipsum','hello', 'welcome', 'lorem ipsum','hello', 'welcome', 'lorem ipsum','hello', 'welcome', 'lorem ipsum',])
    // const [msgs, setMsgs] = useState(ReadFile('../../../../data/messages.txt'))
  return (
    <main className="max-w-screen min-h-screen bg-neutral-950  relative">

    <TopBar title={"Messages"}/>    
    
    {/* <div className='w-full text-center text-5xl font-semibold text-emerald-400 mt-6 mb-1'>{msgs.length} Messages</div> */}
    <div className='w-full text-center text-4xl font-semibold text-white mb-6'>were left by previous visitors.</div>

    <div className='h-1/3 w-full p-3 flex flex-row overflow-x-auto gap-2'>
      {/* {
        msgs.map((m)=>(
          <div className='p-3 min-w-[300px] w-auto min-h-[100px] max-h-52 bg-neutral-900 rounded-md text-white font-normal' key={m}>
            <span className='text-sm text-emerald-500 font-normal '>22-Jul-2023 </span>
            <br />
            <div className=' text-ellipsis'>{m}</div>
          </div>
        ))
      } */}
        
    </div>
    <div className='w-full text-center text-2xl font-semibold text-white mt-10 mb-6'>You want to leave a message</div>
    <div className='w-full p-3 md:px-72 flex flex-col md:flex-row gap-3 items-center justify-center'>
      <textarea  className='w-full md:w-10/12 h-40 bg-neutral-900 rounded-md border border-neutral-600 p-3 text-neutral-100' maxLength={200} placeholder='write something fun.'></textarea>
      <button className='w-full md:w-2/12 py-4 md:h-40 bg-emerald-500 text-neutral-950 rounded-md text-xl font-semibold '>Send</button>
    </div>

    <div className='h-20'>

    </div>
  </main>
  )
}

export default Page
