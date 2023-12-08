import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

function Game() {
    const [count, setCount] = useState(0);
    const countRef = useRef(count)

    countRef.current = count;

    const changeCount = () =>{
        setCount(count + 1)
    }

    const startGame = () =>{
        setCount(0)
        setTimeout(()=>{
            alert(`Time up!! Your count is ${countRef.current}`)
        },5000)
    }
  return (
    <div>
        <div>Click the button for count</div>
        <button onClick={startGame}>Start the game</button>
        <button onClick={changeCount}>Click</button>
    </div>
  )
}

export default Game