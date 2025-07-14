import {useContext} from 'react'
import {AuthContext} from './components/AuthProvider'
import {Navigate} from 'react-router-dom'

const PublicRoute = ({children}) => {
    const { isloggedIn } = useContext(AuthContext)
    return !isloggedIn ?  (
        children
    ) : (
        <Navigate to = '/dashboard'/>
    )
 
}

export default PublicRoute