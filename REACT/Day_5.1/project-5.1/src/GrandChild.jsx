import React from 'react'

function GrandChild(props) {
  return (
    <div>
    <h5>Grand Child Component</h5>
    <h6>{props.names.join(", ")}</h6>
    </div>
  )
}

export default GrandChild