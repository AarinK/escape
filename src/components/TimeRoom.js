import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./timeRoom.css";
import puzzleImage from "../images/puzzleImage.jpeg";

const SlidingPuzzle = () => {
  const [tiles, setTiles] = useState([]);
  const [emptyTile, setEmptyTile] = useState(8); // Index of the empty tile
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [isPuzzleSolved, setIsPuzzleSolved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const initialTiles = Array.from({ length: 9 }, (_, index) => index);
    const shuffledTiles = shuffle(initialTiles);
    setTiles(shuffledTiles);
    setEmptyTile(shuffledTiles.indexOf(8)); // Set the empty tile index

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) return prevTime - 1;
        clearInterval(timer); // Stop the timer when it reaches 0
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup the timer on component unmount
  }, []);

  const shuffle = (array) => {
    do {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    } while (!isSolvable(array));
    return array;
  };

  const isSolvable = (array) => {
    let inversions = 0;
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if (array[i] !== 8 && array[j] !== 8 && array[i] > array[j]) {
          inversions++;
        }
      }
    }
    return inversions % 2 === 0;
  };

  const handleTileClick = (index) => {
    if (isAdjacent(index, emptyTile) && !isPuzzleSolved) {
      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyTile]] = [newTiles[emptyTile], newTiles[index]];
      setTiles(newTiles);
      setEmptyTile(index);

      if (newTiles.every((tile, idx) => tile === idx)) {
        setIsPuzzleSolved(true);
        setTimeout(() => navigate("/final-room"), 500); // Navigate to the next room after a brief delay
      }
    }
  };

  const isAdjacent = (index1, index2) => {
    const row1 = Math.floor(index1 / 3);
    const col1 = index1 % 3;
    const row2 = Math.floor(index2 / 3);
    const col2 = index2 % 3;
    return Math.abs(row1 - row2) + Math.abs(col1 - col2) === 1;
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="sliding-puzzle-container">
      <h1 className="puzzle-title">Escape Room Puzzle</h1>
      <div className="timer">
        <p>{`Time Left: ${formatTime(timeLeft)}`}</p>
      </div>
      <div className="sliding-puzzle">
        {tiles.map((tile, index) => (
          <div
            key={index}
            className={`tile ${tile === 8 ? "empty" : ""}`}
            style={{
              backgroundImage: tile !== 8 ? `url(${puzzleImage})` : "none",
              backgroundPosition: tile !== 8
                ? `${-(tile % 3) * 100}px ${-Math.floor(tile / 3) * 100}px`
                : "none",
            }}
            onClick={() => handleTileClick(index)}
          />
        ))}
      </div>
      {timeLeft === 0 && !isPuzzleSolved && (
        <p className="game-over">Time's up! You failed to solve the puzzle.</p>
      )}
    </div>
  );
};

export default SlidingPuzzle;
