import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment, reset } from './CounterSlice';
import './App.css'


function App() {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter)

  return (    
    <>
      <div>
        <p>Count : {count.count}</p>
        <button onClick={()=> dispatch(increment())}>Increment</button>
        <button onClick={()=> dispatch(decrement())}>Decrement</button>
        <button onClick={()=> dispatch(reset())}>Reset</button>
      </div>
    </>
  )
}

export default App
