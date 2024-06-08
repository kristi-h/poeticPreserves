import React from 'react'
import './App.css'
import Home from './pages/Home'
// import Firebase from '../Firebase'
import { createAccount, loginAccount, addPoem } from './lib/firebase'

function App() {
  const [users, setUsers] = React.useState([])

  const [user, setUser] = React.useState({
    id: 0,
    email: "",
    password: "",
    isLoggedIn: false,
    poems: []
  })

  const [poem, setPoem] = React.useState({
      id: 0,
      title: "",
      author: "",
      date_added: Date.now(),
      entry: "",
      genre: "", 
      language: ""
  })

  return (
    <>
     <Home 
     poem={poem}
     user={user}
     createAcct={createAccount}
     loginAcct={loginAccount}
     savePoem={addPoemToDB}
     />
    </>
  )
}

export default App
