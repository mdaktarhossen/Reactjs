import { useState } from "react";
import { useUserContext } from "../contexts/UserContext";
export default function Login() {
  const [username, setUserName] = useState("");
  const [password, SetPassword] = useState("");
  const { setUser } = useUserContext();

  const handleClick = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <>
      <h1>Please login</h1>
      <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="Enter text here" /> <br /> <br />
      <input type="password" value={password} onChange={(e) => SetPassword(e.target.value)} placeholder="Enter Password" />
      <button type="button" onClick={handleClick}>
        Regester
      </button>
      <h2>Name:{}</h2>
    </>
  );
}
