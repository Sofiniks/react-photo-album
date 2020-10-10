import React from "react";
//react router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import Home from "./pages/Home/Home";
import Albums from "./pages/Albums/Albums";
import Photos from "./pages/Photos/Photos";
import Error from "./pages/Error/Error";

//components
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/:albumid'>
          <Albums />
        </Route>
        <Route exact path='/:albumid/:photosid'>
          <Photos />
        </Route>

        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
