import React, { createContext, useContext, useState, ReactNode } from "react";

type Theme = {
  backgroundColor: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
};

const themes = {
  black: {
    backgroundColor: "#000",
    textColor: "#fff",
    buttonColor: "#FFD700",
    buttonTextColor: "#000",
  },
  white: {
    backgroundColor: "#fff",
    textColor: "#000",
    buttonColor: "#FFD700",
    buttonTextColor: "#000",
  },
  yellow: {
    backgroundColor: "#FFD700",
    textColor: "#000",
    buttonColor: "#000",
    buttonTextColor: "#FFD700",
  },
};

type ThemeContextType = {
  theme: Theme;
  setTheme: (themeName: keyof typeof themes) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(themes.black);

  const setTheme = (themeName: keyof typeof themes) => {
    setThemeState(themes[themeName]);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};