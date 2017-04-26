import fetch from 'isomorphic-fetch';

require('es6-promise').polyfill();

const API = 'api/v1/partners';

export default class PartnerService {

  static getAll() {
    return fetch(API, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return error;
    });
  }

}
