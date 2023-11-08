import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import TodoList from './TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Todo/> */}
      <TodoList/>
    </>
  )
}

export default App
