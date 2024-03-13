import { useEffect, useRef } from "react";

export default function First() {
  // const [number, setNumber] = useState(0);
  const ref = useRef(0);
  useEffect(() => {
    console.log(`component rendered`);
  });

  const handleAdd = () => {
    ref.current++;
    console.log(ref.current);
  };
  return <button onClick={handleAdd}>Click me</button>;
}
