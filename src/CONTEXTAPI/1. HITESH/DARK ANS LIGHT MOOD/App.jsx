/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import "../../../App.css";
import Card from "./components/Card";
import ThemeBtn from "./components/ThemeBtn";
import { ThemContexProvider } from "./contexts/ThemContext";

export default function App() {
  const [themMode, setThemMood] = useState("light");
  const darkThem = () => {
    setThemMood("dark");
  };

  const lightThem = () => {
    setThemMood("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(themMode);
  }, [themMode]);

  return (
    <ThemContexProvider value={{ themMode, darkThem, lightThem }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemContexProvider>
  );
}
