// src/components/SignIn.jsx
import { useState } from "react"
import { Button } from "./../components/UI/button"
import { Link } from "react-router-dom"

export default function SignIn() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.username || !formData.password) {
      setError("Username and password are required.")
      return
    }

    // Add login logic here
    console.log("Logging in with:", formData)
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

        <Button type="submit" className="w-full">Sign In</Button>

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
