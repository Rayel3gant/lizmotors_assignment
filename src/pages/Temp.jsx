import React, { useState } from 'react'

const Temp = () => {
    const [count,setCount]=useState(0)

  return (
    <div>
        <button onClick={()=>setCount(count+1)}>
            +
        </button>


        <div>{count}</div>


        <button onClick={()=>setCount(count-1)}>
            -
        </button>
    </div>
  )
}

export default Temp