
// import { useState,useEffect} from 'react'
// import {useDispatch} from 'react-redux'
// import './App.css'
// import authService from './appwrite/auth';
// import { login,logOut } from './store/authSlice';
// import  {Header}  from './components';
// import {Foter} from './components';
// import { Outlet } from 'react-router-dom';



import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logOut} from "./store/authSlice"
import { Foter, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logOut())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Foter />
      </div>
    </div>
  ) : null
}

export default App

