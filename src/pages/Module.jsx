import React, { useState } from 'react'
import { moduleLearnings } from '../data/Learning';
import Slide from '../components/Slide';
import Loader from "../components/Loader"

const Module = () => {
  const [loading,setLoading]=useState(false)
  const [currentLesson,setCurrentLesson]=useState(0)

  const nextLessonHandler=()=>{

    
    console.log("current lesson",currentLesson)
    console.log("moving to next lesson")

    setLoading(true)
    setCurrentLesson(currentLesson+1)

    setTimeout(() => {
      setLoading(false)
    }, 1000);
    console.log("next lesson",currentLesson)

  }


  const previousLessonHandler=()=>{
    console.log("current lesson",currentLesson)
    console.log("moving to previous lesson")

    setLoading(true)
    setCurrentLesson(currentLesson-1)

    setTimeout(() => {
      setLoading(false)
    }, 1000);
    console.log("previous lesson",currentLesson)

  }





  
  return (
    <div className='w-full '>

      <>
        {
          loading=== true ? (
            <div className='w-full h-[calc(100vh-8rem)] flex justify-center items-center'>
              <Loader/>
            </div>
          ) : (
            <div className='lg:w-3/4 w-11/12 mx-auto py-6 px-4'>
              <Slide key={moduleLearnings[currentLesson].id} 
                nextLessonHandler={nextLessonHandler} 
                currentLesson={currentLesson}  
                data={moduleLearnings[currentLesson]}
                previousLessonHandler={previousLessonHandler}
              />      
            </div>
          )
        }
      </>
    </div>
  )
}

export default Module