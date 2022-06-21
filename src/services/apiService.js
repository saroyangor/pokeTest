import axios from "axios"
import API_ROUTES from "./../config/apiRoutes"

async function getList(url, query = {}) {
    const res = await axios.get(
        url + `?limit=${query.limit}&offset=${query.offset}`
    )
    return res.data
}

const pokeSearch = async (pokemon) => {
    try {
        const response = await axios.get(`${API_ROUTES.pokemonList}/${pokemon}`)
        return response.data
    } catch (error) {}
}

export { getList, pokeSearch }
