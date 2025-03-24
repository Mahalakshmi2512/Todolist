import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
     
      <p>Organize your tasks efficiently with our easy-to-use To-Do list.</p>
      <div className="home-buttons">
        <Link to="/add-task" className="btn btn-primary">Add a Task</Link>
        <Link to="/tasks" className="btn btn-success">View Tasks</Link>
      </div>
    </div>
  );
}

export default Home;
