import ContactData from '../mock/contacts';

export default (state = ContactData, action) => {
  switch (action.type) {
    case 'ADD_CONTACT':
      return [
        ...state,
        action.contact
      ];
    case 'UPDATE_CONTACT':
      return state.map((contact) => {
        if (contact.id === action.contact.id) {
          return action.contact;
        }
        return contact;
      });
    case 'DELETE_CONTACT':
      return state.filter(contact => contact.id !== action.id);
    default:
      return state;
  }
};
