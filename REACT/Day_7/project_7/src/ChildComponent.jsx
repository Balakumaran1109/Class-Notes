import React from 'react'
import GrandChild from './GrandChild'

function ChildComponent(props) {
    const sendDataToParent = ()=>{
        props.parentFunction("Hii from child")
    }
  return (
    <div>
        <div>From child {props.count}</div>
        <GrandChild ChildValue = {props.count}/>
        <button onClick={sendDataToParent}>Click for parent data</button>
    </div>
  )
}

export default ChildComponent