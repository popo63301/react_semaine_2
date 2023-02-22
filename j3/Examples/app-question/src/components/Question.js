import { useDispatch } from "react-redux";
import { setChoice } from "../actions/actions-types";

const Question = ({ text, choices, status, id }) => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(setChoice({ [name] : value, id})); // payload
  };
  if (status)
    return (
      <div>
        <p>
          {id} - {text}
        </p>
        <select name="choice" onChange={handleChange}>
          {choices.map((choice, i) => (
            <option key={i} value={i}>
              {choice}
            </option>
          ))}
        </select>
      </div>
    );

  return (
    <div>
      <p>
        {id} - {text} Déjà répondu
      </p>
    </div>
  );
};

export default Question;
