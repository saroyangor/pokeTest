import React, { useMemo } from "react"
import VARS from "./../../config/vars"

const Pagination = ({ list, setOffset }) => {
    const count = useMemo(() => Math.round(list.count / VARS.pokeLimit), [list])

    const handleButtonClick = (page) => {
        setOffset(page * VARS.pokeLimit)
    }
    return (
        <>
            {!isNaN(count) &&
                Array.from(Array(count).keys()).map((el) => (
                    <button
                        key={el + "_pagination"}
                        onClick={() => handleButtonClick(el)}
                    >
                        {el + 1}
                    </button>
                ))}
        </>
    )
}

export default Pagination
