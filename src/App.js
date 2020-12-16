import React, {useState} from 'react';
import './App.css';
import axios from 'axios';
import './App.css';

function App() {
    const [pokemonData, setPokemonData] = useState(null);
    async function fetchData() {
        try {
            const result = await axios.get(
                'https://pokeapi.co/api/v2/pokemon/jigglypuff');
            console.log(result.data);
            setPokemonData(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    return (

            <div className="pokémonCard-container">
                <h1> Pokémon </h1>

                <div>
                    <button
                        type="button"
                        onClick={fetchData}
                    >
                        find Pokémon!
                    </button>
                </div>


                <div className="card-header">
                    {pokemonData &&

                    <h2>{pokemonData.name}</h2>}



                    return ()

                        <div className="pokemon" key={index}>
                    <h3>Pokemon {index +1}</h3>
                        <h2> {pokemonData.name}</h2>

                        <div className="pokémon-details">
                    <p>{abilities}</p>
                        <p>{pokemonData.weight}</p>
                        <p>{pokemonData.move}</p>
                        </div>
                        </div>




                        );
                        }
                        export default App;
