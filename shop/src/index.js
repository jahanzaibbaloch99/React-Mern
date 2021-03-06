import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from "redux-thunk";
import { BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import productreducer from "./store/reducers/productreducer";



const rootReducer = combineReducers (
  {
    product : productreducer,
}   
) 
const store = createStore(rootReducer ,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>


    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
