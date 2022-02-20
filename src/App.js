import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home'

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Diana and Eetai</h1>
          <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/schedule">Schedule</Link>
            <Link to="/accomodations">Accomodations</Link>
            <Link to="/directions">Directions</Link>
          </div>
          <div className="nav-mobile">
            <span>Menu</span>
          </div>
        </header>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/schedule" element={<Home />}/>
          <Route path="/accomodations" element={<Home />}/>
          <Route path="/directions" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
