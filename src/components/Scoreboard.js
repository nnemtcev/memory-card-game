import React from "react";

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div id="scoreboard">
      <h1>Welcome to Pokémon Memory Game!</h1>
      <h2>To play, select the pokémon that you haven't seen yet.</h2>
      <div>Score: {currentScore}</div>
      <div>Best score: {localStorage.getItem("bestScore") || bestScore}</div>
    </div>
  );
};

export default Scoreboard;
