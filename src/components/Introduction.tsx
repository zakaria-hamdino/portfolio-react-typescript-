import React from 'react';
import email from '../Images/email.png';
import phone from '../Images/telephone.png';
import profilepic from '../Images/Profile-picture.png';
import backgroundpicture from '../Images/background-profile-picture.png'

const Introduction = () => {
  return (
    <div className='pt-16  relative ' id='Introduction'>
      <div className='flex justify-between  max-w-[1180px] w-full m-auto  '>
        <div className='flex justify-between flex-col	h-[480px] '>
          <div className=' flex justify-between flex-col'>
            <p className='text-[#758499] uppercase text-3xl	 '>hello, my name is</p>
            <hr  className='bg-[#758499] w-[80px] h-[4px]	xl:h-[1px] border-solid	'/>
          </div>
          <div>
            <p className='text-7xl font-Noto xl:text-[33px]' >Zakaria Hamdino</p>
            <p className='text-[#758499] text-5xl font-Noto mt-2'>Web Developper</p>
          </div>
          <div className='h-20 flex justify-between flex-col '>
            <div className='flex'>
              <img src={email} alt='email of the person' className='w-8  '/>
              <p className='pl-3 text-2xl '>Hamdinozakaria12@gmail.com</p>
            </div>
            <div className='flex'>
              <img src={phone} alt='number phone of the person' className='w-8' />
              <p className='pl-3 text-2xl  '>069731-7731</p>
            </div>
          </div>
        </div>
        <div>
        <div className='top-0 right-0 absolute w-full max-w-[1180px] h-full'>
            <img src={profilepic} className='top-[130px] z-10 right-[50px] absolute w-[320px]' alt='profile picture of the person'/>
            <img className='absolute top-[-15px] w-[700px] right-[-250px]  ' src={backgroundpicture} alt='profile picture of the person'/>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction