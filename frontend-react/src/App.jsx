import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Register from './components/Register'
import SignIn from './components/SignIn'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/signin' element={<SignIn/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
   
    
      
    </>
  )
}

export default App
