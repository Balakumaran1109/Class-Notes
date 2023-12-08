import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Axios() {
    const[data, setData] = useState("")

    const url = "http://localhost:4000/user"

    useEffect(()=>{ 
        axios.get(url)
        .then(function(response){
            setData(response.data[0].name)
            console.log(response.data[0].name)
        })
        .catch(function(err){
            console.log(err)
        })
        .finally(function(){

        })
    },[])
  return (
    <div>{data}</div>
  )
}

export default Axios