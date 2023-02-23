const initState = {
  counter: 0,
};

const counterReducer = (previousState = initState, action) => {
  console.log("action dans counter reducer", action);
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

export default counterReducer;
