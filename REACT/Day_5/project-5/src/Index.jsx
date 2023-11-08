import React, { useEffect, useState } from 'react'

function Index() {
    const [count,setCount] = useState(0);

    useEffect(()=>{
        console.log("Component Mounted");
        return () => console.log("Component UnMounted");
    },[])

    useEffect(()=>{
        console.log("Component Updated")
        return ()=>{
            console.log("Old component data cleared")
        }
    })
  return (
    <>
    
    </>
  )
}

export default Index