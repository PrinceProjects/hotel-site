import React from 'react';
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Rooms from './components/Rooms/Rooms';
import Facilities from './components/Facilities/Facilities';

function App() {
  return (
    <div className="App">
    	<BrowserRouter>
	    	<Navbar/>
	      	<Switch>
	          	<Route path="/" component={Home} exact/>
	          	<Route path="/about" component={About} exact/>
	          	<Route path="/contact" component={Contact} exact/>
	          	<Route path="/gallery" component={Gallery} exact/>
	          	<Route path="/rooms" component={Rooms} exact/>
	          	<Route path="/facilities" component={Facilities} exact/>
	        </Switch>
	        <Footer/>
      	</BrowserRouter>
    </div>
  );
}

export default App;
