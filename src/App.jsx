import "./App.css";
import UserContextProvider from "./CONTEXTAPI/1. HITESH/AUTHANTICATION/CONTEXT/UserContextProvider";
import Login from "./CONTEXTAPI/1. HITESH/AUTHANTICATION/components/Login";
import Profile from "./CONTEXTAPI/1. HITESH/AUTHANTICATION/components/Profile";

export default function App() {
  return (
    <UserContextProvider>
      <h3 className="bg-green-900">React Class For Context API</h3>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}
