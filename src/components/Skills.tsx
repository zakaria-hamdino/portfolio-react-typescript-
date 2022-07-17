import React from 'react'

const Skills = () => {
    const background1={background:'linear-gradient(90deg, rgba(0,155,223,1) 0%, rgba(0,155,223,1) 85%, rgba(232,237,243,1) 85%)'}
    const background2={background:'linear-gradient(90deg, rgba(0,155,223,1) 0%, rgba(0,155,223,1) 95%, rgba(232,237,243,1) 95%)'}
    const background3={background:'linear-gradient(90deg, rgba(0,155,223,1) 0%, rgba(0,155,223,1) 75%, rgba(232,237,243,1) 75%)'}
    const background4={background:'linear-gradient(90deg, rgba(0,155,223,1) 0%, rgba(0,155,223,1) 80%, rgba(232,237,243,1) 80%)'}
  return (
    <div className='flex flex-col'>
        <h1 className='text-6xl font-Noto'>Skills</h1>
        <div className='h-[250px] flex flex-col justify-between pt-[50px] '>
            <div className='w-[320px]'>
                <p className='text-[#758499] text-[11px]'>JavaScript</p>
                <div className='rounded-full h-[15px] ' style={background1}> <p className='text-[10px] text-white ml-[75%]'>85%</p></div>
            </div>
            <div>
                <p className='text-[#758499] text-[11px]'>JavaScript</p>
                <div className='rounded-full h-[15px]' style={background2}><p className='text-[10px] text-white ml-[85%]'>95%</p></div>
            </div>
            <div>
                <p className='text-[#758499] text-[11px]'>JavaScript</p>
                <div className='rounded-full h-[15px]' style={background3}><p className='text-[10px] text-white ml-[65%]'>75%</p></div>
            </div>
            <div>
                <p className='text-[#758499] text-[11px] '>JavaScript</p>
                <div className=' rounded-full h-[15px] ' style={background4}><p className='text-[10px] text-white ml-[70%]'>80%</p></div>
            </div>
        </div>
</div>
  )
}

export default Skills