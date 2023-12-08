import React, { createContext, useState } from 'react'


const NameContext = createContext()

function Context({children}) {
    const [name, setName] = useState("guvi")
  return (
    <NameContext.Provider value={{name, setName}}>{children}</NameContext.Provider>
  )
}

export {Context, NameContext}   