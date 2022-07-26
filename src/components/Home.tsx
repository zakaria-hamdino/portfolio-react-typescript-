import React from 'react'
import Header from './Header'
import Introduction from './Introduction'


const Home = () => {
  return (
    <div className='relative bg-[#F6F8FA] pb-[40px] overflow-hidden h-screen h-[700px]' id='Home'>
        <Header/>
        <Introduction/>
    </div>
  )
}

export default Home