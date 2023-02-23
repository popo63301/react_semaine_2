const initState = {
  welcomeMessage: "bienvenue chai pas quoi",
  counter: 0,
};

const mainReducer = (previousState = initState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...previousState, counter: previousState.counter + 1 };
    case "DECREMENT":
      return { ...previousState, counter: previousState.counter - 1 };
    case "RESET":
      return { ...previousState, counter: 0 };

    default:
      return previousState;
  }
};

export default mainReducer;
