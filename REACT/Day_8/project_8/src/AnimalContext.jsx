import React, { createContext, useState } from 'react'

const AnimalContext = createContext()

function AnimalProvider({children}) {
    const [name, setName] = useState("Dog")
    const [sound, setSound] = useState("lol")
  return (
    <AnimalContext.Provider value={{name, setName, sound, setSound}}>{children}</AnimalContext.Provider>
  )
}

export {AnimalContext, AnimalProvider} 