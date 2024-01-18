import "../styles/App.css";

import Home from "./Home";

import Login from "./Login";

import { BrowserRouter as Router, Routes, Route, navLink } from 'react-router-dom';
import Register from "./Register";
import Header from "./Header";



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
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
