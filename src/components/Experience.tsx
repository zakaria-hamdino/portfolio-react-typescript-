import React from 'react'
import Arrow from '../Images/arrow-right.png'
const Experience = () => {
  return (
    <div className='flex flex-col'>
        <h1 className='text-[60px] font-Noto ' >My Experience</h1>
        <div className='flex pt-[45px] pb-[50px]'>
            <div >
                <p className='text-center text-[15px] '>2015-2021</p>
                <div className='flex items-center'>
                    <hr  className='bg-[#758499] w-[120px] h-[1px]	 border-solid'/>
                    <img src={Arrow} alt="arrow right"  className='w-[15px]'/>
                </div>
                <p className='text-[#758499] text-center text-[15px]'>ACME Company</p>
            </div>
            <article className='w-[550px] mt-[12px] pl-[15px]'>
                <h1 className='text-[#009bdf] text-[20px] font-bold  '>LEAD UI/UX DESIGNER</h1>
                <p className='pt-[15px] max-w-[550px] text-[15px] '> Worked with a team of developers and designers on a mobile delivery app, my task was to create the front-end of the proposed designs, integrating multiple functionalities, such as the API auth</p>
            </article>
        </div>
        <div className='flex pb-[50px]' >
            <div>
                <p className='text-center  text-[15px]'>2015-2021</p>
                <div className='flex items-center	'>
                    <hr  className='bg-[#758499] w-[120px] h-[1px]	 border-solid'/>
                    <img src={Arrow} alt="arrow right"  className='w-[15px]'/>
                </div>
                <p className='text-[#758499] text-center'>ACME Company</p>
            </div>
            <article className='w-[550px] mt-[12px] pl-[15px]'>
                <h1 className='text-[#009bdf] text-[20px] font-bold '>LEAD UI/UX DESIGNER</h1>
                <p className='pt-[15px] max-w-[550px] text-[15px] ' > Worked with a team of developers and designers on a mobile delivery app, my task was to create the front-end of the proposed designs, integrating multiple functionalities, such as the API auth</p>
            </article>
        </div>
        <div className='flex pb-[50px]'>
            <div>
                <p className='text-center  text-[15px]'>2015-2021</p>
                <div className='flex items-center	'>
                    <hr  className='bg-[#758499] w-[120px] h-[1px]	 border-solid'/>
                    <img src={Arrow} alt="arrow right"  className='w-[15px]'/>
                </div>
                <p className='text-[#758499] text-center'>ACME Company</p>
            </div>
            <article className='w-[550px] mt-[12px] pl-[15px]'>
                <h1 className='text-[#009bdf] text-[20px] font-bold '>LEAD UI/UX DESIGNER</h1>
                <p className='pt-[15px] max-w-[550px] text-[15px] '> Worked with a team of developers and designers on a mobile delivery app, my task was to create the front-end of the proposed designs, integrating multiple functionalities, such as the API auth</p>
            </article>
        </div>
        <div className='flex'>
            <div>
                <p className='text-center  text-[15px]'>2015-2021</p>
                <div className='flex items-center	'>
                    <hr  className='bg-[#758499] w-[120px] h-[1px]	 border-solid'/>
                    <img src={Arrow} alt="arrow right"  className='w-[15px]'/>
                </div>
                <p className='text-[#758499] text-center'>ACME Company</p>
            </div>
            <article className='w-[550px] mt-[12px] pl-[15px]'>
                <h1 className='text-[#009bdf] text-[20px] font-bold '>LEAD UI/UX DESIGNER</h1>
                <p className='pt-[15px] max-w-[550px] text-[15px] '> Worked with a team of developers and designers on a mobile delivery app, my task was to create the front-end of the proposed designs, integrating multiple functionalities, such as the API auth</p>
            </article>
        </div>
    </div>
  )
}

export default Experience