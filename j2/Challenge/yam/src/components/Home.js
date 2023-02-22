import { NavLink } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <p>
          <label>
            <small>Nombre d'expérience(s)</small>
            <input
              size="5"
              type="text"
              value={props.number}
              onChange={props.handleChange}
            />
          </label>
        </p>
        <p>
          <input type="submit" value="lancer" />
        </p>
      </form>

      <p>
        <NavLink to={{ pathname: `/statistic/${props.count}` }}>
          Resultat
        </NavLink>
      </p>
    </>
  );
};

export default Home;
