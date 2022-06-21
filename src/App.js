import { useState, useCallback } from "react"
import { Container } from "@mui/material"
import debounce from "./utils/debounce"
import { pokeSearch } from "./services/apiService"

import PokemonList from "./components/PokemonList/PokemonList"
import Search from "./components/Search/Search"
import PokemonItem from "./components/PokemonItem/PokemonItem"

function App() {
    const [searchResult, setSarchResult] = useState("")
    // eslint-disable-next-line
    const searchPokemon = useCallback(
        debounce(async (name) => {
            const searchR = await pokeSearch(name)
            setSarchResult(searchR)
            console.log(searchR)
        }, 300),
        []
    )

    return (
        <Container>
            <Search searchPokemon={searchPokemon} />
            {searchResult && (
                <PokemonItem
                    name={searchResult.name}
                    image={searchResult.sprites.front_default}
                    hp={searchResult.stats[0].base_stat}
                    attack={searchResult.stats[1].base_stat}
                    defense={searchResult.stats[2].base_stat}
                />
            )}
            <PokemonList />
        </Container>
    )
}

export default App
