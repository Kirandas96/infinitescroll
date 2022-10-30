import React from 'react'
import { Route, Routes } from 'react-router'
import { ReqAuth } from '../components/ReqAuth'
import { Home } from '../pages/Home'
import { Login } from '../pages/Login'

export const MainRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<ReqAuth><Home/></ReqAuth>}/>
            <Route path='/' element={<ReqAuth><null/></ReqAuth>}/>
        </Routes>
    </div>
  )
}
