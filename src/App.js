import React from 'react';
import './App.css';
import Header from './components/Header'
import Mobile from './components/Category/Electronics/Mobile';
import HomePage from './components/HomePage.js';
import {Router, Route, Switch, BrowserRouter} from 'react-router-dom';
import history from './components/history';
//import Provider from 'react-redux'
//import store from './components/Category/Electronics/Store';
function App() {
  
  return (
    <div className="App">

       <BrowserRouter history={history}>
                <Switch>
                    <Route path="/" exact component={Header} />
                    <Route path="/mobile-phone" exact component={Mobile} />
                    <Route path="/home" exact component={HomePage}/>
                </Switch>
        </BrowserRouter>
    </div>
  );
}
export default App;

