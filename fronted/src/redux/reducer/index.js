
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

const rootreducer = combineReducers({
    cart: cartReducer,
})

export default rootreducer;