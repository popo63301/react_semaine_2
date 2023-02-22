import { useSelector } from "react-redux";
import Question from "./components/Question";

const App = () => {
  // lecture du store
  const store = useSelector((state) => state);
  const { questions, responses } = store;

  console.log("store", store);
  // Array.from sur un Map permet de le transformer en tableau de tableau clé/val
  return (
    <>
      <div className="App">
        {Array.from(questions).map((q, i) => {
          const [id, question] = q;

          return <Question key={i} id={id} {...question} />;
        })}
      </div>
      {responses.length > 0 && (
        <ul>
          {responses.map((r, i) => (
            <li key={i}>
              ID : {r.id}
              {r.response ? "yes" : "no"}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default App;
