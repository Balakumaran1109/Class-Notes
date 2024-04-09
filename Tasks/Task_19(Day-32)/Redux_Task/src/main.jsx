import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import qtyStore from '../Store.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <Provider store={qtyStore}>
    <App/>
  </Provider>
)
