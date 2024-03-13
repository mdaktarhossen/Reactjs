import { useRef } from "react";

export default function Index() {
  const refForFocus = useRef(null);
  return (
    <div>
      <input ref={refForFocus} type="text" />
      <button onClick={() => refForFocus.current.focus()}>Focus</button>
    </div>
  );
}
