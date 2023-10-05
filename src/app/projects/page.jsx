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

      <div className='h-full w-full flex flex-col items-center gap-3 p-3 md:p-6'>
        {projects.map((p)=>(
          <ProjectView key={p.id} p={p}/>
        ))}

      </div>
    </main>
  )
}

export default Projects