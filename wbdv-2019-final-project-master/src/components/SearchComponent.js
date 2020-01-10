import React from "react";
import SearchForm from "./SearchForm";

export default class SearchComponent extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchText: ''
    }
  }

  render() {
    return(
      <div className="container-fluid">
           {console.log(this.props.searchText + 'in component')}
           {console.log(this.props + 'in component')}
           <SearchForm
            getSearchResults={this.props.getSearchResults}
            searchText={this.props.searchText}
            updateSearch={this.props.updateSearch}
          />
        </div> 
    )
  }
}

// const SearchComponent = ({ getSearchResults, searchText, updateSearch }) => (
//   <div className="container-fluid">
//     {console.log(searchText + 'in component')}
//     <SearchForm
//       getSearchResults={getSearchResults}
//       searchText={searchText}
//       updateSearch={updateSearch}
//     />
//   </div>
// );

// export default SearchComponent;
