import React from 'react'
import {projects} from '@/data/projects'
import ProjectView from '@/components/ui/ProjectView'

const Projects = () => {

  console.log();(typeof(projects))

  return (
    <main className="max-w-screen h-full bg-neutral-950 p-3 md:p-6 flex flex-col gap-3 items-center">

      {projects.map((p)=>(
        <ProjectView key={p.id} p={p}/>
      ))}
      
    </main>
  )
}

export default Projects