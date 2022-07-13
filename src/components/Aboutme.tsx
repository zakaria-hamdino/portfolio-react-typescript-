import React from 'react'

const Aboutme = () => {
  return (
    <div className='mt-10 flex justify-between flex-col h-44'>
        <div className='flex justify-between flex-col h-14 '>
            <p>about me</p>
            <p>I am an enthusiastic web developer based in Morocco,with a rich experience of over 3 years in website </p>
        </div>
        <div className='flex justify-between'>
            <p>I have a clean code and beautiful structure</p>
            <div>
                <p>Worked with a team of developers and designers on a mobile delivery app, my task was to create the front-end of the proposed designs, integrating multiple functionalities, such as the API auth, products and google maps API</p>
                <button>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Aboutme