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
import GetPoems from './components/GetPoems'

function App() {
  
  const [poem, setPoem] = React.useState({
    title: "",
    author: "",
    date_added: Date.now(),
    entry: "",
    genre: "", 
    language: "",
    keyword: ""
  })
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
          <Route path='/create-poem' element={<AddEntry poem={poem} setPoem={setPoem} />}/>
          <Route path='/get-poem' element={<GetPoems poem={poem} />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
