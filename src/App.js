import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FitnessTracker from "./FitnessTracker";
import TrainingGuide from "./TrainingGuide";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FitnessTracker />} />
        <Route path="/training-guide" element={<TrainingGuide />} />
      </Routes>
    </Router>
  );
}

export default App;
