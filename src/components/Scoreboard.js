import React from "react";

const Scoreboard = ({
  currentScore,
  setCurrentScore,
  bestScore,
  setBestScore,
}) => {
  return (
    <div id="scoreboard">
      <h1>Welcome to Pokémon Memory Game!</h1>
      <h2>To play, select the pokémon that you haven't seen yet.</h2>
      <div>Score: {currentScore}</div>
      <div>Best score: {bestScore}</div>
    </div>
  );
};

export default Scoreboard;
