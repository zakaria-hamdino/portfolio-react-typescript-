import React from 'react'

const Aboutme = () => {
  return (
    <div className='pt-10 flex justify-between flex-col  max-w-[1180px] w-full m-auto		 h-[540px]  ' id='Aboutme'>
        <div className='flex justify-between flex-col h-[120px]  '>
            <p className='text-[#429ADB] text-[10px]'>about me</p>
            <p className='font-Noto text-[30px]'>I am an enthusiastic web developer based in Morocco,with a rich experience of over 3 years in website </p>
        </div>
        <div className='flex justify-between h-[320px]'>
            <p className=' font-Noto w-[270px] text-[27px] text-[#429ADB]'> A clean code  beautiful websites</p>
            <div className='w-[525px] text-[11px] flex justify-between flex-col h-[300px] '>
                <p>with years of experience in graphic and web design i have mastered the skill of understanding client requirements according to the latest trends.I have worked with businesses from different niches so you can rely on me of yours </p>
                <p className='text-[#758499]'>I've spent most of these years working across different areas of design like front-end development,landing pages,email design,app UI/UX,to my current role designing products for mobile platforms.Having worked on various projects that are already live,<br></br>I can help you with the best possible suggestions and ideas that we can proceed with.<br></br>With me,you aren't forced to accept anything.I give you a variety of options we can work on together.  </p>
                <button>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Aboutme