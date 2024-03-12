/* eslint-disable no-undef */
import { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/Profile.jsx";
import { UserContextProvider } from "./contexts/UserContext.jsx";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContextProvider value={{ user, setUser }}>
      <Login />
      <hr />
      <Profile />
    </UserContextProvider>
  );
}
