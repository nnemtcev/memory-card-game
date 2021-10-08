import React from "react";

const Scoreboard = ({ currentScore, bestScore }) => {
  return (
    <div id="scoreboard">
      <h1>Welcome to Pokémemory!</h1>
      <h2>To play, keep selecting Pokémon that you haven't seen before.</h2>
      <h2>Remember: if you select a Pokémon you've seen, you lose!</h2>
      <div>
        <strong>Your score:</strong> {currentScore}
      </div>
      <div>
        <strong>Best score:</strong>{" "}
        {localStorage.getItem("bestScore") || bestScore}
      </div>
    </div>
  );
};

export default Scoreboard;
