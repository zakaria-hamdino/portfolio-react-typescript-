import React from 'react';
import profilepic from '../Images/Profile-picture.png';
import email from '../Images/email.png';
import phone from '../Images/telephone.png'
const Introduction = () => {
  return (
    <div className='pt-16 bg-[#F6F8FA]' id='Introduction'>
      <div className='flex justify-between  max-w-[1180px] w-full m-auto '>
        <div className='flex justify-between flex-col	h-[280px] '>
          <div className='h-8 flex justify-between flex-col'>
            <p className='text-[#758499] uppercase	'>hello, my name is</p>
            <hr  className='bg-[#758499] w-[40px] h-[3px]	 border-solid	'/>
          </div>
          <div>
            <p className='text-5xl font-Noto ' >Zakaria Hamdino</p>
            <p className='text-[#758499] text-3xl font-Noto mt-2'>Web Developper</p>
          </div>
          <div className='h-16 flex justify-between flex-col '>
            <div className='flex'>
              <img src={email} alt='email of the person' className='w-6 '/>
              <p className='pl-3'>Hamdinozakaria12@gmail.com</p>
            </div>
            <div className='flex'>
              <img src={phone} alt='number phone of the person' className='w-6 ' />
              <p className='pl-3'>069731-7731</p>
            </div>
          </div>
        </div>
        <div>
          <img src={profilepic} alt='profile picture of the person'/>
        </div>
      </div>
    </div>
  )
}

export default Introduction