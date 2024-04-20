import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import React from "react";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState(true);
  const [colorTheme, setcolorTheme] = useState([]);

  const ChageTheme = () => {
    setcolorTheme(
      theme
        ? {
            bg: "bg-gray-100",
            text: "text-gray-500",
            title: "text-black",
            cond: false,
          }
        : {
            bg: "bg-gray-900",
            text: "text-gray-400",
            title: "text-white",
            cond: true,
          }
    );

    setTheme(theme ? false : true);
  };

  useEffect(() => {
    setcolorTheme({
      bg: "bg-gray-900",
      text: "text-gray-400",
      title: "text-white",
      cond: true,
    });
  }, []);

  return (
    <main className={`${colorTheme.bg} ${colorTheme.text} body-font`}>
      <Navbar ChageTheme={ChageTheme} colorTheme={colorTheme} />
      <About colorTheme={colorTheme} />
      <Projects colorTheme={colorTheme} />
      <Skills colorTheme={colorTheme} />
      <Contact colorTheme={colorTheme} />
    </main>
  );
}

export default App;
