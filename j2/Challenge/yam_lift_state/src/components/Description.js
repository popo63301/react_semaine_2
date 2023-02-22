import {
  NavLink
} from "react-router-dom";

const Description = () => {

  return (
    <>
      <p>Description </p>
      <p>Le jeu compte le nombre de brelan(s) obtenu(s) en laçant 3 de dés non-pipés un nombre de fois à fixer par l'utilisateur.</p>
      <p>
        <NavLink to="/">Home</NavLink>
      </p>
    </>
  );
};

export default Description;
