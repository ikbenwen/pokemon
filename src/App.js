import React, {useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import PokemonCard from "./components/pokemonCard";
import 'tachyons';

function App() {

    return (
        <>
        <PokemonCard name="pikachu"/>
        <PokemonCard name="jigglypuff"/>
        </>
        )

}
export default App;
