import React from "react";

const Scoreboard = ({
  currentScore,
  setCurrentScore,
  bestScore,
  setBestScore,
}) => {
  return (
    <div>
      <p>Score: {currentScore}</p>
      <p>Best score: {bestScore}</p>
    </div>
  );
};

export default Scoreboard;
