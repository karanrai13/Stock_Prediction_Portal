import {useState,createContext,useContext} from 'react'

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('accessToken')
    )
  return (
    <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn}} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider