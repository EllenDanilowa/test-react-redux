import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore, {history} from './redux/configureStore';
import {ConnectedRouter} from 'connected-react-router';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AllMerchantsPage from './routes/AllMerchants/AllMerchants';
import NewMerchantPage from './routes/NewMerchant/NewMerchant';
import EditMerchantPage from './routes/EditMerchant/EditMerchant';
import {
  Logo,
  Header
} from './App.styled';
import logo from './logo.png';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Header>
            <Link to="/">
              <Logo src={logo} alt="logo"/>
            </Link>
          </Header>
          <main>
            <Switch>
              <Route path="/create" component={NewMerchantPage}/>
              <Route path="/update/:id" component={EditMerchantPage}/>
              <Route path="/" component={AllMerchantsPage}/>
            </Switch>
          </main>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
