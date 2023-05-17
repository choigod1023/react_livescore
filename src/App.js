import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainPage from "./pages";
import BaseballMatchPage from './pages/BaseballMatchPage';
import SoccerMatchPage from './pages/SoccerMatchPage';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path='/match/baseball/:id' element= {<BaseballMatchPage />} />
              <Route path='/match/soccer/:id' element={<SoccerMatchPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;