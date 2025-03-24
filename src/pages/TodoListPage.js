import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TodoFormPage"

function TodoListPage({ tasks, deleteTask }) {
  return (
    <div className="container mt-5">
      <h2 className="text-center">Your Tasks</h2>
      {tasks.length === 0 ? (
        <p className="text-center text-muted">No tasks added yet!</p>
      ) : (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Sr. No</th>
              <th>Task Name</th>
              <th>Time Limit</th>
              <th>Date</th>
              <th>Priority</th>
              <th>Category</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{task.taskName}</td>
                <td>{task.timeLimit}</td>
                <td>{task.date}</td>
                <td>{task.priority}</td>
                <td>{task.category}</td>
                <td>{task.description}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => deleteTask(index)}>❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TodoListPage;
