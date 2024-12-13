import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Entryway from './components/Entryway';
import PuzzleChamber from './components/PuzzleChamber';
import TimeRoom from './components/TimeRoom';
import FinalRoom from './components/FinalRoom';
import WelcomePage from './components/home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/entryway" element={<Entryway />} />
        <Route path="/" element={<WelcomePage />} />
        <Route path="/puzzle-chamber" element={<PuzzleChamber />} />
        <Route path="/time-room" element={<TimeRoom />} />
        <Route path="/final-room" element={<FinalRoom />} />
      </Routes>
    </Router>
  );
};

export default App;
