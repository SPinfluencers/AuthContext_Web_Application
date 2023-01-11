import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReqAuth from '../HOC/ReqAuth'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Users from '../Pages/Users'

const Allroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<ReqAuth> <Home /> </ReqAuth>} />
        <Route path='/login' element={<Login />} />
        <Route path='/users' element={<ReqAuth> <Users /> </ReqAuth>} />
    </Routes>
  )
}

export default Allroutes