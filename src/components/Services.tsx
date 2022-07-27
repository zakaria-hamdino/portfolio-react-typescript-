import React from 'react';
import fleche from '../Images/arrow.png';
import design from '../Images/design.png';
import development from '../Images/development.png';
import phone from '../Images/phone.png';
const Services = () => {
  return (
    <div className='pt-10 bg-[#F6F8FA] h-screen   pb-[70px]' id='Services'>
        <div className='w-full '>
            <div>
                <p className='font-Noto text-[60px] '> What I do</p>
                <div className='flex justify-between '>
                    <p className='text-[#758499] text-[18px] w-[700px] pt-[32px]'>From understading your requirements, designing a blueprint and delivering the final product, i do everything that falls in between these lines.</p>       
                    <img src={fleche} alt="arrow icone"  className="w-[90px]" /> 
                </div>
            </div>
            <div className='flex justify-between pt-60 '>
                <div className='flex '>
                    <img src={design}  alt="design  icone" className='w-[50px] h-[50px] ' />
                    <div className=' w-[300px] pl-[15px] '>
                        <p className='font-bold	 text-[25px] '>UI/UX DESIGN</p>
                        <p className='text-[#758499] text-[20px] pt-[30px] '>An effective UI/UX is what captures attention and spreads a clear message.I make sure the design is innovative and neat with all of this.</p>
                    </div>
                </div>
                <div className='flex '>
                    <img src={development} alt="development icone" className='w-[50px] h-[50px] ' />
                    <div className=' w-[300px] pl-[15px] '>
                        <p className='font-bold	  text-[25px] '>Web developement</p>
                        <p className='text-[#758499] text-[20px] pt-[30px] '>if you are looking for a developer who'll take over the research and development of your website,I am a well-established professional to help you with this</p>
                    </div>
                </div>
                <div className='flex '>
                    <img src={phone}   alt="phone icone" className='w-[50px] h-[50px] ' />
                    <div className=' w-[300px] pl-[15px] '>
                        <p className='font-bold  text-[25px] '>APP DEVELOPMENT</p>
                        <p className='text-[#758499]  text-[20px] pt-[30px]  '>if you are looking for a user-friendly app that will attract more mobile users,I can help you design and build a platfrom with the latest and trendiest look and feel.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services