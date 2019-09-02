import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'
import reducer from "./reducer/reducer";



export const store = createStore(reducer, applyMiddleware(thunkMiddleware, createLogger));

// const myActionCreator = (timeout) => (dispatch) => {
//   setTimeout(() => dispatch({
//     type: 'MYACTION'
//   }), timeout);
// };
//
// store.dispatch(myActionCreator(2000));