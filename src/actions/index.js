export const addContact = (contact) => {
  return {
    type: 'ADD_CONTACT',
    contact
  };
};

export const editContact = (contact) => {
  return {
    type: 'UPDATE_CONTACT',
    contact
  };
};

export const deleteContact = (id) => {
  return {
    type: 'DELETE_CONTACT',
    id
  };
};

export const showContactForm = (contact) => {
  return {
    type: 'SHOW_CONTACT_FORM',
    contact
  };
};
