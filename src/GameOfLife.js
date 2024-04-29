import React from 'react';
import Game from 'react-game-of-life';
import './GameOfLife.css'; // Import CSS for styling

const GameOfLife = () => {
  return (
    <div className="game-container">
      <h2>Conway's Game of Life and SDGs</h2>
      <p>
        Conway's Game of Life is a cellular automaton that demonstrates how simple rules can lead to complex and dynamic patterns. This concept is analogous to the interconnectedness of life on Earth and the importance of sustainable development goals (SDGs) in preserving biodiversity and ecosystems.
      </p>
      <Game />
    </div>
  );
};

export default GameOfLife;
