import { useRef } from "react";

export default function Focuse() {
  const inputeRef = useRef();
  const handleFocuse = () => {
    inputeRef.current.focus();
  };
  return (
    <div>
      <input ref={inputeRef} type="text" />
      <button onClick={handleFocuse}>Focuse Inpute</button>
    </div>
  );
}
