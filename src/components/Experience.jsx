import React from 'react'

const Experience = () => {
  return (
    <div className=" border-b border-neutral-900 pb-4">
    <h1 className=" my-20 text-center text-4xl"></h1>
    <div >
    {PROJECTS.map((projects,index)=>(
      <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
      <div className=" w-full lg:w-1/4">
      <p>{projects.description}</p>
        {/* <img src={projects.image} alt={projects.title} className="w-96 h-96 object-cover" /> */}
      </div>

      </div>
    ))}

    </div>
      
    </div>
  )
}

export default Experience
