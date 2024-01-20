import "../styles/App.css";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./Register";
import Header from "./Header";
import Songs from "./Songs";
import axios from "axios";





function App() {
  axios.interceptors.request.use(async (config) => {
    config.headers['projectid'] = "f104bi07c490";
    return config;
  })
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Songs" element={<Songs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
