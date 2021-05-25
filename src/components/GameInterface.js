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
      let randomNum = 1 + Math.floor(Math.random() * 5);

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

  const setPokemonCards = async () => {
    const threeRandomPokemon = await getThreeRandomPokemon();
    setCurrentPokemon(threeRandomPokemon);
  };

  useEffect(() => {
    setPokemonCards();
  }, [listOfClickedPokemon]);

  return currentPokemon.length === 0 ? (
    "Loading..."
  ) : (
    <div>
      <Scoreboard
        currentScore={currentScore}
        setCurrentScore={setCurrentScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
      <div className="game-container">
        {currentPokemon.map((pokemon) => (
          <PokemonCard
            pokemon={pokemon}
            setListOfClickedPokemon={setListOfClickedPokemon}
            listOfClickedPokemon={listOfClickedPokemon}
            setCurrentScore={setCurrentScore}
            currentScore={currentScore}
            setBestScore={setBestScore}
            bestScore={bestScore}
          />
        ))}
      </div>
    </div>
  );
};

export default GameInterface;
