# Welcome to the exercise

We are building a Todo app with React. Feel free to style it as you wish, and for each exercise, you may add some CSS.

## Task 1

- In the `addTodo` function, add the value of the input field to the `todos` state array using the `setTodos` function.
- If the input field is empty, prevent adding new items to `todos`.
- After adding a new item to the `todos` array, reset the input field to an empty string using the `setTextfield` function.

## Task 2

- Create a new component called `ListItem` that renders a single todo item as an `<li>` element.
- Pass the todo item as a prop to the `ListItem` component.
- In the `ListItem` component, add a button with the text "remove".
- When the "remove" button is clicked, remove the todo item from the `todos` array using the `setTodos` function and the `Array.filter()` method.

> Hint: Use the `Array.filter()` method to remove the item from the todos array.

## Task 3

- Change the structure of the `todos` array to contain objects with two properties: `task` and `done`. Example: `{ task: "Shop groceries", done: false }`
- Modify the `remove` button to set the `done` property of the corresponding item to `true`, instead of removing it from the array.
- Add conditional styling to the `<li>` element, based on the value of `done`. Use the classes `Done` and `NotDone` for this purpose.

## Task 4

- Change the state variable `textField` to an object called `formData`, with two properties: `todo` and `category`.

```json
{
  "todo": "",
  "category": ""
}
```

- Add a `<select>` next to the input field:

```jsx
<select onChange={handleCategoryChange}>
  <option default disabled>
    Choose a category
  </option>
  <option value="personal">Personal</option>
  <option value="home">Home</option>
  <option value="work">Work</option>
</select>
```

- Use `onChange` handlers for both the input field and the `<select>` element to update the formData state.
- Modify the `todos` array to include the `category` property in each object.

```json
{
  "task": "Shop groceries",
  "done": false,
  "category": "home"
}
```

## Task 5

- Modify the `<select>` element to be populated with options dynamically. You can do this by mapping an array of category names to an array of `<option>` elements.

## Task 6

- Create a new component called `FilterController`. It should contain three buttons, one for each category.
- In `App.jsx`, add a new state variable called `activeFilter`, initialized as `null`.
- When a category button is pressed, set its name to the `activeFilter`. If the button for an already active filter is pressed again, replace it in `activeFilter`.
- Only display todos that have that category. Use the `Array.filter()` method for this purpose.
- Use conditional styling to indicate which buttons are active.

## Task 7

- Let's change the name and value for `activeFilter` to `const [activeFilters, setActiveFilters] = useState([])`
- Can we have an array of multiple filters!?!?!?!
