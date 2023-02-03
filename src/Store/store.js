import { createStore } from "redux";
import addFavorites from "./reducer";
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(addFavorites,composeWithDevTools())
export default store;