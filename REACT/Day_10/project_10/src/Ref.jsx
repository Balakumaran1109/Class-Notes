import React, { useState } from 'react'
import { useRef } from 'react'

function Ref() {

    const [count, setCount] = useState(0)

    const countRef = useRef(0)
    const textRef = useRef(null)

    const handleCount = ()=>{
        setCount(count + 1);
        countRef.current++;

        textRef.current = textRef.current.value;

        console.log("useState", count)
        console.log("useRef", countRef.current)
        console.log("useRef", textRef.current)
    }
  return (
    <div>
        <button onClick={handleCount}>Click</button>
        <input type='text' ref={textRef}></input>
    </div>
  )
}

export default Ref