import React, {useState, useEffect} from 'react';
// import './App.css';
import axios from 'axios';
import 'tachyons';


export default function PokemonCard(props) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(
                    `https://pokeapi.co/api/v2/pokemon/${props.name}`
                );
                console.log(result.data);
                setPokemonData(result.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchData();
    },[props.name]);


    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 fl w-20 h-100 shadow-5 pokemon-Card-Container'>
            <div className="pokemon-card">
                {/*<h1>Pokémon</h1>*/}
                <p>{pokemonData?.name}</p>
                <img src={pokemonData?.sprites.front_default} alt={pokemonData?.name} />
                <p>moves: {pokemonData?.moves.length+1}</p>
                <p>weight: {pokemonData?.weight} kg</p>
                <div id="abilities">Abilities:
                    <ul>{pokemonData?.abilities.map((prop)=> {return<li key={prop.slot}>{prop.ability.name}</li>})}</ul>
                </div>
            </div>
        </div>
    )
}

