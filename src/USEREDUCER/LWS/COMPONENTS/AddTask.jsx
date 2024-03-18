/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [inputValue, setInputVal] = useState("");
  const handleinputValueChange = (e) => {
    if (e.target.value.length > 0) {
      setInputVal(e.target.value);
    }
  };

  const handleAddTodo = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue !== "") {
      onAddTask(trimmedValue);
      setInputVal("");
    } else {
      alert("Please enter a non-empty todo.");
    }
  };

  return (
    <>
      <input type="text" value={inputValue} onChange={handleinputValueChange} />
      <button onClick={handleAddTodo}>Add Task</button>
    </>
  );
}
