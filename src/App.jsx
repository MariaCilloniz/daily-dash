import Form from "./components/Form/Form";
import "./App.scss";
import { fetchTasks } from "./api/taskApi";
import { useState, useEffect } from "react";
import WeatherCard from "./components/WeatherCard/WeatherCard";
import DailyFortune from "./components/Daily Fortune/DailyFortune";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    try {
      const data = await fetchTasks();
      setTasks(data);
    } catch (error) {
      console.error("Error loading tasks:", error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleTaskUpdate = async () => {
    loadTasks();
  };

  return (
    <>
      <h2 className="header__title"> Daily Dashboard</h2>
      <WeatherCard />
      <DailyFortune />
      <Form handleAddTask={handleTaskUpdate} />
      <ToDoList tasks={tasks} handleTaskUpdate={handleTaskUpdate} />
    </>
  );
}

export default App;
