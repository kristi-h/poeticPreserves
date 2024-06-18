import React from 'react'
import './App.css'
import Home from './pages/Home'
import { Route, Routes, useNavigate } from 'react-router-dom'
import PrivateRoutes from './components/PrivateRoutes'
import Register from './components/Register'
import Header from './components/Header'
import {  loginAccount, addPoem } from './library/firebase'
import NewPoem from './pages/NewPoem'
import { useUser } from './hooks/useUser'
import Poems from './pages/Poems'


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
     <Header />
      <Routes>
        <Route path='/' element={<Home loginAcct={loginAccount} savePoem={addPoem}/>}/>
        <Route path='/register' element={<Register />} />
        <Route element={<PrivateRoutes/>}>
          <Route path='/create-poem' element={<NewPoem poem={poem} setPoem={setPoem} />}/>
          <Route path='/get-poems' element={<Poems poem={poem} />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
