import React from 'react'
import Experience from './Experience'
import Skills from './Skills'

const Expertise  = () => {
  return (
    <div className='flex justify-between max-w-[1180px] w-full m-auto pt-[120px]' id='Expertise'>
        <Skills/>
        <Experience/>
    </div>
  )
}

export default Expertise 