import { useState } from "react";
import { ThemeContext } from "../context";

// eslint-disable-next-line react/prop-types
export default function ThemProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
}
