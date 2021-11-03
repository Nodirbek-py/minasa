import React from 'react';
import Home from './views/home';
import './style.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Episodes from './views/episodes';
import Characters from './views/characters';
import Locations from './views/locations';


function App() {
  return (
    <BrowserRouter>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/episodes" component={Episodes} />
          <Route exact path="/locations" component={Locations} />
          {/* <Route exact path="/watchList" component={WatchList} /> */}
       </Switch>
    </BrowserRouter>
  );
}

export default App;
