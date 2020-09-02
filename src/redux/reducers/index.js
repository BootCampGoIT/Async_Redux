import { combineReducers } from "redux";
import coursesReducer from "./coursesReducer";
import loaderReducer from "./loaderReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
    courses: coursesReducer,
    loader: loaderReducer,
    error: errorReducer
})

export default rootReducer;