import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useDispatch } from 'react-redux'
import { getLogout } from '../redux/Auth/action'

export const Navbar = () => {
    const dispatch=useDispatch()
  const data=useSelector((state)=>state.loginSucc)
  
const handleLogout=()=>{
    dispatch(getLogout())
}
  return (
    <div className='nav'>
       {data?<Link to="/login" onClick={()=>handleLogout()}>LOGOUT</Link>:
       <Link to="/login">LOGIN</Link>}
    </div>
  )
}
