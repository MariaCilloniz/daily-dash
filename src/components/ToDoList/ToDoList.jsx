import { useEffect, useState } from "react";
import { fetchTasks, addTask } from "../../api/taskApi";
import ToDoCard from "../ToDoCard/ToDoCard";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (error) {
        console.error("Error loading tasks:", error);
      }
    };

    loadTasks();
  }, []);

  const handleAddTask = async () => {
    try {
      const taskData = { text: newTask };
      const addedTask = await addTask(taskData);
      setTasks([...tasks, addedTask]);
      setNewTask("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  const handleTaskDeleted = (deletedId) => {
    setTasks(tasks.filter((task) => task.id !== deletedId));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      <div>
        {tasks.map((task) => (
          <ToDoCard
            key={task.id}
            id={task.id}
            text={task.description}
            onTaskDeleted={handleTaskDeleted}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
