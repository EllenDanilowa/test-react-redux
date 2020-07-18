import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AllMerchantsPage from './routes/AllMerchantsPage/AllMerchantsPage'; // think about naming
import NewMerchantPage from './routes/NewMerchantPage/NewMerchantPage';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo" />
            </Link>
          </div>
          <main>
            <Switch>
              <Route path="/add">
                <NewMerchantPage />
              </Route>
              {/* <Route path="/edit">
                <Edit />
              </Route> */}
              <Route path="/">
                <AllMerchantsPage />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;