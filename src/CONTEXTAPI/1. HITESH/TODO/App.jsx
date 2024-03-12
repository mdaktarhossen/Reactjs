/* eslint-disable no-undef */
import { useState } from "react";
import "../../../App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { ToDoContextProvide } from "./contexts";
export default function App() {
  const [todos, setToDos] = useState([]);

  const addTodo = (todo) => {
    setToDos((prev) => [{ id: crypto.randomUUID(), ...todo }, ...prev]);
  };

  const updateTodo = (id, todo) => {
    setToDos((prev) => prev.map((prevTodo) => (prevTodo.id === todos.id ? todo : prevTodo)));
  };

  const deleteTodo = (id) => {
    setToDos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setToDos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? { ...prev, completed: !prevTodo.completed } : prevTodo)));
  };

  return (
    <ToDoContextProvide value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}

            <TodoItem />
          </div>
        </div>
      </div>
    </ToDoContextProvide>
  );
}
