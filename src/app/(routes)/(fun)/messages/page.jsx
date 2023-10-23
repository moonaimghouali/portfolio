'use client'

import React, { useState } from 'react'
import TopBar  from '@/components/ui/TopBar';
import { client } from '../../../../../sanity/lib/client'



const Page = () => {

  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const getMessages = async () =>{
    let query = `*[_type=='message']`
    const data = await client.fetch(query)
    console.log('this ran', data);
    setMessages(data)
    return
  }

  const postData = async () => {
    try {
      const response = await fetch(`https://4aqe0dii.api.sanity.io/v2023-10-23/data/mutate/production`, {
      method: 'POST',
      cache : 'no-cache',
      headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer skTOKvM2FpqaVd89LNPYCIISZNMjWE65dcq76ax92HxIjz7YqPz1OAJn4dispE7NuCl26KTM8porae8z5FEn3F70chFDr7PkQOycDWQvMhXlGOMiOU85lW1XLbXdTJoBycww0xWkN6RMYPcDl7fWUXqsZem9HAMDdsJsLzCeTRVBdYrLMjjA`,
      },
      body: JSON.stringify({
        mutations: [
          {
            create: {
            _id : 'msg.',
            _type: 'message',
            date : new Date().toISOString().split('T')[0],
            message : message
            },
          },
        ],
      }),
      });

      console.log(response)
      
      if (!response.ok) {
      throw new Error('Failed to create document in Sanity');
      }
      
      const data = await response.json();
      console.log('Document created:', data);
      setMessage('')

      getMessages()

      } catch (error) {
        console.error('Error creating document:', error)
      }
    };

  getMessages()

  return (
    <main className="max-w-screen min-h-screen bg-neutral-950  relative">

    <TopBar title={"Messages"}/>    
    
    <div className='w-full text-center text-5xl font-semibold text-emerald-400 mt-10 mb-1'>{messages.length} Messages</div>
    <div className='w-full text-center text-4xl font-semibold text-white mb-6'>were left by previous visitors.</div>

    <div className='h-1/3 w-full md:pl-10 p-3 flex flex-row overflow-x-auto gap-2'>
      {
        messages.map((m)=>(
          <div className='p-3 min-w-[300px] w-auto min-h-[100px] max-h-52 bg-neutral-900 rounded-md text-white font-normal' key={m._id}>
            <span className='text-sm text-emerald-500 font-normal '>{m.date} </span>
            <br />
            <div className=' text-ellipsis'>{m.message}</div>
          </div>
        ))
      }
        
    </div>
    <div className='w-full text-center text-2xl font-semibold text-white mt-16 mb-3'>You want to leave a message</div>
    <div className='w-full p-3 md:px-72 flex flex-col md:flex-row gap-3 items-center justify-center'>
      <textarea value={message} onChange={(e)=>setMessage(e.target.value)}  className='w-full md:w-10/12 h-40 bg-neutral-900 rounded-md border border-neutral-800 focus:border-neutral-500 focus:ring-neutral-500 p-3 text-neutral-100' maxLength={250} minLength={10} placeholder='write something fun.'></textarea>
      <button onClick={postData} className='w-full md:w-2/12 py-4 md:h-40 bg-emerald-500 text-neutral-950 rounded-md text-xl font-semibold '>Send</button>
    </div>

    <div className='h-20'>

    </div>
  </main>
  )
}

export default Page
