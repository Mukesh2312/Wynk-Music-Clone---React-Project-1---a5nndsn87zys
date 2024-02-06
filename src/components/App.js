import "../styles/App.css";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from "./Register";
import Header from "./Header";
import Songs from "./Songs";
import axios from "axios";
import Search from "./Search";
import Fevorite from "./Fevorite";
import { useUser } from "./UserProvider";



const ProtectedRout = ({ children }) => {
  const { getUser } = useUser();

  if (getUser && getUser.status == 'success') {
    return children
  } else {
    return <Navigate to='/login' />
  }
}



function App() {
  axios.interceptors.request.use(async (config) => {
    config.headers['projectid'] = "a5nndsn87zys";
    return config;
  })
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/search" element={<Search />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Songs" element={<Songs />} />
          <Route path="/Fevorite" element={<ProtectedRout>
            <Fevorite />
          </ProtectedRout>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
