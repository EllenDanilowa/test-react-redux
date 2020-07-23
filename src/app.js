import React from 'react';
import {Provider} from 'react-redux';
import configureStore, {history} from './redux/configure-store';
import {ConnectedRouter} from 'connected-react-router';
import {
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AllMerchantsPage from './routes/all-merchants/all-merchants';
import NewMerchantPage from './routes/new-merchant/new-merchant';
import EditMerchantPage from './routes/edit-merchant/edit-merchant';
import {
  Logo,
  Header
} from './app.styled';
import logo from './logo.png';

const store = configureStore();

const App = () => (
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

export default App;
