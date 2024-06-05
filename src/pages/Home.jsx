import React from 'react'
import AddEntry from '../components/AddEntry'

export default function Home(){
    const [poem, setPoem] = React.useState({
        id: 0,
        title: "maya",
        author: "",
        date_added: Date.now(),
        entry: "",
        genre: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`You've successfully saved your poem ${poem.title}`)
      }
  
    const onChangeHandler = (e) => {
        console.log('e.target', e.target)
        setPoem({
            ...poem,
            [e.target.name]: e.target.value 
        })
        console.log('poem', poem)
    }

    return(
        <div>
            <AddEntry 
                clickSubmit = {handleSubmit}
                onChangeHandler = {onChangeHandler}
                poem = {poem}
            />
        </div>
        
    )
}