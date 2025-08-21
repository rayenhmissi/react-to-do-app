export default function Form({ task, setTask, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <label>task</label>
      <input
        type="text"
        placeholder="add task here"
        className="inputTask"
        value={task.name}
        onChange={(e) => setTask({ ...task, name: e.target.value })}
      />
      <input
        type="date"
        className="inputTask"
        value={task.date || ""}
        onChange={(e) => setTask({ ...task, date: e.target.value })}
      />
      <button type="submit" className="btn">
        add task
      </button>
    </form>
  );
}