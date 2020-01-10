import React from 'react';
import SearchContainer from "./containers/SearchContainer";
import RegisterContainer from "./containers/RegisterContainer";
import DetailsComponent from "./components/DetailsComponent";
import HeaderContainer from "./containers/HeaderContainer";
import LoginContainer from "./containers/LoginContainer";
import Privacy from "./components/PrivacyComponent";
import ProfileContainer from "./containers/ProfileContainer";
import OtherAccountsProfileContainer from "./containers/OtherAccountsProfileContainer";
import SearchResults from "./components/SearchResults";
import { Route } from 'react-router-dom'
import { createStore } from 'redux'
import ParentReducer from "./reducers/ParentReducer";
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { applyMiddleware } from 'redux'
import 'babel-polyfill';
import HomeContainer from './containers/HomeContainer';

const store = createStore(ParentReducer, applyMiddleware(thunkMiddleware))

function App() {

  // Setting up local app state
  if (localStorage.getItem('isUserLoggedIn') === undefined) {
    localStorage.setItem('isUserLoggedIn', JSON.stringify(false));
  }
  if (localStorage.getItem('user') === undefined) {
    debugger;
    localStorage.setItem('user', JSON.stringify({}));
  }

  return (
    <div>
      <Provider store={store}>
        <div>
          <HeaderContainer />

          <Route exact path='/search'
            component={SearchContainer} />

          <Route exact path='/search/:id'
            component={SearchResults} />

          <Route exact path='/login'
            component={LoginContainer} />

          <Route exact path='/profile'
            component={ProfileContainer} />

          <Route exact path='/profile/:id'
            component={OtherAccountsProfileContainer} />

          <Route exact path='/privacy'
            component={Privacy} />

          <Route exact path='/register'
            component={RegisterContainer} />

          <Route exact path='/'
            component={HomeContainer} />

          <Route exact path='/details/:id'
            component={DetailsComponent} />
        </div>
      </Provider>
    </div>
  );
}

export default App;