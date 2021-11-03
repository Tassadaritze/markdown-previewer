import React, { useEffect } from 'react';
import './App.css';
import Working from "./Working";

function App(): JSX.Element {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [])
  return (
    <div className="App">
      <header>Markdown Previewer</header>
      <Working />
    </div>
  );
}

export default App;
