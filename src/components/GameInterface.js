import PokemonCard from "./PokemonCard";
import Scoreboard from "./Scoreboard";

import React, { useState, useEffect } from "react";
import axios from "../api/axios";

const GameInterface = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [listOfClickedPokemon, setListOfClickedPokemon] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState([]);

  const getThreeRandomPokemon = async () => {
    let setOfThreeNums = new Set();
    let nextThreePokemon = [];

    while (setOfThreeNums.size < 3) {
      let randomNum = 1 + Math.floor(Math.random() * 100);

      if (setOfThreeNums.has(randomNum)) {
        continue;
      }

      const { data } = await axios.get(`${randomNum}`);

      nextThreePokemon.push({
        name: data.name,
        spriteURL: data.sprites.front_default,
      });

      setOfThreeNums.add(randomNum);
    }

    return nextThreePokemon;
  };

  const renderPokemonInitially = async () => {
    const threeRandomPokemon = await getThreeRandomPokemon();
    setCurrentPokemon(threeRandomPokemon);
  };

  useEffect(() => {
    renderPokemonInitially();
  }, []);

  return currentPokemon.map((pokemon) => (
    <div key={pokemon.name}>{pokemon.name}</div>
  ));
};

export default GameInterface;
