'use client'

import React from 'react'
import {projects} from '@/data/projects'
import ProjectView from '@/components/ui/ProjectView'
import TopBar  from '@/components/ui/TopBar';

const Projects = () => {

  console.log();(typeof(projects))

  return (
    <main className="max-w-screen h-full bg-neutral-950  relative">

      <TopBar title={'Projects'}/>

      {/* <div className='h-full w-full flex flex-col items-center gap-3 p-3 md:p-6'> */}
      <div className='w-full text-center text-4xl font-semibold text-white mt-6 mb-4'>Some of the projects I worked on</div>
      <div className='h-full w-full grid gird-cols-1 md:grid-cols-2 gap-3 py-6 px-3 '>
        {projects.map((p)=>(
          <ProjectView key={p.id} p={p}/>
        ))}
      </div>

      <div className='h-20'>

      </div>
    </main>
  )
}

export default Projects