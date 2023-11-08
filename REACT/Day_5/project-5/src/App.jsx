import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './Index'

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const apiUrl = "https://restcountries.com/v3.1/all";
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        for (var i = 0; i < data.length; i++) {
          setData(data[i].name.common)
        }
      }
      catch (error) {
        setError(error);
      }
      finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <div>Loading..</div>
  }

  if (error) {
    return <div>{error.message}</div>
  }


  return (
    <>
      <div>Country Names</div>
      <div>{data}</div>

      {/* <div>{count}</div>
    <button onClick={()=>setCount(count + 1)}></button>
    {count < 5 ? <Index/> : <div>Component Removed</div>} */}
    </>
  )
}

export default App
