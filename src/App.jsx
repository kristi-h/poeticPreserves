import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import PrivateRoutes from './components/PrivateRoutes'
import Register from './components/Register'
import Header from './components/Header'
import {  loginAccount, addPoem } from './lib/firebase'
import AddEntry from './components/AddEntry'
import { useUser } from './hooks/useUser'

function App() {
  const { user } = useUser()
  const navigate = useNavigate()
  if(user) {
    navigate('create-poem', { replace: true })
  }
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home loginAcct={loginAccount} savePoem={addPoem}/>}/>
        <Route path='/register' element={<Register />} />
        <Route element={<PrivateRoutes/>}>
          <Route path='/create-poem' element={<AddEntry />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
