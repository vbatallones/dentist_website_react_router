import React from 'react';
import './App.css';

// this is the router dom
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact'
function App() {
	return (
    <Router>
      <div className="App">
      {/* the exact will be just for the home and it is not going to render other page */}
        <Route exact path="/" component={Home} />
        <Route path="/procedures" component={Procedures} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  )
}

export default App;
