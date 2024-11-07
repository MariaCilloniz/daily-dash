import ToDoCard from "../ToDoCard/ToDoCard";

function ToDoList({ tasks, handleTaskUpdate }) {
  return (
    <div>
      {tasks.map((task) => (
        <ToDoCard
          key={task.id}
          id={task.id}
          text={task.description}
          handleTaskUpdate={handleTaskUpdate}
          tags={task.tags}
        />
      ))}
    </div>
  );
}

export default ToDoList;
