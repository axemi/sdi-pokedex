import { useEffect, useState} from 'react';

const initialState = {
    pokemonList: []
}


const PokemonList = ({history}) => {
    const [state, setState] = useState(initialState)

    useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151") //yeah id will be useful for getting the individual pokemon, however that photo piece for the list is bothering me. are there any other parameters we can give to get all the photos?
      .then(response => response.json())
      .then(pokemons => {
        setState({
          ...state,
          pokemonList: pokemons.results
        })
      })
    })


    return (
        <div id="pokemon-list">
            {state.pokemonList.map((pokemon, index) => {
                return (
                    <button onClick={() => history.push(`/pokemon/${index+1}`)}>{pokemon.name}</button>
                )
            })}
        </div>
    )
}

export default PokemonList