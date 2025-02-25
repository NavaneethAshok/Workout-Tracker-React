import { useNavigate } from "react-router-dom";

export default function MuscularPlan() {
  const navigate = useNavigate(); 

  return (
    <div className="muscular-plan-container">
      <h2 className="title">Muscular Plan</h2>
      
      <table className="muscular-table">
        <thead>
          <tr>
            <th>Training Goal</th>
            <th>Reps</th>
            <th>Sets</th>
            <th>Rest</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Endurance</td>
            <td>12-20+</td>
            <td>2-3</td>
            <td>30-60 sec</td>
          </tr>
          <tr>
            <td>Hypertrophy</td>
            <td>6-12</td>
            <td>3-5</td>
            <td>30-90 sec</td>
          </tr>
          <tr>
            <td>Strength</td>
            <td>3-6</td>
            <td>4-6</td>
            <td>2-3 min</td>
          </tr>
          <tr>
            <td>Power</td>
            <td>1-3</td>
            <td>3-5</td>
            <td>3-5 min</td>
          </tr>
        </tbody>
      </table>

      <button className="back-button" onClick={() => navigate("/")}>
        Back to Tracker
      </button>
    </div>
  );
}
