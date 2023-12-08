import React from 'react'
import './App.css'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom'

function App() {

  return (
    <>
<Router>
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/About">About</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
    </ul>
  </div>
  <Routes>
    <Route path='/' exact Component={Home}></Route>
    <Route path='/About' Component={About}></Route>
    <Route path='/Contact' Component={Contact}></Route>
  </Routes>
  </Router>      
    </>
  )
}

export default App
