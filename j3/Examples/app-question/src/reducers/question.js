import { CHOICE } from "../constants/actions";

const stateInit = {
  count: 0,
  questions: new Map([
    [
      1,
      {
        text: "Quel est le nom de l'acteur principal dans Jocker ?",
        choices: ["Léa Seydoux", "Bill Murray", "Joaquin Phoenix"],
        response: 2,
        status: true,
      },
    ],
    [
      2,
      {
        text: "Quel est le nom du réalisateur de The French Dispatch ?",
        choices: ["Neill Blomkamp", "Wes Anderson", "David Cronenberg"],
        response: 1,
        status: true,
      },
    ],
  ]),
  responses: [],
  message: "",
};

const reducer = (state = stateInit, action = {}) => {
  switch (action.type) {
    case CHOICE:
      const { choice, id } = action.payload;
      const question = state.questions.get(id);
      question.status = false;
      let response = false;

      if (question.response === choice) {
          question.status = false;
          response = true;
      }

      state.questions.set(id, question);

      return {
        ...state,
        responses : [ ...state.responses, {id, response }]
      };

    default:
      return state;
  }
};

export default reducer;
