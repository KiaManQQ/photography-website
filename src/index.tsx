import React from 'react'
import ReactDOM from 'react-dom/client'
import './base/_base.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//Routes
import Home from './routes/Home/Home'
import Contact from './routes/Contact/Contact'
import About from './routes/About/About'
import NotFound from './routes/Error/Error'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

