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
import PrivateRoute from '../src/PrivateRoute'
import PublicRoute from '../src/PublicRoute'

function App() {
 

  return (
    <>
    <AuthProvider>    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<PublicRoute><Register/></PublicRoute>}/>
      <Route path='/signin' element={<PublicRoute><SignIn/></PublicRoute>}/>
      <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </AuthProvider>

   
    
      
    </>
  )
}

export default App
