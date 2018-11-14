//helper class obtain URL from locations
class Helper {
  static baseURL() {
    return "https://api.foursquare.com/v2";
  }
  static auth() {
    const keys = {
      client_id: "P2IWCKICTTPCTWTQEOUM5UPNXRSYTOFNDPV04BTXABIQDOLE",
      client_secret: "LBWSWAJQQRHPD2FBGRYW550IBFSFGYYUXXKFZPDOK0RH4W5D",
      v: "20181003"
    };

    return Object.keys(keys) //will be returning an array with each value turned into strings
      .map(key => `${key}=${keys[key]}`)
      .join("&");
  }
  static urlBuilder(urlParams) {
    // when url parameter is empty, then returns an empty string
    if (!urlParams) {
      return "";
    }
    return Object.keys(urlParams) //or else it will retun an single string
      .map(key => `${key}=${urlParams[key]}`)
      .join("&");
  }
  static headers() {
    return {
      Accept: "application/json"
    };
  }
  static simpleFetch(endPoint, method, urlParams) {
    let requestData = {
      method,
      headers: Helper.headers()
    };
    return fetch(
      `${Helper.baseURL()}${endPoint}?${Helper.auth()}&${Helper.urlBuilder(
        urlParams
      )}`,
      requestData
    )
      .then(Helper.checkStatus)
      .then(response => response.json())
      .catch(error => {
        alert("An error occurred fetching Foursquare: " + error.response);
      });
  }
  static checkStatus(response) {
    if (response.ok) {
      return response;
    } else {
      let error = new Error(response.statusText);
      error = response;
      throw error;
    }
  }
}

export default class FoursquareAPI {
  static search(urlParams) {
    return Helper.simpleFetch("/venues/search", "GET", urlParams);
  }
  static getVenueDetails(VENUE_ID) {
    return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
  }
  static getVenuePhotos(VENUE_ID) {
    return Helper.simpleFetch(`/venues/${VENUE_ID}`, "GET");
  }
}
