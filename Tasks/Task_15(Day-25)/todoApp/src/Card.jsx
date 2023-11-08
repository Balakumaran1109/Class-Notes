import React from 'react'
import CardDropdown from './CardDropdown'


function Card(props) {
  const handleEdit = ()=>{
    props.passFunction1(props.Name, props.keys)
    props.passFunction(props.Description, props.keys)
  }  

  const handleDelete = ()=>{
    props.passDeleteFunction(props.keys)
  }
  return (
    
    <>
    
    <div className="col-4" id='column'>
    <div class="card text-dark bg-light mb-3">
    <div class="card-body">
    <h6 class="card-text">Name : {props.Name}</h6><br></br>
    <p class="card-text">Description : {props.Description}</p><br></br>
    <div>Status: {todo.status}</div>
                <select className='bg bg-primary'
                  value={todo.status}
                  onChange={(e) => handleStatusChange(index, e.target.value)}
                >
                  <option className="option" value="completed">Completed</option>
                  <option className="option" value="notcompleted">Not Completed</option>
                </select>    <div className='text-center'>
    <button className='btn btn-primary m-2' onClick={handleEdit}>Edit</button>
    <button className='btn btn-danger m-2' onClick={handleDelete}>Delete</button>
    </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Card