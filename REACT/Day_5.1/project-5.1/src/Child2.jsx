import React from 'react'

function Child2(props) {
    const data = "Data from child component";
    const passData = ()=>{
        props.passFunction(data);
    }
  return (
    <div>
    <div>Child2</div>
    <button onClick={passData}>Click</button>
    </div>
  )
}

export default Child2