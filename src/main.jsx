import React from "react";
import ReactDOM from "react-dom/client";
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import todosReducer from './reducers/todosReducer';

import App from "./App.jsx";
import "./index.css";


const rootReducer = combineReducers({
  todos: todosReducer,
});
const store = createStore(rootReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <App />
</Provider>
);







