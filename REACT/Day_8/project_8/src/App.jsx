import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AnimalProvider } from './AnimalContext'
import AnimalSound from './AnimalSound'

function App() {

  return (
    <>
      <AnimalProvider>
        <AnimalSound></AnimalSound>
      </AnimalProvider>
    </>
  )
}

export default App
