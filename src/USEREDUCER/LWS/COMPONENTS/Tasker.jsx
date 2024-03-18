import { useState } from "react";
import { initialTasks } from "./../data/data";
import AddTask from "./AddTask";
import TaskLists from "./TaskLists";

export default function Tasker() {
  const [tasks, setTask] = useState(initialTasks);

  const nextId = (data) => {
    const maxId = data.reduce((prev, current) => (prev && prev.id > current.id ? prev.id : current.id));
    return maxId + 1;
  };

  const handleAddTask = (text) => {
    setTask([
      ...tasks,

      {
        id: nextId(tasks),
        text: text,
        done: false,
      },
    ]);
  };
  const handleChangeTask = (task) => {
    const nextTask = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      } else {
        return t;
      }
    });
    setTask(nextTask);
  };
  const handleDeleteTask = (taskId) => {
    setTask(tasks.filter((t) => t.id !== taskId));
  };
  return (
    <>
      <AddTask onAddTask={handleAddTask} />
      <TaskLists tasks={tasks} onChangeTask={handleChangeTask} onDeletetask={handleDeleteTask} />
    </>
  );
}
