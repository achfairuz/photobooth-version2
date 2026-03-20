import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Photobooth from "./pages/Photobooth";
import Result from "./pages/Result";
import ChooseTemplate from "./pages/ChooseTemplate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/photobooth" element={<Photobooth />} />
        <Route path="/result" element={<Result />} />
        <Route path="/choose-template" element={<ChooseTemplate />} />
      </Routes>
    </Router>
  );
}

export default App;