import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';
import React, { useEffect, useState } from 'react'
import VideoPlayer from './VideoPlayer';
import SlideText from './SlideText';
import { useDispatch, useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(TextPlugin);





const Slide = ({data , nextLessonHandler , currentLesson ,previousLessonHandler}) => {
    const { videoData  } =useSelector((state)=>state.lesson)
    const [buttonStatus,setButtonStatus]=useState(false)
    const dispatch=useDispatch()

    const navigate=useNavigate()

    // console.log(currentLesson)
    // console.log(buttonStatus)


    useEffect(()=>{
      console.log("here ", videoData[currentLesson].isCompleted )
      if(videoData[currentLesson].isCompleted===true){
        setButtonStatus(true)
      } 
  },[videoData])

  



    
  return (
    <div className='w-full flex flex-col gap-y-20 justify-center'>

        <div className='w-full py-6 px-4 rounded-md bg-blue-900 text-white'>
        <h1 className='text-4xl font-semibold heading opacity-1'>
            {data.title}
        </h1>

        <div className='mt-12 flex flex-col gap-y-4  '>

            <SlideText note={data.note1}/>
            <SlideText note={data.note2}/>
            <SlideText note={data.note3}/>


          
        </div>

        </div>

     
        <VideoPlayer data={data}/>


        <div className='flex items-center w-full justify-between'>

          {
            (currentLesson===0) ?
              (<button onClick={()=>navigate("/")}>
                Home
              </button>) : (
                <button onClick={previousLessonHandler}>
                  Back to previous
                </button>
              )
          }


          {
            (buttonStatus===true) ? (
              <>
                {
                  (currentLesson === 6 ) ? (
                    <button onClick={()=>navigate("/")}>
                      Home
                    </button>
                  ) : (
                    <button onClick={nextLessonHandler}>
                      Move to next
                    </button>
                  )
                }
              </>
            ) : (
              <button disabled>
                Finish lecture first
              </button>
            )
          }

          
        </div>




    </div>

  )
}

export default Slide