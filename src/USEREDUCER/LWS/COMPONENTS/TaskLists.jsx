/* eslint-disable react/prop-types */
import TaskItem from "./TaskItem";

export default function TaskLists({ tasks, onChangeTask, onDeletetask }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onChangeTask={onChangeTask} onDeletetask={onDeletetask} />
      ))}
    </>
  );
}
