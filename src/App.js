import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import HotelIcon from '@mui/icons-material/Hotel';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

import Home from './pages/Home';
import Schedule from './pages/Schedule';
import Accomodations from './pages/Accomodations';
import Directions from './pages/Directions';
import Gifts from './pages/Gifts';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Diana and Eetai</h1>
          <div className="nav">
            <Link to="/">
              <HomeIcon className="nav-icon" fontSize="small" />
              <span className="nav-text">Home</span>
            </Link>
            <Link to="/schedule">
              <AccessTimeFilledIcon className="nav-icon" fontSize="small" />
              <span className="nav-text">Schedule</span>
            </Link>
            <Link to="/accomodations">
              <HotelIcon className="nav-icon" fontSize="small" />
              <span className="nav-text">Accomodations</span>
            </Link>
            <Link to="/directions">
              <DirectionsCarIcon className="nav-icon" fontSize="small" />
              <span className="nav-text">Directions</span>
            </Link>
            <Link to="/gifts">
              <CardGiftcardIcon className="nav-icon" fontSize="small" />
              <span className="nav-text">Gifts</span>
            </Link>
          </div>
          <div className="nav-mobile">
          <Link to="/">
              <HomeIcon className="nav-icon" fontSize="medium" />
            </Link>
            <Link to="/schedule">
              <AccessTimeFilledIcon className="nav-icon" fontSize="medium" />
            </Link>
            <Link to="/accomodations">
              <HotelIcon className="nav-icon" fontSize="medium" />
            </Link>
            <Link to="/directions">
              <DirectionsCarIcon className="nav-icon" fontSize="medium" />
            </Link>
            <Link to="/gifts">
              <CardGiftcardIcon className="nav-icon" fontSize="medium" />
            </Link>
          </div>
        </header>
        <div className="main">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />}/>
            <Route path="/accomodations" element={<Accomodations />}/>
            <Route path="/directions" element={<Directions />}/>
            <Route path="/gifts" element={<Gifts />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
