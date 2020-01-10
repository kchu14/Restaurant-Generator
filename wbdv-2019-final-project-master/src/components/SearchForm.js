import React from "react";
import { Link } from "react-router-dom";

export default class SearchForm extends React.Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      searchResults: '',
      searchText: '',
      currentRestaurant: null
    };
  }

  handleChange(event) {
    event.preventDefault();
    this.props.updateSearch(event.target.value);
    this.setState({
      ...this.state,
      searchText: event.target.value
    });
  }

  handleSubmit(event) {
    this.props.getSearchResults(this.state.searchText);
  }

  render() {
    return (
      <div className="container-fluid row mt-4 text-center">
        <h3 className="col-12">Search for restaurants near you!</h3>
        <div className="col-6 col-md-5 offset-md-3 offset-2">
          <input
            type="text"
            className="form-control form-control-md mt-2 wbdv-search"
            id="Search"
            placeholder="Enter restaurant type"
            defaultValue={this.props.searchText}
            onChange={this.handleChange}>
          </input>
        </div>
        <Link to={`/search/${this.state.searchText}`}>
          <button type="button" className="btn btn-success mt-2" onClick={this.handleSubmit}>Search</button>
        </Link>
      </div>
    );
  }
}