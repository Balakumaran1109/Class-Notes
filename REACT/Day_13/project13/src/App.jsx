import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext } from 'react'
import { NameContext } from './Context'

function App() {

  const {name, setName} = useContext(NameContext)

  return (
    <>
      {name}
    </>
  )
}

export default App
