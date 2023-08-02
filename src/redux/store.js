//
import { createStore,combineReducers } from "redux"
import songReducer from "./reducer/songReducer";
import songData from "./reducer/songData";

let allReducers = combineReducers({
    selectedSong: songReducer,
    songsList: songData
})

const store = createStore(allReducers)

export default store;