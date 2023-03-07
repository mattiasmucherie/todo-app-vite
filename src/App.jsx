import { useState } from "react";
import "./App.css";

function ListItem({ todo, onRemove }) {
  // Implement the ListItem component
}

function App() {
  const [todos, setTodos] = useState(["Buy milk", "Go to gym"]);
  const [textField, setTextfield] = useState("");

  // Implement the addTodo function

  // Implement the handleRemove function

  const myTodos = todos.map((todo, key) => (
    <ListItem key={key} todo={todo} onRemove={handleRemove} />
  ));

  return (
    <div className="App">
      <div>
        <input
          type="text"
          value={textField}
          onChange={(e) => {
            // Implement the onChange handler for the input field
          }}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>{myTodos}</ul>
    </div>
  );
}

export default App;
