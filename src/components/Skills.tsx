import React from 'react'

const Skills = () => {
    const background1={background:'linear-gradient(90deg, rgba(0,155,223,1) 0%, rgba(0,155,223,1) 85%, rgba(232,237,243,1) 85%)'}
    const background2={background:'linear-gradient(90deg, rgba(0,155,223,1) 0%, rgba(0,155,223,1) 95%, rgba(232,237,243,1) 95%)'}
    const background3={background:'linear-gradient(90deg, rgba(0,155,223,1) 0%, rgba(0,155,223,1) 75%, rgba(232,237,243,1) 75%)'}
    const background4={background:'linear-gradient(90deg, rgba(0,155,223,1) 0%, rgba(0,155,223,1) 80%, rgba(232,237,243,1) 80%)'}
  return (
    <div className='flex flex-col  px-[5%] '>
        <h1 className='text-[35px] md:text-[60px] font-Noto '>Skills</h1>
        <div className='h-[340px] flex flex-col justify-between pt-[50px] '>
            <div className='w-[250px] md:w-[320px]'>
                <p className='text-[#758499] md:text-[17px] '>REACT</p>
                <div className='rounded-full  md:h-[25px] ' style={background1}> <p className='md:text-[14px] text-white ml-[75%] '>85%</p></div>
            </div>
            <div>
                <p className='text-[#758499] md:text-[17px] '>HTML</p>
                <div className='rounded-full md:h-[25px]  ' style={background2}><p className='md:text-[14px] text-white ml-[85%] '>95%</p></div>
            </div>
            <div>
                <p className='text-[#758499] md:text-[17px] '>CSS</p>
                <div className='rounded-full md:h-[25px] ' style={background3}><p className='md:text-[14px] text-white ml-[65%]'>75%</p></div>
            </div>
            <div>
                <p className='text-[#758499] md:text-[17px]  '>PHP</p>
                <div className=' rounded-full md:h-[25px]  ' style={background4}><p className='md:text-[14px] text-white ml-[70%]'>80%</p></div>
            </div>
        </div>
</div>
  )
}

export default Skills