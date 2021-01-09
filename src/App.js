import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import PokemonCard from "./components/pokemonCard";
import 'tachyons';

function App() {
const[pokemons, setPokemons] = useState(null);
const [pagina, setPagina] = useState(0);


useEffect(() => {
    async function getPokemons() {
        try{
          const response = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/?offset=${pagina}&limit=20`
          );
          setPokemons(response.data.results);
            // console.log("dit krijgen we uit de response", response.data.results);

        } catch (error) {

            alert("pokemon has fled");
        }

    }
    getPokemons();
   // dependency array
}, [pagina])

    return (
        <>
            {pokemons &&
            pokemons.map((pokemon) => {
                return <PokemonCard key={pokemon.name} name={pokemon.name} />;
            })}

        </>
        );

}
export default App;
