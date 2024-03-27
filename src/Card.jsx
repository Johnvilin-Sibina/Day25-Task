function Card({ task, removeTodo, startEditing, updateStatus }) {
    const handleEdit = () => {
      startEditing(task);
    };
  
    const handleStatusChange = (e) => {
      const newStatus = e.target.value;
  
      // Update the status of the task
      const updatedTask = { ...task, status: newStatus };
  
      // Calling the function updateStatus to handle updating the status from the parent component App.jsx
      updateStatus(updatedTask);
    };
  
    // Define a variable to hold the background color based on the task's status
    const backgroundColor = task.status === "completed" ? "green" : "pink";
  
    return (
      <div className="col-md-4">
        <div className="card w-85">
          <div className="card-body">
            <div>
              <b>Name:</b> {task.name}
            </div>
            <div>
              <b>Description:</b> {task.description}
            </div>
            <div>
              <b>Status:</b>{" "}
              <select value={task.status} onChange={handleStatusChange} style={{ backgroundColor }}>
                <option value="notcompleted">Not Completed</option>
                <option value="completed">Completed</option>
              </select>
            </div>
            <div className="submit">
              <button className="btn btn-primary edit" onClick={handleEdit}>
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => removeTodo(task.id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Card