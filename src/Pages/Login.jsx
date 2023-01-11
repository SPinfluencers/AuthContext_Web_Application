import React, { useContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'

const Login = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const state  = useContext(AuthContext)
const navigate = useNavigate()
console.log(state.state.token)

useEffect(() => {
  if(state.state.token) {
    navigate('/')
  }
}, [state.state.token])

    const handleSubmit = (e) => {
      e.preventDefault()
      state.login({email , password})
      
    }

  return (
    <div>
        <form onClick={handleSubmit}>
            <input type="text" placeholder='email' value={email} onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
            <input type="submit" />
        </form>
    </div>
  )
}

export default Login