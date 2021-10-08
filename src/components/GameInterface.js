import PokemonCard from "./PokemonCard";
import Scoreboard from "./Scoreboard";
import Loading from "./Loading";

import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import styled from "styled-components";

function GameInterface() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [listOfClickedPokemon, setListOfClickedPokemon] = useState([]);
  const [currentPokemon, setCurrentPokemon] = useState([]);
  const [isLoadingPokemon, setIsLoadingPokemon] = useState(true);
  const [
    wasPokemonChosenSuccessfully,
    setWasPokemonChosenSuccessfully,
  ] = useState(null);

  const getThreeRandomPokemon = async () => {
    let setOfThreeNums = new Set();
    let nextThreePokemon = [];

    while (setOfThreeNums.size < 3) {
      let randomNum = 1 + Math.floor(Math.random() * 50);

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
    setTimeout(() => setIsLoadingPokemon(null), 1000);
  };

  useEffect(() => {
    setPokemonCards();

    document.title = "Pokémemory - How Many Pokémon Can You Remember?";
  }, [listOfClickedPokemon, isLoadingPokemon]);

  return isLoadingPokemon === true ? (
    <Loading width={500} height={500} animationName="loading" />
  ) : wasPokemonChosenSuccessfully === true ? (
    <Loading width={500} height={500} animationName="success" />
  ) : wasPokemonChosenSuccessfully === false ? (
    <Loading width={400} height={400} animationName="failure" />
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
            setWasPokemonChosenSuccessfully={setWasPokemonChosenSuccessfully}
          />
        ))}
      </div>
      <div className="utility-center-div">
        <button onClick={() => setCurrentScore(0)} id="reset-btn">
          Reset Score
        </button>
      </div>
    </div>
  );
}

export default GameInterface;
