import { useState } from "react";
import "./App.css";

function ListItem(props) {
  const { todo, onRemove } = props;
  // Implement the ListItem component
  return (
    <li className={todo.done ? "Done" : "NotDone"}>
      {todo.task} <button onClick={onRemove}>Done</button>
    </li>
  );
}

function App() {
  const [todos, setTodos] = useState([
    { task: "Buy milk", done: false },
    { task: "Go to gym", done: true },
  ]);

  const [textField, setTextfield] = useState("");

  // Implement the addTodo function
  const addTodo = () => {
    if (textField) {
      setTodos([...todos, { task: textField, done: false }]);
      setTextfield("");
    }
  };
  // Implement the handleRemove function
  const handleRemove = (oneTodo) => {
    const filteredTodos = todos.filter((todo) => todo.task !== oneTodo.task);
    oneTodo.done = true;

    setTodos([...filteredTodos, oneTodo]);
  };

  const myTodos = todos.map((todo, key) => (
    <ListItem key={key} todo={todo} onRemove={() => handleRemove(todo)} />
  ));

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={textField}
          onChange={(e) => {
            // Implement the onChange handler for the input field
            setTextfield(e.target.value);
          }}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>{myTodos}</ul>
    </div>
  );
}

export default App;
