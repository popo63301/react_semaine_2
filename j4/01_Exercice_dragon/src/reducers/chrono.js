import {
    SET_COUNTER,
    STOP_START_COUNTER
} from "../constants/actions";

const stateInit = {
    counter: 0,
    stop: false
}

const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case SET_COUNTER:

            return {
                ...state,
                counter: state.counter + action.payload
            }

        case STOP_START_COUNTER:

            return {
                ...state,
                stop: !state.stop
            }

        default:
            return state;
    }
}

export default reducer;