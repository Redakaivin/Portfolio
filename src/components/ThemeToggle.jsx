import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/slice/themeSlice";

const ThemeToggle = () => {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    document.documentElement.classList.remove(
      theme === "dark" ? "light" : "dark"
    );
    document.documentElement.classList.add(theme);
  }, [theme]);

  const dispatch = useDispatch();
  function handleTheme() {
    dispatch(toggleTheme());
  }

  return (
    <button onClick={handleTheme} className="cursor-pointer">
      {theme === "dark" ? (
        <Sun className="h-6 w-6 text-amber-400" />
      ) : (
        <Moon className="h-6 w-6 text-black " />
      )}
    </button>
  );
};

export default ThemeToggle;
