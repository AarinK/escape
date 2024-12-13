import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './puzzleChamber.css';

const PuzzleChamber = () => {
  const [hint, setHint] = useState(false);
  const [lock1, setLock1] = useState('');
  const [lock2, setLock2] = useState('');
  const [puzzleSolved, setPuzzleSolved] = useState(false);
  const [isLock1Solved, setIsLock1Solved] = useState(false); // New state for Lock 1

  const navigate = useNavigate(); // Initialize navigate function

  const handleLock1Solve = () => {
    if (lock1 === 'sunder nursery') {
      setIsLock1Solved(true);
      alert('Lock 1 solved! Proceed to the next lock.');
    } else {
      alert('Incorrect answer for Lock 1. Try again.');
    }
  };

  const handlePuzzleSolve = () => {
    if (lock2.toLowerCase() === '5') {
      setPuzzleSolved(true);
    } else {
      alert('Wrong answer for Lock 2! Try again.');
    }
  };

  const revealHint = () => {
    setHint(true);
  };

  const proceedToNextRoom = () => {
    navigate('/time-room'); // Navigate to the time-room page
  };

  return (
    <div className="puzzle-chamber-container">
      <h1>Puzzle Chamber</h1>
      <p className="description">You are locked in a mysterious room. Solve the puzzles to escape!</p>

      {!puzzleSolved && (
        <div className="puzzles">
          {/* Lock 1 */}
          <div className="puzzle">
            <h2>Lock 1</h2>
            <p>We met here, on a day that was bright,  
The place we chose, felt just right.  
Whether under the sun, or stars so high,  
Can you guess where? Give it a try!</p>
            <input
              type="text"
              value={lock1}
              onChange={(e) => setLock1(e.target.value)}
              placeholder="Enter the answer"
            />
            <button className="solve-button" onClick={handleLock1Solve}>
              Solve Lock 1
            </button>
          </div>

          {/* Lock 2 */}
          <div className={`puzzle ${!isLock1Solved ? 'blurred' : ''}`}>
            <h2>Lock 2</h2>
            <p>In a building with many doors,  
Some lead to places you've been before.  
But one room's special, you must know,  
It holds the secret, where love will grow.  
Count the doors, start from the start,  
The fifth holds the key to your heart.</p>
            <input
              type="text"
              value={lock2}
              onChange={(e) => setLock2(e.target.value)}
              placeholder="Enter the answer"
              disabled={!isLock1Solved}
            />
            <button
              className="solve-button"
              onClick={handlePuzzleSolve}
              disabled={!isLock1Solved}
            >
              Solve Lock 2
            </button>
          </div>
        </div>
      )}

      {puzzleSolved && (
        <div className="success-message">
          <h2>Congratulations!</h2>
          <p>You’ve solved the puzzles and escaped the room!</p>
          <button className="next-room-button" onClick={proceedToNextRoom}>
            Proceed to Next Room
          </button>
        </div>
      )}

      {!hint && !puzzleSolved && (
        <button className="hint-button" onClick={revealHint}>
          Reveal a Hint
        </button>
      )}

      {hint && !puzzleSolved && (
        <div className="hint">
          <p>
            Hint 1: A cup of coffee and tea<br />
            Hint 2: The answer to Lock 2 starts with "F".
          </p>
        </div>
      )}
    </div>
  );
};

export default PuzzleChamber;
