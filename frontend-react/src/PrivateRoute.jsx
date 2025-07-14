import {useContext} from 'react'
import {AuthContext} from './components/AuthProvider'
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const { isloggedIn } = useContext(AuthContext)
    return isloggedIn ?  (
        children
    ) : (
        <Navigate to = '/signin'/>
    )
 
}

export default PrivateRoute