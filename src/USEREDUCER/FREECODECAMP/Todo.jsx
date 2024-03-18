import { useReducer } from "react";

export default function Todo() {
  const [users, dispatch] = useReducer(reducerMethood, userData);
  return <div>Todo</div>;
}
const userData = [
  {
    id: 1,
    name: "kunal",
    age: 22,
    admin: true,
  },
  {
    id: 2,
    name: "rounak",
    age: 23,
    admin: false,
  },
  {
    id: 3,
    name: "utkarsh",
    age: 22,
    admin: false,
  },
];
