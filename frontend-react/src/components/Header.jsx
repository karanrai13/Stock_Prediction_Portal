// src/components/Header.jsx
import { Button } from "./../components/UI/button"
import { Menu } from "lucide-react"
import {Link,useNavigate} from 'react-router-dom'
import  {AuthContext} from './../components/AuthProvider'
import { useContext } from "react"

export default function Header() {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () =>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    navigate('/signin')

  }
  return (
    <header className="bg-gray-900 text-white border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-400"><Link to ='/'>StockVision</Link></div>
        <nav className="hidden md:flex space-x-6 text-sm">
          <Link to='/' className="hover:text-blue-400 transition">Home</Link>
          <a href="#" className="hover:text-blue-400 transition">Predictions</a>
          <a href="#" className="hover:text-blue-400 transition">About</a>
          <a href="#" className="hover:text-blue-400 transition">Contact</a>
        </nav>
        <div className="flex items-center space-x-2">
          {isLoggedIn ? (
            <Button  onClick={handleLogout} variant="outline" size="sm">Logout</Button>) : (

            <Button variant="outline" size="sm"><Link to='/signin'>Sign In</Link></Button>
          )}
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  )
}
