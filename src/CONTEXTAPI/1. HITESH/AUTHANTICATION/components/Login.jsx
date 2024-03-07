import { useContext, useState } from "react";
import UserContext from "../CONTEXT/UserContext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>LOGIN</h2>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Enter user Name" />{" "}
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter user Password" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
