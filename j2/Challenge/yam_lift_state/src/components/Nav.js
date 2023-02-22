import { NavLink } from "react-router-dom";

import Nav from "../Styles/Navigation";

const Navigation = () => {

  return (
    <Nav role="navigation">
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/description">Description</NavLink>
        </li>
      </ul>
    </Nav>
  );
};

export default Navigation;
