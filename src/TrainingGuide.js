import { useNavigate } from "react-router-dom";
import "./FitnessTracker.css";

export default function TrainingGuide() {
  const navigate = useNavigate();

  return (
    <div className="tracker-box">
      <h2 className="title">Training Type Guide</h2>

      <table className="activity-table">
        <thead>
          <tr>
            <th>Training Type</th>
            <th>Sets</th>
            <th>Reps</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Endurance</td><td>2</td><td>12-20+</td></tr>
          <tr><td>Hypertrophy (Muscle Growth)</td><td>3</td><td>6-12</td></tr>
          <tr><td>Strength</td><td>4</td><td>3-6</td></tr>
          <tr><td>Power</td><td>3</td><td>1-3</td></tr>
        </tbody>
      </table>

      <button className="btn guide-btn" onClick={() => navigate("/")}>
        Back to Tracker
      </button>
    </div>
  );
}
