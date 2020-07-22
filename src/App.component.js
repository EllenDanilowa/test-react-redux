import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  Logo,
  Header
} from './App.styled';
import AllMerchantsPage from './routes/AllMerchants/AllMerchants';
import NewMerchantPage from './routes/NewMerchant/NewMerchant';
import EditMerchantPage from './routes/EditMerchant/EditMerchant';
import logo from './logo.png';

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
        <div>
          <Header>
            <Link to="/">
              <Logo src={logo} alt="logo"/>
            </Link>
          </Header>
          <main>
            <Switch>
              <Route path="/add" component={NewMerchantPage}/>
              <Route path="/edit/:id" component={EditMerchantPage}/>
              <Route path="/" component={AllMerchantsPage}/>
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

export default App;
