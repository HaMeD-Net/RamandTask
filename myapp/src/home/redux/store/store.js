import { createStore } from "redux";
import { RootReducer } from "../rootReducer/rootReducer"

export const Store = createStore(RootReducer);
