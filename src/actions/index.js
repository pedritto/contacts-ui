import ContactService from '../services/contact.service';

export const ADD_CONTACT = 'ADD_CONTACT';
export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';
export const SHOW_CONTACT_FORM = 'SHOW_CONTACT_FORM';
export const REQUEST_CONTACTS = 'REQUEST_CONTACTS';
export const RECEIVE_CONTACTS = 'RECEIVE_CONTACTS';

export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    contact
  };
};

export const editContact = (contact) => {
  return {
    type: UPDATE_CONTACT,
    contact
  };
};

export const deleteContact = (contact) => {
  return {
    type: DELETE_CONTACT,
    contact
  };
};

export const showContactForm = (contact) => {
  return {
    type: SHOW_CONTACT_FORM,
    contact
  };
};

export const requestContacts = () => {
  return {
    type: REQUEST_CONTACTS
  };
};

export const receiveContacts = (response) => {
  return {
    type: RECEIVE_CONTACTS,
    contacts: response.contacts
  };
};

function serviceCall(method, onFullfilled, onRequest) {
  return function (dispatch) {
    if (typeof onRequest === 'function') {
      dispatch(onRequest);
    }

    return method()
      .then((contact) => {
        dispatch(onFullfilled(contact));
      })
      .catch((error) => {
        throw (error);
      });
  };
}

export const loadContacts = () => {
  return serviceCall(
    ContactService.getAll,
    receiveContacts,
    requestContacts
  );
};

export const saveContact = (contact) => {
  return serviceCall(
    () => ContactService.save(contact),
    addContact
  );
};

export const updateContact = (contact) => {
  return serviceCall(
    () => ContactService.update(contact),
    editContact
  );
};

export const removeContact = (contact) => {
  return serviceCall(
    () => ContactService.delete(contact),
    deleteContact
  );
};
