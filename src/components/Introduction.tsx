import React from 'react';
import email from '../Images/email.png';
import phone from '../Images/telephone.png';
import profilepic from '../Images/Profile-picture.png';
import backgroundpicture from '../Images/background-profile-picture.png'

const Introduction = () => {
  return (
    <div className='w-full pt-16  relative  px-[5%]' id='Introduction'>
      <div className='flex justify-between   w-full  '>
        <div className='flex justify-between flex-col	h-[480px] '>
          <div className=' flex justify-between flex-col'>
            <p className=' text-1xl text-[#758499] uppercase md:text-3xl	 '>hello, my name is</p>
            <hr  className='bg-[#758499] w-[14%] 	'/>
          </div>
          <div> 
            <p className='text-4xl md:text-6xl font-Noto ' >Zakaria Hamdino</p>
            <p className='text-2xl text-[#758499] md:text-4xl font-Noto mt-2'>Web Developper</p>
          </div>
          <div className='h-20 flex justify-between flex-col '>
            <div className='flex'>
              <img src={email} alt='email of the person' className='w-[4%]  '/>
              <p className='pl-3 text-2xl '>Hamdinozakaria12@gmail.com</p>
            </div>
            <div className='flex'>
              <img src={phone} alt='number phone of the person' className='w-[4%]' />
              <p className='pl-3 text-2xl'>069731-7731</p>
            </div>
          </div>
        </div>
        <div>
        <div className='top-0 right-0 absolute w-full h-full '>
            <img src={profilepic} className=' w-[30%] right-[20px] top-[160px] md:top-[130px] z-10 md:right-[5%] absolute md:w-[20%]' alt='profile picture of the person'/>
            <img className='right-[-120px] top-[80px] w-[60%] absolute md:top-[-15px] md:w-[45%] md:right-[-220px]  ' src={backgroundpicture} alt='profile picture of the person'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction