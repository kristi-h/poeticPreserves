import React from 'react'
import {
    collection,
    getDocs 
} from 'firebase/firestore'
import { db } from '../firebase.config'

export default function GetPoems(){

    React.useEffect(()=> {
        async function fetchPoems() {
            const allPoems = await getDocs(collection(db, 'poems'))
            
            const timeElapsed = allPoems.map(p=> {
                (Date.now() - p.date_added)
            })
            const sorted = timeElapsed.sort(function(a,b){
                return a-b
            })
            const mostRecent = sorted.substring(0, 4)
            
            mostRecent.forEach((p) => {
              setPoem({
                ...poem,
                title: p.title,
                author: p.author,
                date_added: p.date_added,
                entry: p.entry
              })
            })
          }

        fetchPoems()
        
    }, [user])

    function displayDate(savedDate) {
        const date = savedDate.toDate()
        
        const day = date.getDate()
        const year = date.getFullYear()
        
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        const month = monthNames[date.getMonth()]
    
        let hours = date.getHours()
        let minutes = date.getMinutes()
        hours = hours < 10 ? "0" + hours : hours
        minutes = minutes < 10 ? "0" + minutes : minutes
    
        return `${day} ${month} ${year} - ${hours}:${minutes}`
    }
    
    return (
        <>
            <div>
                {/* <button id="fetch-poems" onClick={fetchPoems}>See my poems</button> */}
            </div>
            {poem? (
                <div id="poems" className="poems-section">
                    <div className="poem">
                        <div className="poem-header">
                            <h3 className="poem-title">{poem.title}</h3>
                            <h3 className="poem-author">{poem.author}</h3>
                        </div>
                        <p className="poem.entry">
                            {poem.entry}
                        </p>
                        <h5>{displayDate(this.poem.date_added)}</h5>
                    </div>
                </div>
            ): <h2>Loading...</h2>}
            
        </>
    )
}