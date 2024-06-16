import React from 'react'
import TextField from "@mui/material/TextField";
import GetPoems from "./GetPoems"
import "../App.css";

export default function SearchBar() {
    const [search, setSearch] = React.useState()

    let searchHandler = (e) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setsearch(lowerCase);

    function searchBy() {
        if (search === poem.author || poem.title) {
            setPoem(poem[search] = True)
        }
    }
    
    return (
        <div className="search-bar">
            <h1>Poem Search</h1>
            <div className="search">
                <TextField
                id="outlined-basic"
                onChange={searchHandler}
                variant="outlined"
                fullWidth
                label="Search"
                />
            </div>
                <GetPoems input={search} />
        </div>
    )
}