import {combineReducers} from "redux";
import updateCount from "./updateCount";
import updateName from "./updateName";

const reducer = combineReducers({
  updateCount,
  updateName
});

export default reducer;