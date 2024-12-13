import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './entry.css';

const App = () => {
  const correctOrder = ['photo4', 'photo5', 'photo7', 'photo6', 'photo8', 'photo3', 'photo2', 'photo1'];

  const [stage, setStage] = useState('collect'); // 'collect' or 'memory'
  const [collectedPhotos, setCollectedPhotos] = useState([]);
  const [showPhotos, setShowPhotos] = useState({
    photo1: true,
    photo2: true,
    photo3: true,
    photo4: true,
    photo5: true,
    photo6: true,
    photo7: true,
    photo8: true,
  });
  const [correctlySelectedPhotos, setCorrectlySelectedPhotos] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [safeCode, setSafeCode] = useState('');
  const [safeLockUnlocked, setSafeLockUnlocked] = useState(false);
  const navigate = useNavigate();

  const collectPhoto = (photoName) => {
    setShowPhotos((prev) => ({
      ...prev,
      [photoName]: false,
    }));
    setCollectedPhotos((prev) => [...prev, photoName]);

    if (collectedPhotos.length + 1 === Object.keys(showPhotos).length) {
      setStage('memory'); // All photos collected, start memory game
    }
  };

  const playMemoryGame = (photoName) => {
    if (correctOrder[correctlySelectedPhotos.length] === photoName) {
      setCorrectlySelectedPhotos((prev) => [...prev, photoName]);
      setFeedback('');
    } else {
      setFeedback('X');
      setTimeout(resetMemoryGame, 1000);
    }

    if (correctlySelectedPhotos.length + 1 === correctOrder.length) {
      setFeedback('Congratulations! You unlocked the code: the date we met for the first time');
    }
  };

  const resetMemoryGame = () => {
    setCorrectlySelectedPhotos([]);
    setFeedback('');
  };

  const handleSafeCodeSubmit = (e) => {
    e.preventDefault();
    if (safeCode === '13122022') {
      setSafeLockUnlocked(true);
    } else {
      setSafeCode('');
      alert('Incorrect code, please try again.');
    }
  };

  const proceedToNextRoom = () => {
    navigate('/puzzle-chamber');
  };

  return (
    <div className="game-container">
      <h1>{stage === 'collect' ? 'Find and Collect the Photos!' : 'Memory Game'}</h1>
      {stage === 'collect' ? (
        <p>Click on the scattered photos to collect them in your tray.</p>
      ) : (
        <p></p>
      )}

      <div className="feedback">
        <p>{feedback}</p>
      </div>

      <div className="photo-area">
        {Object.keys(showPhotos).map((photo, index) =>
          showPhotos[photo] ? (
            <img
              key={index}
              src={require(`../images/${photo}.jpeg`)}
              alt={photo}
              className="photo"
              onClick={() => collectPhoto(photo)}
              style={{
                top: `${Math.random() * 80}vh`,
                left: `${Math.random() * 80}vw`,
              }}
            />
          ) : null
        )}
      </div>

      {stage === 'collect' && (
        <div className="tray">
          <div className="tray-photos">
            {collectedPhotos.map((photo, index) => (
              <img
                key={index}
                src={require(`../images/${photo}.jpeg`)}
                alt={photo}
                className="tray-photo"
              />
            ))}
          </div>
        </div>
      )}

      {stage === 'memory' && (
        <div className="tray">
          <h2>Trace our love</h2>
          <div className="tray-photos">
            {collectedPhotos.map((photo, index) => (
              <img
                key={index}
                src={require(`../images/${photo}.jpeg`)}
                alt={photo}
                className={`tray-photo ${
                  correctlySelectedPhotos.includes(photo) ? 'selected-photo' : ''
                }`}
                onClick={() => playMemoryGame(photo)}
              />
            ))}
          </div>
        </div>
      )}

      {!safeLockUnlocked && stage === 'memory' && (
        <div className="safe-lock">
          <h2>Enter the Safe Code to Proceed</h2>
          <form onSubmit={handleSafeCodeSubmit}>
            <input
              type="text"
              value={safeCode}
              onChange={(e) => setSafeCode(e.target.value)}
              placeholder="Enter code"
            />
            <button type="submit">Unlock Safe</button>
          </form>
        </div>
      )}

      {safeLockUnlocked && (
        <p className="safe-unlocked" onClick={proceedToNextRoom}>
          Safe Unlocked! Proceed to the next room.
        </p>
      )}
    </div>
  );
};

export default App;
