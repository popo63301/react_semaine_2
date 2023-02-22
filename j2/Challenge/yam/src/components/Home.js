import { useReducer } from "react";
import { NavLink } from "react-router-dom";

import { reducer, initialState } from "../reducer";

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { number, count, isLoading } = state;

  const handleChange = (event) => {
    dispatch({ type: "SET_NUMBER", number: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "CALCUL" });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            <small>Nombre d'expérience(s)</small>
            <input
              size="5"
              type="text"
              value={number}
              onChange={handleChange}
            />
          </label>
        </p>
        <p>
          <input type="submit" value="lancer" />
        </p>
      </form>

      <p>
        <NavLink to={{ pathname: `/statistic/${count}` }}>Resultat</NavLink>
      </p>
    </>
  );
};

export default Home;
