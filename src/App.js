import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import PokemonCard from "./components/pokemonCard";
import 'tachyons';

function App() {
const[pokemons, setPokemons] = useState(null);
const [status, setStatus] = useState("loading");
const [pagina, setPagina] = useState(0);


useEffect(() => {
    async function getPokemons() {
        try{
          const response = await axios.get(
              `https://pokeapi.co/api/v2/pokemon/?offset=${pagina}&limit=20`
          );
          setPokemons(response.data.results);
          setStatus("done loading");

        } catch (error) {
            setStatus("error");

        }
    }


    getPokemons();
   // dependency array
}, [pagina])


    if (status === "loading") {
        return <h1>Loading</h1>;
    } else if (status === "error") {
    return alert("pokemon has fled");
    } else {
        return (
        <>
            <button
                className="navigation"
                disabled={pagina === 0} onClick={() => setPagina(pagina -20)}>
                vorige
            </button>

            <button
                className="navigation"
                disabled={pagina === 1100} onClick={() => setPagina(pagina +20)}>
                volgende
            </button>
            {pokemons &&
            pokemons.map((pokemon) => {
                return <PokemonCard key={pokemon.name} name={pokemon.name} />;
            })}
        </>
        );

}}
export default App;
