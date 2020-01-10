import React from "react";
import { Link } from "react-router-dom";
import YelpService from "../services/YelpService";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      criteria: "",
      searchResults: {}
    };
  }

  componentWillMount() {
    const service = YelpService;
    const URL = window.location.href;
    const criteria = URL.split("/")[4];
    service.getSearchResults(criteria).then(business => {
      this.setState({
        searchResults: business,
        criteria: criteria
      });
    });
  }

  render() {
    return (
      <div className="container mt-4">
        <Link to={`/search`}>Back to search</Link>
        <ul className="list-group mt-4">
          {this.state.searchResults.businesses &&
            this.state.searchResults.businesses.map(business => (
              <li key={business.id} className="list-group-item bg-light">
                <Link to={`/details/${business.id}`}>
                  <div className="row">
                    <img className="col-md-2 col-4"
                        src={business.image_url}
                        alt={business.name}/>
                    <div className="col text-dark">{business.name}</div>
                    <div className="col text-dark">Rating: {business.rating}</div>
                    <div className="col text-dark">Price: {business.price}</div>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default SearchResults;
