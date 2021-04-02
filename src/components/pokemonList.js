import { useEffect, useState} from 'react';
import styles from "../styles/pokemonList.module.css"

const initialState = {
    pokemonList: []
}

const PokemonList = ({history}) => {
    const [state, setState] = useState(initialState)

    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then(response => response.json())
      .then(pokemons => {
        
        setState({
          ...state,
          pokemonList: pokemons.results
        })
        
      })
    })


    return (
        <div id={styles.pokemonList}>
            {state.pokemonList.map((pokemon, index) => {
                return (
                    <div onClick={() => history.push(`/pokemon/${index+1}`)}>{pokemon.name}</div>
                )
            })}
        </div>
    )
}

export default PokemonList