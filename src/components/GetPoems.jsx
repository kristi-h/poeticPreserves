import { fetchPoems } from "../library/firebase"

export default function GetPoems({poem}){
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
                <button id="fetch-poems" onClick={fetchPoems}>See my poems</button>
            </div>

            <div id="poems" className="poems-section">
                <div className="poem">
                    <div className="poem-header">
                        <h3 className="poem-title">{poem.title}</h3>
                        <h3 className="poem-author">{poem.author}</h3>
                    </div>
                    <p className="poem.entry">
                        {poem.entry}
                    </p>
                    <h5>{displayDate(poem.date_added)}</h5>
                </div>
            </div>
        </>
    )
}