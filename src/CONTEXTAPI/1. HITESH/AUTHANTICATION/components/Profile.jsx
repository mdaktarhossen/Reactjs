import { useContext } from "react";
import UserContext from "../CONTEXT/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <h2>Not Login</h2>;
  return (
    <div>
      <h3>Profile: {user.username}</h3>
      <h3>password: {user.password}</h3>
    </div>
  );
}
