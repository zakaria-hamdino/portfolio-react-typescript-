import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-[1180px] w-full m-auto flex pt-[50px] '>
        <div>
            <h1 className='text-[#7A85A7] text-[14px] '>Based in Morocco,Working worldwide.</h1>
            <p className='text-6xl font-Noto underline pt-[10px]'>Get In Touch</p>
        </div>
        <div className='flex justify-between  w-[250px] ml-[200px] ' >
            <div>
                <h1 className='text-[#7A85A7] '>Social</h1>
                <p className='pt-[15px] pb-[8px]'>LinkedIn</p>
                <p className='pb-[8px]'>Instagram</p>
                <p className='pb-[8px]'>Twitter</p>
                <p >Tinder</p>
            </div>
            <div>
                <h1 className='text-[#7A85A7] '>Services</h1>
                <p className='pt-[15px] pb-[8px]'>UI/UX design</p>
                <p className='pb-[8px]'>Web Development</p>
                <p>App Development</p>
            </div>
        </div>
    </div>
  )
}

export default Footer