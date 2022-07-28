import React from 'react'
import Experience from './Experience'
import Skills from './Skills'

const Expertise  = () => {
  return (
    <div className='flex justify-between h-full  w-full  bg-white  pt-[50px]' id='Expertise'>
        <Skills/>
        <Experience/>
    </div>
  )
}

export default Expertise 