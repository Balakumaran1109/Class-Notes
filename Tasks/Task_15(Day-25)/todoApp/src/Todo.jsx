import React, { useEffect, useState } from 'react'
import Card from './Card'
import Dropdown from './Dropdown';

function Todo() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState([]);

  const handleClickAdd = (event) => {
    if (name.trim() !== '' && description.trim() !== '') {
      setDetails([...details, { name, description }]);
      setName("")
      setDescription("")
      event.preventDefault()
    }
  }

  const handleClickDelete = (data) => {
    const deleteItem = [...details];
    deleteItem.splice(data, 1);
    setDetails(deleteItem)
  }

  const handleRecieveName = (data, index) => {
    const deleteItem = [...details];
    deleteItem.splice(index, 1);
    setDetails(deleteItem)
    setName(data)
  }

  const handleRecieveDescription = (data, index) => {
    const deleteItem = [...details];
    deleteItem.splice(index, 1);
    setDetails(deleteItem)
    setDescription(data)
  }


  return (
    <>
      <div class="container mt-5 border border-dark p-5 ">
        <div>
          <div className='text-center'><h3>My Todo</h3></div><br></br><br></br>
          <form class="form-inline">
            <div className='col-5 text-center'>
              <input value={name} size="40" type="text" class="form-control mr-sm-2 " id="todoName" placeholder="Todo Name" onChange={(e) => setName(e.target.value)}></input>
            </div>

            <div className='col-5 text-center'>
              <input value={description} size="40" type="text" class="form-control mr-sm-2 " id="todoDescription" placeholder="Todo Description" onChange={(e) => setDescription(e.target.value)}></input>
            </div>
            <div className='col-2 text-center'>
              <button onClick={handleClickAdd} class="btn btn-primary">Add Todo</button>
            </div>
          </form>
        </div><br></br><br></br>
        <div>
          <div className='d-flex'>
            <div class="p-2"><h4>My Todos</h4></div>
            <div class="ml-auto p-2"><h4>Status Filter : </h4><Dropdown option1="All" option2="Completed" option3="Not Completed" /></div>
          </div><br></br>

          <div class="row">

            
            {details.map((value, index) =>
              <Card passDeleteFunction={handleClickDelete} passFunction1={handleRecieveName} passFunction={handleRecieveDescription} keys={index} Name={value.name} Description={value.description} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Todo