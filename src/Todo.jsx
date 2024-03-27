import { useState, useEffect } from "react";

function Todo({ addTodo, editingValues }) {
  
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(editingValues.name || "");
    setDescription(editingValues.description || "");
  }, [editingValues]);

  
  const newTodo = (e) => {
    e.preventDefault();
    if (!name || !description) return;
    addTodo({
      id: editingValues.id || Date.now(),
      name: name,
      description: description,
      status: "notcompleted", 
    });
    setName("");
    setDescription("");
  };
  

  return (
    <form onSubmit={newTodo} style={{ display: "flex" }}>
      <div className="col-md-5">
        <input
          type="text"
          placeholder="Todo Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="col-md-5">
        <input
          type="text"
          placeholder="Todo Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="col-md-2">
        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
}

export default Todo;