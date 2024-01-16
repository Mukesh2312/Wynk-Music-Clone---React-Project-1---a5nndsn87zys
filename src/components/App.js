import "../styles/App.css";
import './Header';
import './Home';
import Home from "./Home";
import './Login';
import Login from "./Login";
import './Register';
import { BrowserRouter as Router, Routes, Route, navLink } from 'react-router-dom';
import Register from "./Register";



function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
