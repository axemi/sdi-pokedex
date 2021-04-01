import { Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import PokemonList from './components/pokemonList';
import About from './components/About';
import PokemonInfoPage from "./components/pokemonInfoPage"
//import PokemonInfoPage from './components/pokemonInfoPage';


/*
Routes: 
  - Home page - the "pokedex" page; dropdown box to filter by type
  - Individual Pokemon's additional information page; panel feature; "environment" link/button; use of relative path routing feature
  - 'About" page - lorem ipsum text on the development team
*/
/*
right now -
  name: bulbasaur
  url: bulbasaur info url

  foreach pokemon => pokemon.other.dream_world.picture.svg
*/
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={PokemonList}/>
        <Route exact path ="/pokemon/:id" component={PokemonInfoPage}/>
        <Route exact path="/About" component={About}/>
      </Switch>
    </div>
  );
}

export default App;


/*
https://pokeapi.co/api/v2/pokemon?limit=151

https://pokeapi.co/api/v2/pokemon/9/
https://pokeapi.co/api/v2/location/9/
https://pokeapi.co/api/v2/pokemon-habitat/9/
*/