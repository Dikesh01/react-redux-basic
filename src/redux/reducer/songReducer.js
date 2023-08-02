import { SELECTE_SONG } from "../actions/actionTypes";

let initialState = null;

const songReducer = (state = initialState,action) =>{
    
    switch(action.type){
        case SELECTE_SONG:
            return action.payload
        default:
            return state
    }
}

export default songReducer;