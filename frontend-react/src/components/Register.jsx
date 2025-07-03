// src/components/Register.jsx
import { useState } from "react"
import { Button } from "./../components/UI/button"
import axios from './../api/axiosConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [error, setError] = useState("")
   const [success, setSuccess] = useState("")
   const [loading,setLoading] = useState(false)


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError("")
    setSuccess("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    // Perform registration logic here (e.g. API call)
    
    console.log("Form submitted", formData.username)

    try {
       const response=await axios.post("/register/",{
        username:formData.username,
        email: formData.email,
        password:formData.password,
       })
       console.log("✅ Registration success:", response.data)
      setSuccess("Registered successfully! You can now log in.")
    } catch (err) {
  const responseErrors = err.response?.data

  if (responseErrors && typeof responseErrors === "object") {
    // Flatten all error messages into a single string
    const messages = Object.entries(responseErrors)
      .map(([field, errors]) => `${field}: ${errors.join(" ")}`)
      .join(" | ")

    setError(messages) // ✅ Show this in your UI
  } else {
    setError("Something went wrong. Please try again.")
  }

  console.error("❌ Registration error:", err.response?.data)
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
        <h2 className="text-2xl font-bold mb-6 text-blue-400 text-center">Create Your Account</h2>

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
          <label className="block text-sm mb-1">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
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

        <div className="mb-4">
          <label className="block text-sm mb-1">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm mb-4">{success}</p>}

        {
            loading ? (

                <Button  className="w-full"><FontAwesomeIcon icon={faSpinner} spin /></Button>
                
            ) : (

                <Button type="submit" className="w-full">Register</Button>
            )
        }

      </form>
    </div>
  )
}
