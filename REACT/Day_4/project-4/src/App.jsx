import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './Index'

function App() {
  const [count, setCount] = useState(0);

  const handleClick = ()=>{
    setCount(count + 1);
  }

  return (
    <>
    <div>App component</div>
    <div>{count}</div>
    <button onClick={handleClick}>click</button>
    <div>
    {count < 5 ? <Index/> : <div>Component removed</div>}
    </div>
    </>
  )
}

export default App
