import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchContainer from "../containers/SearchContainer";
import ParentReducer from "../reducers/ParentReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
export default class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Provider store={createStore(ParentReducer)}>
            <SearchContainer />
          </Provider>
          {/* <Route path="/search" component={SearchContainer} /> */}
        </div>
      </Router>
    );
  }
}
