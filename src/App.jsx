import { useState } from "react";
import "./App.css";

const categories = ["Personal", "Home", "Work"];

function ListItem(props) {
  const { todo, onRemove } = props;
  // Implement the ListItem component
  return (
    <li className={todo.done ? "Done" : "NotDone"}>
      {todo.task} | {todo.category} <button onClick={onRemove}>Done</button>
    </li>
  );
}

function App() {
  const [todos, setTodos] = useState([
    { task: "Buy milk", done: false, category: "home" },
    { task: "Go to gym", done: true, category: "personal" },
  ]);

  const [formData, setFormData] = useState({ todo: "", category: "home" });

  // Implement the addTodo function
  const addTodo = () => {
    if (formData.todo && formData.category) {
      setTodos([
        ...todos,
        { task: formData.todo, done: false, category: formData.category },
      ]);

      setFormData({ todo: "", category: "" });
    }
  };
  // Implement the handleRemove function
  const handleRemove = (oneTodo) => {
    const updatedTodos = [...todos];
    const index = updatedTodos.findIndex((t) => t.task === oneTodo.task);
    updatedTodos[index].done = !updatedTodos[index].done;
    setTodos(updatedTodos);
  };

  const handleCategoryChange = (event) => {
    setFormData({ ...formData, category: event.target.value });
  };

  const myTodos = todos.map((todo, key) => (
    <ListItem key={key} todo={todo} onRemove={() => handleRemove(todo)} />
  ));

  const myOptions = categories.map((category) => {
    return (
      <option key={category} value={category.toLowerCase()}>
        {category}
      </option>
    );
  });
  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={formData.todo}
          onChange={(e) => {
            // Implement the onChange handler for the input field
            setFormData({ ...formData, todo: e.target.value });
          }}
        />
        <select onChange={handleCategoryChange} value={formData.category}>
          <option disabled>Choose a category</option>
          {myOptions}
        </select>
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>{myTodos}</ul>
    </div>
  );
}

export default App;
