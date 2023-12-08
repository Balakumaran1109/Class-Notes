import React from 'react'
import { useContext } from 'react'
import { AnimalContext } from './AnimalContext'

function AnimalSound() {
    const {name, setName, sound, setSound} = useContext(AnimalContext)

    const changeName = () =>{
        setName("Cat")
        setSound("Meow")
    }

  return (
    <div>
    <div>Animal Name is {name}</div>
    <div>Animal Sound is {sound}</div>
    <button onClick={changeName}>Change</button>
    </div>
  )
}

export default AnimalSound