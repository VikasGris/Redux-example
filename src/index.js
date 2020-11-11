import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import {mobilePhone, laptop} from './actions';
// import {productReducer} from './reducer';
// import {Provider} from 'react-redux';
// import { createStore } from 'redux';


// export const MOBILE_PHONE = 'MOBILE_PHONE';
// export const LAPTOP = 'LAPTOP';

// //Actions


// //Reducer


// //store

// //let store = createStore(productReducer);
// //let store = createStore(productReducer);
// store.subscribe(()=> {console.log(store.getState())});

//     store.dispatch(mobilePhone());
// store.dispatch(laptop());


ReactDOM.render(
  
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
