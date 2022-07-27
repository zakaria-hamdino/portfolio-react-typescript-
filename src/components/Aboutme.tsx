import React from 'react'

const Aboutme = () => {
  return (
    <div className='bg-red-600 md:bg-blue-600 pt-10  pb-20  w-full  overflow-hidden h-screen' id='Aboutme'>
        <div className='flex justify-between flex-col    '>
            <h1 className='text-[#429ADB] text-[20px] '>about me</h1>
            <p className='font-Noto text-[50px] '>I am an enthusiastic web developer based in Morocco,with a rich experience of over 1 years in website </p>
        </div>
        <div className='flex justify-between  mt-[80px]'>
            <p className=' font-Noto w-[300px] text-[30px] text-[#429ADB] '> A clean code  beautiful websites</p>
            <div className='w-[525px]'>
                <p className='text-[18px] '>with years of experience in graphic and web design i have mastered the skill of understanding client requirements according to the latest trends.I have worked with businesses from different niches so you can rely on me of yours </p>
                <p className='text-[#758499] text-[18px] pt-[30px]'>I've spent most of these years working across different areas of design like front-end development,landing pages,email design,app UI/UX,to my current role designing products for mobile platforms.Having worked on various projects that are already live,<br></br>I can help you with the best possible suggestions and ideas that we can proceed with.<br></br>With me,you aren't forced to accept anything.I give you a variety of options we can work on together.  </p>
                <button className='text-[18px] flex justify-center pt-8 w-full' >Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Aboutme