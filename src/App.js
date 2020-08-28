import React from 'react';
import './App.css';

//  this is the router dom / boiler-plate
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Home from './Home';
import Procedures from './Procedures';
import Contact from './Contact'
import WidgetShow from './WidgetShow';
import Team from './Team'
import Offers from './Offers'
import Offices from './Offices'

function App() {
  const procedures = [
    'Deep Cleaning',
    'Oral Surgery',
    'Root Canal',
    'Crown',
    'Implants',
    'Fillings'
  ];
  
	return (

    // wrap everything in the ROUTER
    <Router>
      <div className="App">

      <nav>
      {/* keyword for the link to work is the " to="" " */}
        <Link to="/">Home</Link>{' '}
        <Link to="/procedures">See our Procedures</Link>{' '}
        <Link to="/contact">Contact Us!</Link>{' '}
        <Link to="/team">Teams</Link>{' '}
        <Link to="/offers">Offers</Link>{' '}
        <Link to="/offices">Offices</Link>{' '}
      </nav>

      {/* *ROUTES* the exact will be just for the home and it is not going to render other page */}
      {/* give every main component a ROUTE and path. */}
        <Route exact path="/" component={Home} />
        {/* the render method will let you use the array we did to pass all the items into the Procedures page */}
        <Route path="/procedures" render={() => <Procedures procedures={procedures} />} />
        <Route path="/contact" component={Contact} />
        <Route path="/widgets/:id"  render={(props) => <WidgetShow procedures={procedures} {...props}/>} />
        <Route path="/team" component={Team} />
        <Route path="/offers" component={Offers} />
        <Route path="/offices" component={Offices} />
      </div>
    </Router>
  )
}

export default App;
