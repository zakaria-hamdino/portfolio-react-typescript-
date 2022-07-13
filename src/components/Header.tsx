import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between'>
        <div>
            <img src="" alt="" />
            <p className='text-blue-500'>ZAKARIA HAMDINO</p>
        </div>
        <div className='flex justify-between w-2/5'>
            <a href="" className='font-mono'>HOME</a>
            <a href="" className='font-mono'>ABOUT</a>
            <a href="" className='font-mono'>SERVICES</a>
            <a href="" className='font-mono'>CONTACT</a>
            <button>DOWNLOAD CV</button>
        </div>
    </div>
  )
}
export default Header