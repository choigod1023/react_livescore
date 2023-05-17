import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages';
import BaseballMatchPage from './pages/match/BaseballMatch';
import SoccerMatchPage from './pages/match/SoccerMatch';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/match/baseball/:id' element={<BaseballMatchPage />} />
        <Route path='/match/soccer/:id' element={<SoccerMatchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
