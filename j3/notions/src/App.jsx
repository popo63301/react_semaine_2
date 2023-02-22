import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const test = () => {
    setCount(count + 1); // modification directe
    console.log("dans la fonction", count); // si on est dans une fonction, et qu'on fait un console.log
  };

  console.log("en dehors fonction", count); // si on est dans une fonction, et qu'on fait un console.log
  return (
    <div className="App">
      <div className="card">
        <button onClick={test}>count is {count}</button>
      </div>
    </div>
  );
}

export default App;
