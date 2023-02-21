import { NavLink } from "react-router-dom";

const Nav = (props) => {
  const checkIsactive = ({ isActive }) => {
    return {
      display: "block",
      margin: "1rem 0",
      color: isActive ? "orange" : "",
    };
  };

  return (
    <nav>
      <ul>
        <li>
          <NavLink style={checkIsactive} to="/page1">
            page 1
          </NavLink>
        </li>
        <li>
          <NavLink style={checkIsactive} to="/page2">
            page 2
          </NavLink>
        </li>
      </ul>

      {props.children}
    </nav>
  );
};

export default Nav;
