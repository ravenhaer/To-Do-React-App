import './App.css'
import {useState} from 'react'

function Todo({ todo, index, removeTodo }) {
  return (
    <div className="todo">
      {todo.text}
      <div>
        <button onClick={() => removeTodo(index)}>Complete</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Task : </label>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <input
        type="Submit"
        className="btn"
        value="Save"
      />
    </form>
  );
}

function App() {

  const [todos, setTodos] = useState([
  ]);

  const addTodo = text => {
    const index=Math.floor(Math.random()*100)+1;
    const newTodos = [...todos, { text, index }];
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = todos.filter((todo)=> todo.index !== index);
    console.log(newTodos, index);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <header className="App-header">
        <TodoForm addTodo={addTodo} />
        <label>{todos.length > 0 ? "TO DO" : "No Pending Tasks"}</label>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={todo.index}
            todo={todo}
            removeTodo={removeTodo}
          />
        ))}
        
      </header>
    </div>
  );
}

export default App;
