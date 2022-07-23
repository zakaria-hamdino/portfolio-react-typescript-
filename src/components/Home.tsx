import React from 'react'
import Header from './Header'
import Introduction from './Introduction'
import profilepic from '../Images/Profile-picture.png';
import backgroundpicture from '../Images/background-profile-picture.png'


const Home = () => {
  return (
    <div className='relative bg-[#F6F8FA] pb-[40px]  ' id='Home'>
        <Header/>
        <Introduction/>
        <div className='top-0 right-0 absolute w-full max-w-[1180px] h-full  '>
            <img src={profilepic} className='top-[50px] z-10 right-20 absolute ' alt='profile picture of the person'/>
            <img className='absolute top-0 bottom-[20px] right-[-100px] h-full' src={backgroundpicture} alt='profile picture of the person'/>
        </div>
    </div>
  )
}

export default Home