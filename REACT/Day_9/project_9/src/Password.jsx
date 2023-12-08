import React from 'react'
import { useState } from 'react'

function Password() {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("")

    const handleNewPassword = (event)=>{
        setNewPassword(event.target.value)
    }

    const handleConfirmPassword = (event)=>{
        setconfirmPassword(event.target.value)
    }

    const handleCheckPassword = ()=>{
        if(newPassword === confirmPassword){
            setCheckPassword("Password Match")
        }
        else{
            setCheckPassword("Password does not match")
        }
    }
  return (
    <div>
        <input type='text' value={newPassword} onChange={handleNewPassword}></input>
        <input type='text' value={confirmPassword} onChange={handleConfirmPassword}></input>
        <h5>{checkPassword}</h5>
        <button onClick={handleCheckPassword}>Confirm</button>
    </div>
  )
}

export default Password