import { useState,useEffect } from "react";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Card from "./Card";
import Todo from "./Todo";
import Filter from "./Filter";

function App() {
  let initialTasks = [
    {
      id: 1,
      name: "Codekata",
      description: "Solve 10 questions under Mathematics category",
      status: "notcompleted"
    },
    {
      id: 2,
      name: "Webkata",
      description: "Solve 20 questions under HTML category",
    status: "notcompleted"
    },
    {
      id: 3,
      name: "Assesment",
      description: "Take the assesment for module 4",
    status: "notcompleted"
    },
    {
      id: 4,
      name: "Revision 1",
      description: "Revise the contents of Module 1",
    
    status: "notcompleted"
    },
    {
      id: 5,
      name: "Revision 2",
      description: "Revise the contents of Module 2 and 3",
    status: "notcompleted"
    },
    {
      id: 6,
      name: "Revision 3",
      description: "Revise the contents of Module 4",
    status: "notcompleted"
    },
  ];
  
  const [todos, setTodos] = useState(initialTasks);
  const [editingTodo, setEditingTodo] = useState(null);
  const [editingValues, setEditingValues] = useState({ name: "", description: "" });
  const [statusFilter, setStatusFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState(initialTasks);
  
 
  useEffect(() => {
    let filteredTodos = todos;
  
    if (statusFilter !== "all") {
      // Filter only if statusFilter is not "all"
      filteredTodos = todos.filter(task => task.status === statusFilter);
    }
  
    setFilteredTodos(filteredTodos);
  }, [statusFilter, todos]);
  

  

  const addTodo = (todo) => {
    if (editingTodo) {
      const updatedTodos = todos.map((t) =>
        t.id === editingTodo.id ? { ...t, ...todo } : t
      );
      setTodos(updatedTodos);
      setEditingTodo(null);
    } else {
      setTodos([...todos, todo]);
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((task) => task.id !== id));
  };

  const startEditing = (todo) => {
    setEditingTodo(todo);
    if (todo) {
      setEditingValues({ name: todo.name, description: todo.description });
    } else {
      setEditingValues({ name: "", description: "" });
    }
  };

  const updateStatus = (updatedTask) => {
    // Find the index of the task to be updated
    const index = todos.findIndex(task => task.id === updatedTask.id);
    // Create a copy of the todos array
    const updatedTodos = [...todos];
    

    // Update the task at the found index
    updatedTodos[index] = updatedTask;

    // Set the state with the updated todos
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1 className="heading">My Todo</h1>
      <div className="container">
        <div className="row input-field">
          <Todo addTodo={addTodo} editingValues={editingValues}/>
        </div>
        <Filter setStatusFilter={setStatusFilter} />
        <div className="row todos">
          {filteredTodos.map((task) => (
            <Card
              key={task.id}
              task={task}
              removeTodo={removeTodo}
              startEditing={startEditing}
              updateStatus={updateStatus}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;



