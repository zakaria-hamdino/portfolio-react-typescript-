import React from 'react'
import Header from './Header'
import Introduction from './Introduction'


const Home = () => {
  return (
    <div className='relative  w-full  pb-[40px] overflow-hidden h-screen' id='Home'>
        <Header/>
        <Introduction/>
    </div>
  )
}

export default Home