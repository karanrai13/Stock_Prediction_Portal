import {useContext} from 'react'
import {AuthContext} from './components/AuthProvider'
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const { isLoggedIn } = useContext(AuthContext)
    // console.log("PrivateRoute → isLoggedIn:", isLoggedIn)
    return isLoggedIn ?  (
        children
    ) : (
        <>
        
        <Navigate to = '/signin'/>
        </>

    )
 
    

}

export default PrivateRoute