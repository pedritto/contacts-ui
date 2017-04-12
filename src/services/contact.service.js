import fetch from 'isomorphic-fetch';

require('es6-promise').polyfill();

const API = 'api/v1/contacts';

const prepareFetch = (conf) => {
  const api = conf.path ? API + conf.path : API;

  const init = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: conf.meth
  };

  if (conf.data) {
    init.body = JSON.stringify(conf.data);
  }

  return fetch(api, init)
    .then((response) => {
      return response.json();
    })
    .catch((error) => {
      return error;
    });
};

export default class ContactService {

  static getAll() {
    return prepareFetch({
      meth: 'GET'
    });
  }

  static save(contact) {
    return prepareFetch({
      meth: 'POST',
      data: contact
    });
  }

  static update(contact) {
    return prepareFetch({
      path: `/${contact.id}`,
      meth: 'PUT',
      data: contact
    });
  }

  static delete(contact) {
    return prepareFetch({
      path: `/${contact.id}`,
      meth: 'DELETE',
      data: contact
    });
  }
}
