const initialState = { count: 0, number: 1 };

const reducer = (state, action) => {
  switch (action.type) {
    case "CALCUL":
      return {
        ...state,
        count: calcul(state.number),
      };

    case "SET_NUMBER":
      const { number } = action;
      return { ...state, number, count: 0 };

    default:
      return state;
  }
};

const calcul = (number) => {
  const de = () => Math.floor(Math.random() * 6) + 1;

  let count = 0;

  while (number > 0) {
    const lancer = [de(), de(), de()];
    if (lancer.reduce((acc, curr) => acc + curr) === 18) count++;
    number--;
    console.log(lancer.reduce((acc, curr) => acc + curr));
  }

  return count;
};

export { reducer, initialState };
