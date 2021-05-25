import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({
  pokemon,
  listOfClickedPokemon,
  setListOfClickedPokemon,
  setCurrentScore,
}) => {
  const { name, spriteURL } = pokemon;

  const onPokemonCardClick = () => {
    const wasPokemonCardClickedPreviously = listOfClickedPokemon.indexOf(name);

    if (wasPokemonCardClickedPreviously < 0) {
      setListOfClickedPokemon([]);
      setCurrentScore(0);
    } else {
      setListOfClickedPokemon([...listOfClickedPokemon, name]);
    }
  };

  return (
    <div onClick={onPokemonCardClick} className="pokemon-card">
      <img width="200" src={`${spriteURL}`} alt={`${name}`} key={`${name}`} />
    </div>
  );
};

export default PokemonCard;
