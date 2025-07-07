import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import useTheme from "@/contexts/ThemeContext";

const TopNavbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav>
      <div className='w-screen flex justify-between py-4 px-6 border border-transparent border-b-border'>
        <h1 className='text-xl font-bold'> SafeWords </h1>

        <button onClick={toggleTheme}>
          {theme === "light" ? <Moon /> : <Sun />}
        </button>
      </div>
    </nav>
  );
};

export default TopNavbar;
