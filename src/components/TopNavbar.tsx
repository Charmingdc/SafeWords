import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const TopNavbar = () => {
  const [theme, setTheme] = useState<"dark" | "light" | "system">("dark");

  const switchTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav>
      <div className='w-screen flex justify-between py-4 px-6 border border-transparent border-b-border'>
        <h1 className='text-xl font-bold'>SafeWords </h1>

        <button onClick={switchTheme}>
          {theme === "light" ? <Moon /> : <Sun />}
        </button>
      </div>
    </nav>
  );
};

export default TopNavbar;
