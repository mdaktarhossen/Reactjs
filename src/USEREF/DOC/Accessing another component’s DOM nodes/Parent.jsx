import { useRef } from "react";
import Child from "./Child";

export default function Parent() {
  const inputRef = useRef(null);
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <Child ref={inputRef} />
      <button onClick={handleFocus}>Focus the input</button>
    </>
  );
}
