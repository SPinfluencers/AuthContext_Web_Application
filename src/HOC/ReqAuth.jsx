import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const ReqAuth = ({children}) => {
const state  = useContext(AuthContext)
console.log(state.state.token)

if( state.state.token ) {
    return children 
}
else {
    return <Navigate to='/login' />
}


}

export default ReqAuth