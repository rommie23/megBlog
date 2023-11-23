import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'


function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='inline-block py-2 duration-200 hover:bg-blue-400 rounded-full px-2 sm:px-6'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn
