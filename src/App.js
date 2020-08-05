import React from 'react';
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home'

function App() {
  return (
    <div className="App">
    	<BrowserRouter>
	    	<Navbar/>
	      	<Switch>
	          	<Route path="/" component={Home} exact/>
	          	
	        </Switch>
      	</BrowserRouter>
    </div>
  );
}

export default App;
