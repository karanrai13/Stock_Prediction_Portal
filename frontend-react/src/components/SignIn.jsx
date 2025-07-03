// src/components/SignIn.jsx
import { useState, useContext } from "react"
import { Button } from "./../components/UI/button"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from "@fortawesome/free-solid-svg-icons"
import axios from './../api/axiosConfig'
import {AuthContext} from './../components/AuthProvider'


export default function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const [error, setError] = useState("")
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (!formData.username || !formData.password) {
      setError("Username and password are required.")
      return
    }

    // Add login logic here
  try {
    
  const response = await axios.post('/token/', {
    username: formData.username,
    password: formData.password,
  })
  // Save token, redirect, etc.

localStorage.setItem('accessToken',response.data.access)
localStorage.setItem('refreshToken',response.data.refresh)
setIsLoggedIn(true)


  console.log("✅ Login success:", response.data)
  navigate('/')
} catch (err) {
  const responseErrors = err.response?.data

  if (responseErrors && typeof responseErrors === "object") {
    const messages = Object.entries(responseErrors)
      .map(([field, errors]) => `${field}: ${Array.isArray(errors) ? errors.join(" ") : errors}`)
      .join(" | ")

    setError(messages)
  } else {
    setError("Login failed. Please try again.")
  }

  console.error("❌ Login error:", err.response?.data)
}finally{
    setLoading(false)
}



  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 w-full max-w-md p-8 rounded-lg shadow-lg border border-gray-700"
      >
        <h2 className="text-2xl font-bold mb-6 text-blue-400 text-center">Sign In to StockVision</h2>

        <div className="mb-4">
          <label className="block text-sm mb-1">Username</label>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

         {
                    loading ? (
        
                        <Button  className="w-full"><FontAwesomeIcon icon={faSpinner} spin /></Button>
                        
                    ) : (
        
                        <Button type="submit" className="w-full">Sign In</Button>
                    )
                }

        

        <div className="mt-6 text-center text-sm text-gray-400">
          New to StockVision?{" "}
          <Link to="/register" className="text-blue-400 hover:underline">
            Create an account
          </Link>
        </div>
      </form>
    </div>
  )
}
