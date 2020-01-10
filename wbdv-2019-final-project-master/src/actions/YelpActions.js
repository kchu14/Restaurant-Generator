import YelpService from '../services/YelpService';
import history from '../history'

export function getSearchResults(searchText) {
    return dispatch => {
        YelpService.getSearchResults(searchText).then(
            result => {
                dispatch(searchResultSuccess(result, searchText));
            }, error => {
                dispatch(searchResultSuccess(error));
            }
        );
    }
}

function searchResultSuccess(result, searchText) { return { type: 'SEARCH_RESULT_SUCCESS', result, searchText }; }