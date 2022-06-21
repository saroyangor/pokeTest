import React from "react"
import { Card, CardMedia, CardContent, Typography } from "@mui/material"

const PokemonItem = ({ name, image, hp, attack, defense }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt="pokemon"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    HP: {hp}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Attack: {attack}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Defense: {defense}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default PokemonItem
