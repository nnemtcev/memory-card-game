import React from "react";

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div id="scoreboard">
      <h1>Welcome to Pokémemory!</h1>
      <h2>To play, select a pokémon that you haven't seen before.</h2>
      <div>Your score: {currentScore}</div>
      <div>Best score: {localStorage.getItem("bestScore") || bestScore}</div>
    </div>
  );
};

export default Scoreboard;
