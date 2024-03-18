import { useState } from "react";

/* eslint-disable react/prop-types */
export default function TaskItem({ task, onDeletetask, onChangeTask }) {
  const [isEdit, setIsEdit] = useState(false);
  let moodCheck;
  if (isEdit) {
    moodCheck = (
      <>
        <input
          type="text"
          value={task.text}
          onChange={(e) =>
            onChangeTask({
              ...task,
              text: e.target.value,
            })
          }
        />
        <button onClick={() => setIsEdit(false)}>Save</button>
        <button>Close</button>
      </>
    );
  } else {
    moodCheck = (
      <>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) =>
            onChangeTask({
              ...task,
              done: e.target.checked,
            })
          }
        />
        {task.text} <button onClick={() => setIsEdit(true)}>Edit</button>
        <button onClick={() => onDeletetask(task.id)}>Delete</button>
      </>
    );
  }
  return (
    <>
      <ol>
        <li>{moodCheck}</li>
      </ol>
    </>
  );
}
