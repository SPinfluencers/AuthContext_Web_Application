import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'


const Home = () => {
const state  = useContext(AuthContext)

  return (
    <div>
        <h1>Home</h1>
    </div>
  )
}

export default Home