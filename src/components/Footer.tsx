import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[1180px] w-full m-auto flex pt-[120px] items-center pb-[90px]'  id='contact'>
        <div className='flex flex-col items-center	'>
            <h1 className='text-[#7A85A7] text-[20px] '>Based in Morocco,Working worldwide.</h1>
            <p className='text-8xl font-Noto underline pt-[10px]'>Get In Touch</p>
        </div>
        
        <div className='flex justify-between  w-[350px] ml-[200px] ' >
            <div>
                <h1 className='text-[#7A85A7]  text-[18px]'>Social</h1>
                <p className='pt-[15px] pb-[13px] text-[15px]'>LinkedIn</p>
                <p className='pb-[13px] text-[15px]'>Instagram</p>
                <p className='pb-[13px] text-[15px]'>Twitter</p>
                <p className='text-[15px]'>Github</p>
            </div>
            <div>
                <h1 className='text-[#7A85A7] text-[18px] '>Services</h1>
                <p className='pt-[15px] pb-[13px] text-[15px]'>UI/UX design</p>
                <p className='pb-[13px] text-[15px]'>Web Development</p>
                <p className='text-[15px]'>App Development</p>
            </div>
        </div>
    </div>
  )
}

export default Footer