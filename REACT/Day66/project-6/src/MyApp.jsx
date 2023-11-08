import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import City from './City'

function MyApp() {
  return (
    <div>
        <Router>
            <div>
                <ul>
                    <li><Link to="/city/airport">Airport</Link></li>
                    <li><Link to="/city/mall">Mall</Link></li>
                    <li><Link to="/city/beach">Beach</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path='/city/:name' Component={City}></Route>
                <Route path='/city/:name' Component={City}></Route>
                <Route path='/city/:name' Component={City}></Route>
            </Routes>
        </Router>
    </div>
  )
}

export default MyApp