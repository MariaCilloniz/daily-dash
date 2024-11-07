import { useState, useRef } from "react";
import { addTask } from "../../api/taskApi";
import "./Form.scss";

function Form() {
  const [newTask, setNewTask] = useState({ description: "", tags: [] });

  const personalRef = useRef();
  const homeRef = useRef();
  const healthRef = useRef();
  const fitnessRef = useRef();
  const workRef = useRef();
  const schoolRef = useRef();

  const handleDescriptionChange = (event) => {
    setNewTask((prevTask) => ({
      ...prevTask,
      description: event.target.value,
    }));
  };

  const handleTagChange = (event) => {
    const { value, checked } = event.target;

    setNewTask((prevTask) => {
      const newTags = checked
        ? [...prevTask.tags, value] // Add if checked
        : prevTask.tags.filter((category) => category !== value); // Remove if unchecked

      return {
        ...prevTask,
        tags: newTags,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(newTask);
    setNewTask({ description: "", tags: [] });

    personalRef.current.checked = false;
    homeRef.current.checked = false;
    healthRef.current.checked = false;
    fitnessRef.current.checked = false;
    workRef.current.checked = false;
    schoolRef.current.checked = false;
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <textarea
            value={newTask.description}
            onChange={handleDescriptionChange}
            placeholder="Enter your text here..."
            className="input-textarea"
          />
        </div>
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              name="category"
              value="Personal"
              onChange={handleTagChange}
              ref={personalRef}
            />
            Personal
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Home"
              onChange={handleTagChange}
              ref={homeRef}
            />
            Home
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Health"
              onChange={handleTagChange}
              ref={healthRef}
            />
            Health
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Fitness"
              onChange={handleTagChange}
              ref={fitnessRef}
            />
            Fitness
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="Work"
              onChange={handleTagChange}
              ref={workRef}
            />
            Work
          </label>
          <label>
            <input
              type="checkbox"
              name="category"
              value="School"
              onChange={handleTagChange}
              ref={schoolRef}
            />
            School
          </label>
        </div>
        <button type="submit" className="submit-button">
        Add Task
        </button>
      </form>
    </div>
  );
}

export default Form;
