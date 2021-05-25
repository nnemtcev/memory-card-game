import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({
  pokemon,
  listOfClickedPokemon,
  setListOfClickedPokemon,
  setCurrentScore,
  currentScore,
  bestScore,
  setBestScore,
}) => {
  const { name, spriteURL } = pokemon;

  const onPokemonCardClick = () => {
    const wasPokemonCardClickedPreviously = listOfClickedPokemon.indexOf(name);

    if (wasPokemonCardClickedPreviously < 0) {
      setListOfClickedPokemon([...listOfClickedPokemon, name]);
      setCurrentScore(currentScore + 1);
      if (currentScore + 1 > bestScore) {
        setBestScore(currentScore + 1);
      }
    } else {
      setListOfClickedPokemon([]);
      setCurrentScore(0);
    }
  };

  return (
    <div onClick={onPokemonCardClick} className="pokemon-card">
      <img width="200" src={`${spriteURL}`} alt={`${name}`} key={`${name}`} />
    </div>
  );
};

export default PokemonCard;
