import React from 'react'
import {useParams} from 'react-router-dom'

function City() {
    const {name} = useParams();
    const place = {
        airport: "Welcome to the Airport",
        mall : "Welcome to Forum Mall",
        beach : "Welcome to Marina Beach"
    };
     const info = place[name]
  return (
    <div>{info}</div>
  )
}

export default City