import React, {useEffect, useState} from "react"


const initialState = {
    pokemon: {
        name: "",
        abilities: [],
        photo: "",
        locationURL: []
    }
}
const PokemonInfoPage = (props) => {
    const [state, setState] = useState(initialState)
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${props.match.params.id}/`)
        .then(response => response.json())
        .then(pokemon => {
            setState({
                //needed pokemon object
                pokemon: {
                    name: pokemon.name,
                    abilities: pokemon.abilities,
                    photo: pokemon.sprites.other.dream_world.front_default,
                    locationURL: pokemon.location_area_encounters
                }
            })
        })
    })

    return (
        <div id="pokemon-info">
            <h1>{state.pokemon.name}</h1>
            <img src={state.pokemon.photo} alt="a pokemon"/>
            <ul>
                {state.pokemon.abilities.forEach(ability => {
                    return (
                        <li>{ability.name}</li>
                    )
                })}
            </ul>
        </div>
    )
}


/*
Solid start on:
As a user, when I am viewing an individual pokemon, I should be presented with a panel that defaults to showing me their abilities, so that I can see their abilities.
As a user, I should be able to click an “environment” link/button from inside the individual pokemon page that changes the panel from abilities to information about that pokemon’s environment.
*/
export default PokemonInfoPage