import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Days from "./Days";
import SetSelector from "./SetSelector";
import "./FitnessTracker.css";

const strengthExercises = [
  "Deadlifts", "Squats", "Lunges", "Step-Ups", "Clean and Jerk", "Snatch", 
  "Kettlebell Swings", "Farmer’s Carry", "Bench Press", "Push-Ups", "Dips",
  "Dumbbell Flys", "Cable Crossovers", "Pull-Ups", "Lat Pulldown", "Bent-Over Rows",
  "Seated Cable Rows", "Face Pulls", "Overhead Press", "Lateral Raises",
  "Front Raises", "Shrugs", "Bicep Curls", "Preacher Curls", "Incline Dumbbell Curls",
  "Chin-Ups", "Tricep Dips", "Close-Grip Bench Press", "Tricep Extensions",
  "Diamond Push-Ups", "Leg Press", "Calf Raises", "Hip Thrusts", "Glute Bridges",
  "Planks", "Sit-Ups", "Russian Twists", "Hanging Leg Raises", "Ab Rollouts"
];

const growthTypes = {
  Endurance: { sets: 2, reps: "12-20+" },
  Hypertrophy: { sets: 3, reps: "6-12" },
  Strength: { sets: 4, reps: "3-6" },
  Power: { sets: 3, reps: "1-3" },
};

export default function FitnessTracker() {
  const [activities, setActivities] = useState({});
  const [activity, setActivity] = useState("");
  const [growthType, setGrowthType] = useState("");
  const [selectedDay, setSelectedDay] = useState("Monday");
  const [customSets, setCustomSets] = useState(3);
  const [customReps, setCustomReps] = useState("10");
  const [isCustomizing, setIsCustomizing] = useState(false);

  const navigate = useNavigate();

  const addActivity = () => {
    if (activity && (isCustomizing || growthType)) {
      const exerciseData = isCustomizing
        ? { sets: customSets, reps: customReps }
        : growthTypes[growthType];

      setActivities((prevActivities) => ({
        ...prevActivities,
        [selectedDay]: [...(prevActivities[selectedDay] || []), { activity, growthType, ...exerciseData }]
      }));

      setActivity("");
      setGrowthType("");
      setIsCustomizing(false);
    }
  };

  const deleteActivity = (index) => {
    setActivities((prevActivities) => ({
      ...prevActivities,
      [selectedDay]: prevActivities[selectedDay].filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="tracker-box">
      <h2 className="title">Workout Tracker</h2>

      <div className="image-container">
        <img 
          src="https://static.vecteezy.com/system/resources/previews/000/595/983/original/vector-object-and-icons-for-sport-label-gym-badge-fitness-logo-design.jpg"  
          alt="Workout Tracker"
          className="workout-image"
        />
      </div>

      <div className="input-group">
        <Days selectedDay={selectedDay} setSelectedDay={setSelectedDay} />

        <select className="input-field" value={activity} onChange={(e) => setActivity(e.target.value)}>
          <option value="">Select an Exercise</option>
          {strengthExercises.map((exercise, index) => (
            <option key={index} value={exercise}>{exercise}</option>
          ))}
        </select>

        {!isCustomizing && (
          <select className="input-field" value={growthType} onChange={(e) => {
            setGrowthType(e.target.value);
            setIsCustomizing(false);
          }}>
            <option value="">Select Training Type</option>
            {Object.keys(growthTypes).map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        )}

        <button className="btn customize-btn" onClick={() => {
          setIsCustomizing(!isCustomizing);
          if (!isCustomizing) setGrowthType("");
        }}>
          {isCustomizing ? "Use Preset Values" : "Customize Sets & Reps"}
        </button>

        {isCustomizing && (
          <SetSelector sets={customSets} setSets={setCustomSets} reps={customReps} setReps={setCustomReps} />
        )}

        <button className="btn add-btn" onClick={addActivity}>Add Exercise</button>
      </div>

      <h3 className="sub-title">{selectedDay} Activities</h3>
      <table className="activity-table">
        <thead>
          <tr>
            <th>Activity</th>
            <th>Growth Type</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {(activities[selectedDay] || []).map((item, index) => (
            <tr key={index}>
              <td>{item.activity}</td>
              <td>{item.growthType || "Custom"}</td>
              <td>{item.sets}</td>
              <td>{item.reps}</td>
              <td>
                <button className="btn delete-btn" onClick={() => deleteActivity(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn guide-btn" onClick={() => navigate("/training-guide")}>
        Training Type Guide
      </button>

      <button 
        className="btn linkedin-btn" 
        onClick={() => window.open("https://www.linkedin.com/in/navaneethashok/", "_blank")}
      >
        Visit My LinkedIn
      </button>
    </div>
  );
}
