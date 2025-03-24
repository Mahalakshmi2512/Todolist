import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; 
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TodoFormPage from "./pages/TodoFormPage";
import TodoListPage from "./pages/TodoListPage";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => setTasks([...tasks, task]);
  const deleteTask = (index) => setTasks(tasks.filter((_, i) => i !== index));

  return (
    <Router>
      <Header /> {/* ✅ Include Header only once here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-task" element={<TodoFormPage addTask={addTask} />} />
        <Route path="/tasks" element={<TodoListPage tasks={tasks} deleteTask={deleteTask} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
      </Routes>
    </Router>
  );
}

export default App;
