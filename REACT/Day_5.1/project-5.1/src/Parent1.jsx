import React, { useState } from 'react'
import Child2 from './Child2'

function Parent1() {
    const [recievedData, setRecievedData] = useState("");
    const handleClick = (input)=>{
        setRecievedData(input)        
    }
  return (
    <>
    <div>Parent1</div>
    <h3>{recievedData}</h3>
    <Child2 passFunction={handleClick}/>
    </>
  )
}

export default Parent1