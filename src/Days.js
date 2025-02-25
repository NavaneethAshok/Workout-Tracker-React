export default function Days({ selectedDay, setSelectedDay }) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
    return (
      <select
        className="border p-2 rounded w-full max-w-xs"
        value={selectedDay}
        onChange={(e) => setSelectedDay(e.target.value)}
      >
        {days.map((day) => (
          <option key={day} value={day}>{day}</option>
        ))}
      </select>
    );
  }
  