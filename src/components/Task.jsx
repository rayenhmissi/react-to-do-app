import { useState } from "react";
import Footer from "./Footer";
import "../styles/style1.css";
import Form from "./Form";
import TaskList from "./TaskList";

function Task() {
  const [task, setTask] = useState({ name: "",date:null,time:null, done: false });
  const [tasklist, setTasklist] = useState([]);
  const completedTasks = tasklist.filter((task) => task.done).length;
  function handleSubmit(e) {
    e.preventDefault();
    if (task.name.trim() === "") return; // Prevent adding empty tasks
    setTasklist([...tasklist, task]);
    setTask({ name: "", date: null,time:null, done: false });
  }
  function handleDelete(item) {
    setTasklist(tasklist.filter((task) => task !== item));
  }

  function handleComplete(item) {
    setTasklist(
      tasklist.map((task) =>
        task.name === item.name  ? { ...task, done: !task.done } : task
      )
    );
  }

  return (
    <div className="add-task">
      <Form task={task} setTask={setTask} handleSubmit={handleSubmit} />
      <TaskList
        tasklist={tasklist}
        handleComplete={handleComplete}
        handleDelete={handleDelete}
      />
      <Footer complete={completedTasks} alltask={tasklist.length} />
    </div>
  );
}
export default Task;