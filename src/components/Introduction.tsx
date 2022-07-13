import React from 'react';
import profilepic from '../Images/Profile-picture.png';
import email from '../Images/email.png';
import phone from '../Images/telephone.png'
const Introduction = () => {
  return (
    <div className='flex justify-between mt-16'>
      <div className='flex justify-between flex-col	h-72	 '>
        <div className='h-8 flex justify-between flex-col'>
          <p>HELLO,MY NAME IS </p>
          <hr  className='bg-[#AFB7C4] w-10'/>
        </div>
        <div>
          <p className='font-mono'>Zakaria Hamdino</p>
          <p>Web Developper</p>
        </div>
        <div className='h-16 flex justify-between flex-col '>
          <div className='flex'>
            <img src={email} className='w-6 '/>
            <p className='pl-2'>Hamdinozakaria12@gmail.com</p>
          </div>
          <div className='flex'>
            <img src={phone} className='w-6 ' />
            <p className='pl-2'>069731-7731</p>
          </div>
        </div>
      </div>
      <div>
        <img src={profilepic} className='w-3/6	 h-3/4'/>
      </div>
    </div>
  )
}

export default Introduction