import React, { useEffect, useState } from 'react'
import ChildComponent from './ChildComponent'

function FunctionalComponent() {
    const[value, setValue] = useState(0)
    const[data, setRecievedData] = useState("")
    useEffect(()=>{
        console.log("component is mounted")
    },[])
    useEffect(()=>{
        console.log("component is updated")
    })

    const addValue = () =>{
        setValue((count) => count + 1)
    }

    const recieveDataFromChild = (data)=>{
        setRecievedData(data)
    }

  return (
    <div>
        <button onClick={addValue}>Click</button>
        <div>{data}</div>
        <ChildComponent count={value} parentFunction={recieveDataFromChild}/>
    </div>
  )
}

export default FunctionalComponent