import axios from 'axios'
import React, { useState } from 'react'

export const AuthContext = React.createContext()

export const AuthProvider = ({ children }) => {
    const [state, setState] = useState({token: "" , isAuth: false})

    const login = (payload) => {
        console.log(payload)
        axios.post('https://reqres.in/api/login', payload)
        .then((res) => {
            setState({...state , token: res.data.token })
        })
        return (
             "token" 
        )
    }

   return (
    <AuthContext.Provider value={{ state, login }}>
        {children}
    </AuthContext.Provider>
   )
}