import React from 'react';
import fleche from '../Images/arrow.png';
import design from '../Images/design.png';
import development from '../Images/development.png';
import phone from '../Images/phone.png';
const Services = () => {
  return (
    <div className='pt-10 bg-[#F6F8FA] h-full  px-[5%] pb-[70px]' id='Services'>
        <div className='w-full'>
            <div>
                <p className='text-[30px] font-Noto md:text-[60px] '> What I do</p>
                <div className='flex justify-between'>
                    <p className='text-[#758499] md:text-[18px]  w-[70%] pt-[32px]'>From understading your requirements, designing a blueprint and delivering the final product, i do everything that falls in between these lines.</p>       
                    <img src={fleche} alt="arrow icone"  className="w-[15%]" /> 
                </div>
            </div>
            <div className='flex flex-wrap pt-[50px]  md:flex md:justify-between items-center'>
                <div className='flex pt-20  md:pt-10 '>
                    <img src={design}  alt="design  icone" className='w-[30px] h-[30px] md:w-[50px] md:h-[50px]' />
                    <div className=' md:w-[300px] pl-[15px] '>
                        <p className='font-bold	 text-[18px] md:text-[25px] '>UI/UX DESIGN</p>
                        <p className='text-[#758499] text-[18px] pt-[20px] md:text-[20px]  '>An effective UI/UX is what captures attention and spreads a clear message.I make sure the design is innovative and neat with all of this.</p>
                    </div>
                </div>
                <div className='flex pt-20 '>
                    <img src={development} alt="development icone" className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] ' />
                    <div className=' md:w-[300px] pl-[15px] '>
                        <p className='font-bold	 text-[18px] md:text-[25px] '>Web developement</p>
                        <p className='text-[#758499]  pt-[20px] text-[18px] md:text-[20px]  '>if you are looking for a developer who'll take over the research and development of your website,I am a well-established professional to help you with this</p>
                    </div>
                </div>
                <div className='flex  pt-20 '>
                    <img src={phone}   alt="phone icone" className='w-[30px] h-[30px] md:w-[50px] md:h-[50px] ' />
                    <div className=' md:w-[300px] pl-[15px] '>
                        <p className='font-bold text-[18px] md:text-[25px] '>APP DEVELOPMENT</p>
                        <p className='text-[#758499] text-[18px] pt-[20px]  md:text-[20px] '>if you are looking for a user-friendly app that will attract more mobile users,I can help you design and build a platfrom with the latest and trendiest look and feel.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services