import React from 'react'
import TextField from "@mui/material/TextField";
import "../App.css";

export default function SearchBar() {
    const [search, setSearch] = React.useState()

    let searchHandler = (e) => {
        var lowerCase = e.target.value.toLowerCase();
        setSearch(lowerCase);
    
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
                value={search}
                placeholder='Hemingway'
                />
            </div>
                {/* <GetPoems input={search} /> */}
        </div>
    )
}
}