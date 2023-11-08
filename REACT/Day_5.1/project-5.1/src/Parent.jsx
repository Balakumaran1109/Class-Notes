import React from 'react'
import Child from './Child'

function Parent() {
    const names = ["Bala", "Kumaran", "Rahul"]
  return (
    
    <div>
        <h1>Parent Component</h1>
        <Child names={names}></Child>
    </div>
   
  )
}

export default Parent