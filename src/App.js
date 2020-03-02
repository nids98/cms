import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux-store/store'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./commons/navbar/Navbar";
import Listing from "./modules/listing/ListingContainer";
import DetailedForm from "./modules/detailedForm/DetailedForm.jsx";
function App() {
  return (
      <Router>
          <Provider store={store}>
              <Navbar/>
              <Route exact path={"/"} component={Listing}/>
              <Switch>
                  <Route exact path={"/addseoregion"} component={DetailedForm} />
              </Switch>
          </Provider>
      </Router>
  );
}

export default App;
