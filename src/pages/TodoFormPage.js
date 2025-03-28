import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TodoFormPage.css";

function TodoFormPage({ addTask }) {
  const [task, setTask] = useState({
    taskName: "",
    timeLimit: "",
    date: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
    navigate("/tasks");
  };

  return (
    <>

      <div className="container mt-5">
        <h2 className="text-center mb-4">Add a New Task</h2>
        <form className="todo-form" onSubmit={handleSubmit}>
          <input type="text" name="taskName" placeholder="Task Name" onChange={handleChange} required className="form-control" />
          <input type="time" name="timeLimit" onChange={handleChange} required className="form-control" />
          <input type="date" name="date" onChange={handleChange} required className="form-control" />
          <select name="priority" onChange={handleChange} className="form-control">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
          <select name="category" onChange={handleChange} className="form-control">
            <option>Work</option>
            <option>Personal</option>
            <option>Study</option>
            <option>Other</option>
          </select>
          <textarea name="description" placeholder="Task Description (Optional)" onChange={handleChange} className="form-control"></textarea>
          <button className="btn btn-success">Add Task</button>
        </form>
      </div>
    </>
  );
}

// Todoform page 

export default TodoFormPage;
