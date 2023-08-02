import { INCREASE, DECREASE, RESET } from "../actions/actionTypes";

let initialState = 0;

const counterReducer = (state = initialState,action) =>{

    switch(action.type){
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        case RESET:
            return 0;
        default:
            return state;
    }
}

export default counterReducer;