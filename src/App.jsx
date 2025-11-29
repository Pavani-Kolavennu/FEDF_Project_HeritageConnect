import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import HistoricPlaces from "./historic";
import FamousMonumnets from "./monuments";
import IndianCulture from "./culture";
function App() {
  return (
    <Router>
     

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/historic" element={<HistoricPlaces />} />
        <Route path="/monuments" element={<FamousMonumnets />} />
        <Route path="/culture" element={<IndianCulture/>} />
      </Routes>
    </Router>
  );
}

export default App;
