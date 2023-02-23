import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const stateDuStore = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="card">
        count is {stateDuStore.counter} <br />
        <br />
        <button onClick={() => dispatch({ type: "DECREMENT" })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "RESET" })}>0</button>
        <button onClick={() => dispatch({ type: "INCREMENT" })}>
          increment
        </button>
      </div>
    </div>
  );
}

export default App;
