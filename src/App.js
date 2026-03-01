import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Photobooth from "./pages/Photobooth";
import Result from "./pages/Result";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/photobooth" element={<Photobooth />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;