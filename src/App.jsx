import React from 'react'
import './App.css'
import Home from './pages/Home'
import Firebase from '../Firebase'

function App() {
  

  const [user, setUser] = React.useState({
    id: 0,
    name: "",
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

  const [allPoems, setAllPoems] = React.useState({

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
