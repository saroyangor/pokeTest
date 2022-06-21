import React, { useState } from "react"
import { TextField } from "@mui/material"

const Search = ({ searchPokemon }) => {
    const [value, setValue] = useState("")

    const handleInputChange = (event) => {
        setValue(event.target.value)
        searchPokemon(event.target.value ? event.target.value : null)
    }

    return (
        <TextField
            variant="standard"
            label="Search..."
            value={value}
            onChange={handleInputChange}
        />
    )
}

export default Search
