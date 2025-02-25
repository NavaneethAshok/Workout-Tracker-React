export default function SetSelector({ sets, setSets, reps, setReps }) {
  return (
    <div className="flex flex-col items-center space-y-2">
      <input
        type="number"
        className="border p-2 rounded w-full max-w-xs"
        value={sets}
        onChange={(e) => setSets(e.target.value)}
        placeholder="Sets"
      />
      <input
        type="text"
        className="border p-2 rounded w-full max-w-xs"
        value={reps}
        onChange={(e) => setReps(e.target.value)}
        placeholder="Reps"
      />
    </div>
  );
}
