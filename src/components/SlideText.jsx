import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'
import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";

const SlideText = ({note}) => {
  useGSAP(()=>{

    gsap.to(".textContent",{
        y:0,
        opacity:1,
        ease:'power2.in',
        stagger:{
            from:"end",
            amount:1,
        }
        
    })

},[])
  return (
    <div className='flex w-full gap-x-2  justify-start  opacity-0 textContent'>
      <div className='w-[5%]'>
        <MdOutlineSubdirectoryArrowRight className='text-xl'/>
      </div>
      <p className='w-[90%]'>{note}</p>
    </div>
  )
}

export default SlideText