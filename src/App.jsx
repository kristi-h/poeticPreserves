import React from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'
import Register from './components/Register'
import NavBar from './components/NavBar'
import {  loginAccount, addPoem } from './library/firebase'
import AddEntry from './components/AddEntry'
import { useUser } from './hooks/useUser'

function App() {
  
  const { user } = useUser()
  const navigate = useNavigate()
  React.useEffect(() => {
    if(user) {
      navigate('create-poem', { replace: true })
    }
  },[])

  return (
    <>
     <NavBar />
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
