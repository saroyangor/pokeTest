import React, { useEffect, useState } from "react"
import API_ROUTES from "../../config/apiRoutes"
import VARS from "../../config/vars"
import { getList } from "../../services/apiService"
import Pagination from "../Pagination/Pagination"

const PokemonList = () => {
    const [pokemons, setPokemons] = useState([])
    const [off, setOff] = useState(0)

    useEffect(() => {
        getList(API_ROUTES.pokemonList, {
            limit: VARS.pokeLimit,
            offset: off,
        }).then((r) => {
            setPokemons(r)
        })
    }, [off, setPokemons])

    return (
        <>
            <div className="pokedex">
                {!pokemons?.results?.length ? (
                    <h2>Loading...</h2>
                ) : (
                    pokemons.results.map((el) => (
                        <div key={el.name}>{el.name}</div>
                    ))
                )}
            </div>
            <Pagination list={pokemons} setOffset={setOff} />
        </>
    )
}

export default PokemonList
