import { connect } from "react-redux";
import SearchForm from "../components/SearchForm";
import { getSearchResults } from '../actions/YelpActions';

const stateToPropertyMapper = state => {
  return {
    searchResults: state.searchResults,
    searchText: state.searchText
  };
};

const dispatcherToPropertyMapper = dispatch => {
  return {
    getSearchResults: searchText => dispatch(getSearchResults(searchText)),
    updateSearch: searchText => {
      dispatch({
        type: "UPDATE_SEARCH",
        searchText: searchText
      });
    }
  };
};

//TODO search text undefined
const SearchContainer = connect(
  stateToPropertyMapper,
  dispatcherToPropertyMapper
)(SearchForm);

export default SearchContainer;
