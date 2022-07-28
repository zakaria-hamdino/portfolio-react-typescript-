import React from 'react';
import email from '../Images/email.png';
import phone from '../Images/telephone.png';
import profilepic from '../Images/Profile-picture.png';
import backgroundpicture from '../Images/background-profile-picture.png'

const Introduction = () => {
  return (
    <div className='w-full  relative  h-screen p-14' id='Introduction'>
      <div className='flex justify-between h-full  w-full  '>
        <div className='flex  flex-col h-full justify-between 	 '>
          <div className=' flex justify-between flex-col'>
            <p className=' text-1xl text-[#758499] uppercase md:text-3xl	 '>hello, my name is</p>
            <hr  className='bg-[#758499] w-[14%] 	'/>
          </div>
          <div> 
            <p className='text-4xl md:text-6xl font-Noto ' >Zakaria Hamdino</p>
            <p className='text-2xl text-[#758499] md:text-4xl font-Noto mt-2'>Web Developper</p>
          </div>
          <div className=' flex space-y-5 justify-between flex-col '>
            <div className='flex'>
              <img src={email} alt='email of the person' className='w-10'/>
              <p className='pl-3 text-2xl '>Hamdinozakaria12@gmail.com</p>
            </div>
            <div className='flex'>
              <img src={phone} alt='number phone of the person' className='w-10' />
              <p className='pl-3 text-2xl'>069731-7731</p>
            </div>
          </div>
        </div>
        <div>
        <div className='top-0 right-0 absolute w-full h-full '>
            <img src={profilepic} className='right-2 top-[150px] md:top-[150px] w-[140px] md:w-[200px] xl:w-[400px] md:right-7 z-10 absolute xl:top-[100px] ' alt='profile picture of the person'/>
            <img className='top-[100px] w-[260px] xl:w-[600px]  md:w-[360px]  -right-28  xl:top-[20px] absolute  ' src={backgroundpicture} alt='profile picture of the person'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction