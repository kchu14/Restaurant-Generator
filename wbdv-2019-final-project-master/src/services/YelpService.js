export default class YelpService {

    // CORS-anywhere prepend proxy for testing
    static BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3';
    // should not store private api key here but fine for testing
    static API_KEY = '4SJYvmpuJBuWlDyWwbIPUdFDvg0hLLk7xzguX0sZorWjubvvQKZMkH5-hMfuT4YguX99oebTFC4iMf23HznB5DfTYzlo8GMFd0KA7l301PwzDRktGL22vdw-8BK2XXYx';

    static tempLatitude = '42.339894';
    static tempLongitude = '-71.089236';

    static get(params, path) {
        try {
            return fetch(this.BASE_URL + path , {
                method: 'GET',
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + this.API_KEY                }
            })
              .then(response => response.json())
        } catch (err) {
            console.log(err);
        }
    }

    static getSearchResults(userText) {
        return this.get({ 'text': userText }, '/businesses/search?categories="restaurants"' +
        this.getLocationParams() + "&term=" + userText);
    }

    static getDetails(id) {
        try {
            localStorage.setItem('businessId', JSON.stringify(id));
            const response = fetch(this.BASE_URL + `/businesses/${id}` , {
                method: 'GET',
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + this.API_KEY                }
            })
              .then(response => response.json())
              const result = response.then(details => details)
              return result
              }

        catch (err) {
            console.log(err);
        }
    }

    // autocomplete search terms using neu location for now. 
//    getAutocompleteSearchResults(userText) {
//        return this.get({ 'text': userText }, '/autocomplete?text=' + userText);
//    }


    // TODO: ask user for location and grab from browser (easy https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition)
    // currently uses hard coded location
    static getLocationParams() {
        return '&latitude=' + this.tempLatitude + '&longitude=' + this.tempLongitude
    }
}