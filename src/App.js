import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import CurrentVotings from "./pages/CurrentVotings/CurrentVotings";
import Wardrobe from './pages/Wardrobe/Wardrobe';

import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<CurrentVotings/>}/>
        <Route exact path="/wardrobe" element={<Wardrobe />}/>
      </Routes>
    </Router>
  );
}

export default App;
