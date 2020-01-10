import { combineReducers } from "redux";
import RegisterReducer from "./RegisterReducer";
import UserReducer from "./UserReducer";

const initialSearchState = {
  searchResults: [],
  searchText: "",
  isUserLoggedIn: false,
  user: {}
};

const SearchReducer = (state = initialSearchState, action) => {
  switch (action.type) {
    case 'SEARCH_RESULT_SUCCESS':
      return {
        ...state,
        searchResults: action.result,
        searchText: action.searchText
      };
    case "GET_SEARCH":
      return {
        ...state,
        searchResults: action.results,
        searchText: action.searchText
      };
    case "UPDATE_SEARCH":
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
};

const ParentReducer = combineReducers({
  UserReducer,
  SearchReducer,
  RegisterReducer
});

export default ParentReducer;