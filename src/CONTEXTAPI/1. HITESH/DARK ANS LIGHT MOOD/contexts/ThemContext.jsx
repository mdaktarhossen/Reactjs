import { createContext, useContext } from "react";

export const ThemContex = createContext({
  themMode: "Light",
  darkThem: () => {},
  lightThem: () => {},
});
export const ThemContexProvider = ThemContex.Provider;

export const useThemContext = () => {
  return useContext(ThemContex);
};
