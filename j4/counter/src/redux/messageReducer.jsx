const initState = {
  messages: ["salut", "ça va ?"],
};

const messageReducer = (previousState = initState, action) => {
  console.log("action dans message reducer", action);
  switch (action.type) {
    default:
      return previousState;
  }
};

export default messageReducer;
