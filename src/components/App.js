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
import AlbumDetail from "./AlbumDetail";
import Footer from "./Footer";
import '../index.css'
import SubscriptionModal from "./SubscriptionModal";
import AudioPlayer from "./AudioPlayer";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfUse from "../pages/TermsOfUse";
import Album from "./Album";
import UnderConstruction from "./UnderConstruction";
import Trendingsong from "./Trendingsong";
import UpdatePassword from "./UpdatePassword";
import NewsongSlider from "./NewsongSlider";
import Player from "./Player";



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
          <Route path="/Albumdetails" element={<AlbumDetail />} />
          <Route path="/modal" element={<SubscriptionModal />} />
          <Route path="/Fevorite" element={<ProtectedRout>
            <Fevorite />
          </ProtectedRout>} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/album" element={<Album />} />
          <Route path="/trendingsongs" element={<Trendingsong />} />
          <Route path="/underconstruction" element={<UnderConstruction />} />
          <Route path="/updatepassword" element={<UpdatePassword />} />
          {/* <Route path="/newsongs" element={<NewsongSlider />} /> */}
        </Routes>
        <Footer />
        <Player />

      </Router>
    </div>
  );
}

export default App;
