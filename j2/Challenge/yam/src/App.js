import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Statistic from "./components/Statistic";
import Nav from "./components/Nav";
import Description from "./components/Description";

import GlobalStyle from "./Styles/Globals";

import { reducer, initialState } from "./reducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { number, count } = state;

  const handleChange = (event) => {
    dispatch({ type: "SET_NUMBER", number: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "CALCUL" });
  };
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              number={number}
              count={count}
            />
          }
        />
        <Route path="/description" element={<Description />} />
        <Route path="/statistic/:count" element={<Statistic />} />
      </Routes>
    </>
  );
};

export default App;
