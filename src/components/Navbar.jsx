import React, { useEffect, useState } from 'react'
import ProgressBar from './ProgressBar'
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [progress,setProgress]=useState(0)
  const { videoData } =useSelector((state)=>state.lesson)


  useEffect(()=>{
    let count=0;

    videoData.forEach(element => {
      if(element.isCompleted===true){
        count++;
      }
    });


    setProgress(Math.ceil((count/videoData.length)*100))



  },[videoData])
  return (
    <div className='w-full py-8 flex justify-between items-center px-4 bg-red-500'>
        <p className='text-white hover:text-black transition-all duration-1000 font-bold max-sm:text-lg md:text-2xl lg:text-5xl   uppercase navHeading'>
            Employee Training Module
        </p>


        <div className='w-[60px]'>
          <ProgressBar percentage={progress}/>
        </div>

    </div>
  )
}

export default Navbar