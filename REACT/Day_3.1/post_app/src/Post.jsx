import React, { useState } from 'react'
import Like from './Like'
import Comment from './Comment'

function Post(props) {
  const captionValue = ["Caption or Quotes", "Caption or Quotes"];
  // const flag = props.flag;
  const [flag,setFlag] = useState(true)
  const handleClickAdd = ()=>{
    setFlag(false)
  }
  const handleClickRemove = ()=>{
    setFlag(true)
  }
  return (
    <>
    <div className='border border-dark mt-5 p-3'>
    <h1>Post Component</h1>
    <h1>{props.name}</h1>
    <ul className='m-3'>
        {
        captionValue.map((value)=>(
          <li className='p-2'>{value}</li>
        ))
        }
        {flag ? <button className='mt-3 btn btn-warning' onClick={handleClickAdd}>Add</button> : <button className='mt-3 btn btn-warning' onClick={handleClickRemove}>Remove</button>}
    </ul>
    <Like/>
    <Comment/>
    </div>
    </>
    
  )
}

export default Post