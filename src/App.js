import React, {Component, } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import PropTypes from 'prop-types';
import AllMerchantsPage from './routes/AllMerchants/AllMerchants';
import NewMerchantPage from './routes/NewMerchant/NewMerchant';
import EditMerchantPage from './routes/EditMerchant/EditMerchant';
import logo from './logo.png';
import './App.css';
import {fetchMerchants} from "./redux/actions/merchant";
import {connect} from "react-redux";

class App extends Component {
  componentDidMount() {
    /*
     Actually, it's better to move to routes/AllMerchants and get always updated info,
     but now to avoid losing temp data it's better to load data once
     */
    this.props.fetchMerchants();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <Link to="/">
              <img src={logo} className="App-logo" alt="logo"/>
            </Link>
          </div>
          <main>
            <Switch>
              <Route path="/add">
                <NewMerchantPage/>
              </Route>
              <Route path="/edit/:id">
                <EditMerchantPage/>
              </Route>
              <Route path="/">
                <AllMerchantsPage/>
              </Route>
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  fetchMerchants: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  fetchMerchants: () => {
    dispatch(fetchMerchants());
  }
});

export default connect(() => ({}), mapDispatchToProps)(App);
//export default App;
