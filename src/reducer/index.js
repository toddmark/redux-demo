import { combineReducers } from "redux";

import count from "./count.js";
import todos from "./todos.js";

export default combineReducers({
  count,
  todos
})
