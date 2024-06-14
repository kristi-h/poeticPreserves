// import { fetchPoems } from "../library/firebase"
import {
    collection,
    getDocs 
} from 'firebase/firestore'
import { db } from '../firebase.config'

export default function GetPoems({poem}){

    async function fetchPoems() {
        const allPoems = await getDocs(collection(db, 'poems'))
      
        allPoems.forEach((doc) => {
          console.log(doc.id, doc.data())
        })
      }

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
                {fetchPoems()}
                {/* <button id="fetch-poems" onClick={fetchPoems}>See my poems</button> */}
            </div>

            <div id="poems" className="poems-section">
                <div className="poem">
                    <div className="poem-header">
                        <h3 className="poem-title">{poem}</h3>
                        <h3 className="poem-author">{poem}</h3>
                    </div>
                    <p className="poem.entry">
                        {poem.entry}
                    </p>
                    <h5>{displayDate(this.poem.date_added)}</h5>
                </div>
            </div>
        </>
    )
}