import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Post from './Post.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Post name="Post 1" flag={true}/>
    <Post name="Post 2" flag={false}/>
  </React.StrictMode>,
)
