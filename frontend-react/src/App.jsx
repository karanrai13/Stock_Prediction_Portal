import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import Register from './components/Register'
import SignIn from './components/SignIn'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AuthProvider from './components/AuthProvider'
import Dashboard from './components/dashboard/Dashboard'

function App() {
 

  return (
    <>
    <AuthProvider>    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/signin' element={<SignIn/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </AuthProvider>

   
    
      
    </>
  )
}

export default App
