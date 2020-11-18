import React from 'react';
import './App.css';
import Header from './components/Header'
import HomePage from './components/HomePage.js';
import Electronics from './components/Electronics.js';
import Tv from './components/Tv';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import history from './components/history';
//import Provider from 'react-redux'
//import store from './components/Category/Electronics/Store';
function App() {
  
  return (
    <div className="App">
      <div>
       <BrowserRouter history={history}>
                <Switch>
                    <Route path="/eletonics/:name" exact component={Electronics} />
                    <Route path="/Tvs & appliances/:name" exact component={Tv} />
                    <Route path="/home" exact component={HomePage}/>
                    <Route path="/" exact component={HomePage}/>

                </Switch>
        </BrowserRouter>
        </div>
    </div>
  );
}
export default App;

