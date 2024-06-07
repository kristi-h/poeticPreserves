import React from 'react'
import AddEntry from '../components/AddEntry'
import Login from '../components/Login'

export default function Home({poem, user, createAcct, loginAcct, savePoem }){

  const onChangeHandler = (e) => {
    setPoem({
        ...poem,
        [e.target.name]: e.target.value 
    })
    console.log('poem', poem)
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          await savePoem(poem)
          //clear the form
          e.target.reset() 
        } catch(e) {
          console.log(e)
        }
    } 

    return(
        <div>
            <Login 
             user= {user}
             createClicked={createAcct}
             loginClicked={loginAcct}
            />
            <AddEntry 
                clickSubmit = {handleSubmit}
                onChangeHandler = {onChangeHandler}
                poem= {poem}
                user= {user}
            />
        </div>
        
    )
}
