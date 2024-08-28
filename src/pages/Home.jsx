import React from 'react'
import image from "../assets/webdevBg.jpg"
import { useNavigate } from 'react-router-dom';

const listItems=[
  "This module is designed to enhance your development skills.",
  "Video Lectures are also provided in this course to ease your understanding.",
  "Created by our beloved contributors.",
  "Watch the lectures in sequential order only.Fast forward or skip options not supported.",
  "Learn when you want , Pause when you want . You won't lose course progress."
]

const Home = () => {

  const navigate=useNavigate()
  
  return (
    <div className='w-full min-h-screen'>

      <div className='flex w-full flex-col items-center'>

        <section className='lg:w-3/4 w-11/12 mx-auto lg:h-[500px] bg-blue-900 mt-12 gap-y-6  lg:pl-4 flex lg:flex-row flex-col-reverse rounded-md shadow-xl lg:items-center'>

          <div className='bg-yellow-300 p-4 min-w-[300px] mx-auto  h-fit rounded-md lg:-translate-x-12 max-lg:mx-4 max-lg:translate-y-12 '>
            <div className='text-xl italic font-bold'>Points to remember :</div>

            <div className='flex flex-col gap-y-1 text-gray-700 justify-start mt-4'>
              {
                listItems.map((item,index)=>(
                  <div key={index} className='flex items-baseline  gap-x-1 text-sm'>
                    <div className=''>-</div>
                    <span>{item}</span>
                  </div>
                ))
              }
            </div>
          </div>

          <img src={image} alt='image' className='lg:w-[60%] w-full h-full  rounded-md'/>

        </section>

      

        <button onClick={()=> navigate("/module")} class="py-3 px-12 rounded-md bg-red-500 text-white font-bold  max-lg:mt-32 mt-12 mb-12" role="button">Start</button>

      </div>

      

    </div>
  )
}

export default Home

