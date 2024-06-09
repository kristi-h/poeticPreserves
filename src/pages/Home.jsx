import React from 'react'
import AddEntry from '../components/AddEntry'
import Login from '../components/Login'

export default function Home(){ 

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
